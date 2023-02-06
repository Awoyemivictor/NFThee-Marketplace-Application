// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "./Common/Trade.sol";
import "./Common/ISale.sol";

//-----------------------------------------
// Sale
//-----------------------------------------
contract Sale is Trade, ISale {
    //-------------------------------------------
    // constant
    //-------------------------------------------
    // ID offset
    uint256 private constant SALE_ID_OFS = 1;

    // I don't want to use a structure, so I manage it with an array of [uint256]
    uint256 private constant SALE_DATA_CONTRACT_ADDRESS = 0; // Contract address(address)
    uint256 private constant SALE_DATA_TOKEN_ID = 1; // Token ID
    uint256 private constant SALE_DATA_SELLER = 2; // Seller (address)
    uint256 private constant SALE_DATA_PRICE = 3; // Price
    uint256 private constant SALE_DATA_INFO = 4; // Information
    uint256 private constant SALE_DATA_SIZE = 5; // Data size

    // [SALE_DATA_INFO] Operation: Flag
    uint256 private constant SALE_DATA_INFO_FLAG_ACTIVE =
        0x8000000000000000000000000000000000000000000000000000000000000000; // Is it active?
    uint256 private constant SALE_DATA_INFO_FLAG_SOLD_OUT =
        0x4000000000000000000000000000000000000000000000000000000000000000; // Has it been sold?
    uint256 private constant SALE_DATA_INFO_FLAG_CANCELED =
        0x2000000000000000000000000000000000000000000000000000000000000000; // Has it been canceled?
    uint256 private constant SALE_DATA_INFO_FLAG_INVALID =
        0x1000000000000000000000000000000000000000000000000000000000000000; // Was it disabled?

    // [SALE_DATA_INFO] Operation: Buyer
    uint256 private constant SALE_DATA_INFO_BUYER_SHIFT = 0;
    uint256 private constant SALE_DATA_INFO_BUYER_MASK =
        0x000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF; // uint160: Buyer (address)

    // [SALE_DATA_INFO] Operation: Sales period
    uint256 private constant SALE_DATA_INFO_EXPIRE_DATE_SHIFT = 160;
    uint256 private constant SALE_DATA_INFO_EXPIRE_DATE_MASK =
        0x00000000FFFFFFFFFFFFFFFF0000000000000000000000000000000000000000; // uint64: End of sale date and time

    //-----------------------------------------
    // storage
    //-----------------------------------------
    mapping(uint256 => mapping(uint256 => uint256)) private _latestId;
    uint256[SALE_DATA_SIZE][] private _sales;

    //-----------------------------------------
    // constructor
    //-----------------------------------------
    constructor() Trade() {}

    //-----------------------------------------------
    // [public] Data acquisition: Premise that a valid saleId comes
    //-----------------------------------------------
    function saleContractAddress(uint256 saleId) public view returns (address) {
        return (
            address(
                (
                    uint160(
                        _sales[saleId - SALE_ID_OFS][SALE_DATA_CONTRACT_ADDRESS]
                    )
                )
            )
        );
    }

    function saleTokenId(uint256 saleId) public view returns (uint256) {
        return (_sales[saleId - SALE_ID_OFS][SALE_DATA_TOKEN_ID]);
    }

    function saleSeller(uint256 saleId) public view returns (address) {
        return (
            address((uint160(_sales[saleId - SALE_ID_OFS][SALE_DATA_SELLER])))
        );
    }

    function salePrice(uint256 saleId) public view returns (uint256) {
        return (_sales[saleId - SALE_ID_OFS][SALE_DATA_PRICE]);
    }

    function saleBuyer(uint256 saleId) public view returns (address) {
        return (
            address(
                uint160(
                    (_sales[saleId - SALE_ID_OFS][SALE_DATA_INFO] &
                        SALE_DATA_INFO_BUYER_MASK) >> SALE_DATA_INFO_BUYER_SHIFT
                )
            )
        );
    }

    function saleExpireDate(uint256 saleId) public view returns (uint256) {
        return ((_sales[saleId - SALE_ID_OFS][SALE_DATA_INFO] &
            SALE_DATA_INFO_EXPIRE_DATE_MASK) >>
            SALE_DATA_INFO_EXPIRE_DATE_SHIFT);
    }

    function saleIsActive(uint256 saleId) public view returns (bool) {
        return ((_sales[saleId - SALE_ID_OFS][SALE_DATA_INFO] &
            SALE_DATA_INFO_FLAG_ACTIVE) != 0);
    }

    function saleIsSoldOut(uint256 saleId) public view returns (bool) {
        return ((_sales[saleId - SALE_ID_OFS][SALE_DATA_INFO] &
            SALE_DATA_INFO_FLAG_SOLD_OUT) != 0);
    }

    function saleIsCanceled(uint256 saleId) public view returns (bool) {
        return ((_sales[saleId - SALE_ID_OFS][SALE_DATA_INFO] &
            SALE_DATA_INFO_FLAG_CANCELED) != 0);
    }

    function saleIsInvalid(uint256 saleId) public view returns (bool) {
        return ((_sales[saleId - SALE_ID_OFS][SALE_DATA_INFO] &
            SALE_DATA_INFO_FLAG_INVALID) != 0);
    }

    //----------------------------------------------
    // [external/onlyMarket] Sales start
    //----------------------------------------------
    function sell(
        address msgSender,
        address contractAddress,
        uint256 tokenId,
        uint256 price,
        uint256 period
    ) external override {
        // Fail if there is valid data for sale
        // removed only Market for testing purpose
        require(
            !_alive(uint256(uint160(contractAddress)), tokenId, msgSender),
            "existent alive sale"
        );

        // Is the owner valid?
        IERC721 tokenContract = IERC721(contractAddress);
        address owner = tokenContract.ownerOf(tokenId);
        require(owner == msgSender, "sender is not the owner");

        // Is the price valid?
        require(_checkPrice(price), "invalid price");

        // Is the period valid?
        require(_checkPeriod(period), "invalid period");

        //------------
        // Check completed
        //------------

        uint256 saleId = SALE_ID_OFS + _sales.length;

        uint256 expireDate;
        if (period == 0) {
            expireDate = 0;
        } else {
            expireDate = block.timestamp + period;
        }

        uint256[SALE_DATA_SIZE] memory words;
        words[SALE_DATA_CONTRACT_ADDRESS] = uint256(uint160(contractAddress));
        words[SALE_DATA_TOKEN_ID] = tokenId;
        words[SALE_DATA_SELLER] = uint256(uint160(msgSender));
        words[SALE_DATA_PRICE] = price;
        words[SALE_DATA_INFO] |=
            (expireDate << SALE_DATA_INFO_EXPIRE_DATE_SHIFT) &
            SALE_DATA_INFO_EXPIRE_DATE_MASK;

        // Flag setting (active)
        words[SALE_DATA_INFO] |= SALE_DATA_INFO_FLAG_ACTIVE;

        _sales.push(words);

        // Linking the latest information (suppressing relisting)
        _latestId[words[SALE_DATA_CONTRACT_ADDRESS]][
            words[SALE_DATA_TOKEN_ID]
        ] = saleId;

        // event
        emit Sale(
            contractAddress,
            tokenId,
            msgSender,
            price,
            expireDate,
            saleId
        );
    }

    //----------------------------------------------
    // [external/onlyMarket] selling discontinued
    //----------------------------------------------
    function cancelSale(
        address msgSender,
        uint256 saleId
    ) external override onlyMarket {
        require(_exists(saleId), "nonexistent sale");

        // I don't see any invalidation here (there is no problem with the discontinuation of sales)

        // Is it active?
        require(saleIsActive(saleId), "not active sale");

        // Are you an exhibitor?
        require(msgSender == saleSeller(saleId), "mismatch seller");

        //------------
        // Check completed
        //------------

        uint256 dataId = saleId - SALE_ID_OFS;
        uint256[SALE_DATA_SIZE] memory words = _sales[dataId];

        // Flag setting (deactivated and canceled)
        words[SALE_DATA_INFO] &= ~SALE_DATA_INFO_FLAG_ACTIVE;
        words[SALE_DATA_INFO] |= SALE_DATA_INFO_FLAG_CANCELED;

        // Update
        _sales[dataId] = words;

        // event
        emit SaleCanceled(
            saleId,
            saleContractAddress(saleId),
            saleTokenId(saleId),
            msgSender
        );
    }

    //--------------------------------------------------------------
    // [external/onlyMarket] Purchase (payment and NFT processing is left to the caller)
    //--------------------------------------------------------------
    function buy(
        address msgSender,
        uint256 saleId,
        uint256 amount
    ) external override {
        require(_exists(saleId), "nonexistent sale");

        // Is it disabled? (If it is invalidated, the transaction will not be completed)
        require(!saleIsInvalid(saleId), "invalid sale");

        // Is it active?
        require(saleIsActive(saleId), "not active sale");

        // Is the owner valid?
        IERC721 tokenContract = IERC721(saleContractAddress(saleId));
        address owner = tokenContract.ownerOf(saleTokenId(saleId));
        require(owner != msgSender, "sender is the owner");
        require(owner == saleSeller(saleId), "mismatch seller");

        // Confirm payment
        uint256 price = salePrice(saleId);
        require(price <= amount, "Insufficient amount");

        // Period judgment
        uint256 expireDate = saleExpireDate(saleId);
        require(expireDate == 0 || expireDate > block.timestamp, "expired");

        //------------
        // Check completed
        //------------

        uint256 dataId = saleId - SALE_ID_OFS;
        uint256[SALE_DATA_SIZE] memory words = _sales[dataId];

        // Flag setting (deactivated and sold)
        words[SALE_DATA_INFO] &= ~SALE_DATA_INFO_FLAG_ACTIVE;
        words[SALE_DATA_INFO] |= SALE_DATA_INFO_FLAG_SOLD_OUT;

        // Buyer settings
        uint256 buyer = uint256(uint160(msgSender));
        buyer =
            (buyer << SALE_DATA_INFO_BUYER_SHIFT) &
            SALE_DATA_INFO_BUYER_MASK;
        words[SALE_DATA_INFO] &= ~SALE_DATA_INFO_BUYER_MASK;
        words[SALE_DATA_INFO] |= buyer;

        // Update
        _sales[dataId] = words;

        // event
        emit Sold(
            saleId,
            saleContractAddress(saleId),
            saleTokenId(saleId),
            owner,
            msgSender,
            price
        );
    }

    //----------------------------------------------
    // [external/onlyOwner] Disable sales
    //----------------------------------------------
    function invalidateSales(
        uint256[] calldata saleIds
    ) external override onlyOwner {
        for (uint256 i = 0; i < saleIds.length; i++) {
            uint256 saleId = saleIds[i];

            // If enabled and not yet disabled
            if (_exists(saleId) && !saleIsInvalid(saleId)) {
                uint256 dataId = saleId - SALE_ID_OFS;
                uint256[SALE_DATA_SIZE] memory words = _sales[dataId];

                // Flag setting(ACTIVE does not sleep)
                words[SALE_DATA_INFO] |= SALE_DATA_INFO_FLAG_INVALID;

                // Update
                _sales[dataId] = words;

                // event
                emit SaleInvalidated(
                    saleId,
                    saleContractAddress(saleId),
                    saleTokenId(saleId),
                    saleSeller(saleId)
                );
            }
        }
    }

    //----------------------------------------------
    // [external] Token transfer information
    //----------------------------------------------
    function transferInfo(
        uint256 saleId
    ) external view override returns (uint256[4] memory) {
        require(_exists(saleId), "nonexistent sale");

        // See [ITrade.sol] for a breakdown of words
        uint256[4] memory words;
        words[0] = uint256(uint160(saleContractAddress(saleId)));
        words[1] = saleTokenId(saleId);
        words[2] = uint256(uint160(saleSeller(saleId)));
        words[3] = uint256(uint160(saleBuyer(saleId)));

        return (words);
    }

    //----------------------------------------------
    // [external] Get payment information
    //----------------------------------------------
    function payInfo(
        uint256 saleId
    ) external view override returns (uint256[3] memory) {
        require(_exists(saleId), "nonexistent sale");

        // See [ITrade.sol] for a breakdown of words
        uint256[3] memory words;
        words[0] = uint256(uint160(saleSeller(saleId)));
        words[1] = uint256(uint160(saleContractAddress(saleId)));
        words[2] = salePrice(saleId);

        return (words);
    }

    //---------------------------------------------------
    // [externa] Acquisition of refund information (unnecessary because there is no concept of deposit)
    //---------------------------------------------------

    //-----------------------------------------
    // [internal] check existence
    //-----------------------------------------
    function _exists(uint256 saleId) internal view returns (bool) {
        return (saleId >= SALE_ID_OFS &&
            saleId < (_sales.length + SALE_ID_OFS));
    }

    //-----------------------------------------
    // [internal] Is there a valid Sale?
    //-----------------------------------------
    function _alive(
        uint256 contractAddress,
        uint256 tokenId,
        address msgSender
    ) internal view returns (bool) {
        uint256 saleId = _latestId[contractAddress][tokenId];
        if (_exists(saleId)) {
            if (saleIsInvalid(saleId)) {
                return (false);
            }

            if (saleIsSoldOut(saleId)) {
                return (false);
            }

            if (saleIsCanceled(saleId)) {
                return (false);
            }

            if (!saleIsActive(saleId)) {
                return (false);
            }

            // Owners do not match
            IERC721 tokenContract = IERC721(address(uint160(contractAddress)));
            address owner = tokenContract.ownerOf(tokenId);
            if (owner != msgSender) {
                return (false);
            }

            // Expired
            uint256 expireDate = saleExpireDate(saleId);
            if (expireDate != 0 && expireDate <= block.timestamp) {
                return (false);
            }

            return (true);
        }

        return (false);
    }
}
