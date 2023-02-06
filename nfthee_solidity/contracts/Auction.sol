// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "./Common/Trade.sol";
import "./Common/IAuction.sol";

//-----------------------------------------
// Auction
//-----------------------------------------
contract Auction is Trade, IAuction {
    //----------------------------------------
    // Events Events
    //----------------------------------------
    event ExtensionPeriodModified(uint256 extensionPeriod);

    //----------------------------------------
    // Constant
    //----------------------------------------
    // ID offset
    uint256 private constant AUCTION_ID_OFS = 1;

    // I don't want to use a structure, so I manage it with an array of [uint256]
    uint256 private constant AUCTION_DATA_CONTRACT_ADDRESS = 0; // Contract address(address)
    uint256 private constant AUCTION_DATA_TOKEN_ID = 1; // Token ID
    uint256 private constant AUCTION_DATA_AUCTIONEER = 2; // Organizer(address)
    uint256 private constant AUCTION_DATA_PRICE = 3; // Price (highest price)
    uint256 private constant AUCTION_DATA_INFO = 4; // information
    uint256 private constant AUCTION_DATA_SIZE = 5; // Data size

    // [AUCTION_DATA_INFO]Operation: Flag
    uint256 private constant AUCTION_DATA_INFO_FLAG_ACTIVE =
        0x8000000000000000000000000000000000000000000000000000000000000000; // Is it active?
    uint256 private constant AUCTION_DATA_INFO_FLAG_FINISHED =
        0x4000000000000000000000000000000000000000000000000000000000000000; // Is it finished?
    uint256 private constant AUCTION_DATA_INFO_FLAG_CANCELED =
        0x2000000000000000000000000000000000000000000000000000000000000000; // Has it been canceled?
    uint256 private constant AUCTION_DATA_INFO_FLAG_INVALID =
        0x1000000000000000000000000000000000000000000000000000000000000000; // Was it disabled?

    // [AUCTION_DATA_INFO]Operation: Bidder
    uint256 private constant AUCTION_DATA_INFO_BIDDER_SHIFT = 0;
    uint256 private constant AUCTION_DATA_INFO_BIDDER_MASK =
        0x000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF; // uint160: bidder(address)

    // [AUCTION_DATA_INFO]Operation: Holding period
    uint256 private constant AUCTION_DATA_INFO_EXPIRE_DATE_SHIFT = 160;
    uint256 private constant AUCTION_DATA_INFO_EXPIRE_DATE_MASK =
        0x00000000FFFFFFFFFFFFFFFF0000000000000000000000000000000000000000; // uint64: End date and time

    //----------------------------------------
    // Setting
    //----------------------------------------
    uint256 private _extension_period; // Automatic auction extension period

    //-----------------------------------------
    // storage
    //-----------------------------------------
    mapping(uint256 => mapping(uint256 => uint256)) private _latestId;
    uint256[AUCTION_DATA_SIZE][] private _auctions;

    //-----------------------------------------
    // Constructor
    //-----------------------------------------
    constructor() Trade() {
        _extension_period = 10 * 60; // 10 minuetes

        emit ExtensionPeriodModified(_extension_period);
    }

    //-----------------------------------------
    // [extrnal] Confirmation
    //-----------------------------------------
    function extensionPeriod() external view returns (uint256) {
        return (_extension_period);
    }

    //-----------------------------------------
    // [external/onlyOwner] Setting
    //-----------------------------------------
    function setExtensionPeriod(uint256 period) external onlyOwner {
        _extension_period = period;

        emit ExtensionPeriodModified(period);
    }

    //-----------------------------------------------
    // [public] Data acquisition: Assumption that a valid auctionId will come
    //-----------------------------------------------
    function auctionContractAddress(
        uint256 auctionId
    ) public view returns (address) {
        return (
            address(
                (
                    uint160(
                        _auctions[auctionId - AUCTION_ID_OFS][
                            AUCTION_DATA_CONTRACT_ADDRESS
                        ]
                    )
                )
            )
        );
    }

    function auctionTokenId(uint256 auctionId) public view returns (uint256) {
        return (_auctions[auctionId - AUCTION_ID_OFS][AUCTION_DATA_TOKEN_ID]);
    }

    function auctionAuctioneer(
        uint256 auctionId
    ) public view returns (address) {
        return (
            address(
                (
                    uint160(
                        _auctions[auctionId - AUCTION_ID_OFS][
                            AUCTION_DATA_AUCTIONEER
                        ]
                    )
                )
            )
        );
    }

    function auctionPrice(uint256 auctionId) public view returns (uint256) {
        return (_auctions[auctionId - AUCTION_ID_OFS][AUCTION_DATA_PRICE]);
    }

    function auctionBidder(uint256 auctionId) public view returns (address) {
        return (
            address(
                uint160(
                    (_auctions[auctionId - AUCTION_ID_OFS][AUCTION_DATA_INFO] &
                        AUCTION_DATA_INFO_BIDDER_MASK) >>
                        AUCTION_DATA_INFO_BIDDER_SHIFT
                )
            )
        );
    }

    function auctionExpireDate(
        uint256 auctionId
    ) public view returns (uint256) {
        return ((_auctions[auctionId - AUCTION_ID_OFS][AUCTION_DATA_INFO] &
            AUCTION_DATA_INFO_EXPIRE_DATE_MASK) >>
            AUCTION_DATA_INFO_EXPIRE_DATE_SHIFT);
    }

    function auctionIsActive(uint256 auctionId) public view returns (bool) {
        return ((_auctions[auctionId - AUCTION_ID_OFS][AUCTION_DATA_INFO] &
            AUCTION_DATA_INFO_FLAG_ACTIVE) != 0);
    }

    function auctionIsFinished(uint256 auctionId) public view returns (bool) {
        return ((_auctions[auctionId - AUCTION_ID_OFS][AUCTION_DATA_INFO] &
            AUCTION_DATA_INFO_FLAG_FINISHED) != 0);
    }

    function auctionIsCanceled(uint256 auctionId) public view returns (bool) {
        return ((_auctions[auctionId - AUCTION_ID_OFS][AUCTION_DATA_INFO] &
            AUCTION_DATA_INFO_FLAG_CANCELED) != 0);
    }

    function auctionIsInvalid(uint256 auctionId) public view returns (bool) {
        return ((_auctions[auctionId - AUCTION_ID_OFS][AUCTION_DATA_INFO] &
            AUCTION_DATA_INFO_FLAG_INVALID) != 0);
    }

    //----------------------------------------------
    // [external/onlyMarket] Auction start
    //----------------------------------------------
    function auction(
        address msgSender,
        address contractAddress,
        uint256 tokenId,
        uint256 price,
        uint256 period
    ) external override onlyMarket {
        // Fail if valid data in the auction exists
        require(
            !_alive(uint256(uint160(contractAddress)), tokenId, msgSender),
            "existent alive auction"
        );

        // Is the owner valid?
        IERC721 tokenContract = IERC721(contractAddress);
        address owner = tokenContract.ownerOf(tokenId);
        require(owner == msgSender, "sender is not the owner");

        // Check the price
        require(_checkPrice(price), "invalid price");

        // Is the period valid?
        require(period != 0, "auction not accept no limit period"); // It is strange that the end time is not set in the auction
        require(_checkPeriod(period), "invalid period");

        //------------
        // Check completed
        //------------

        uint256 auctionId = AUCTION_ID_OFS + _auctions.length;
        uint256 expireDate = block.timestamp + period;

        uint256[AUCTION_DATA_SIZE] memory words;
        words[AUCTION_DATA_CONTRACT_ADDRESS] = uint256(
            uint160(contractAddress)
        );
        words[AUCTION_DATA_TOKEN_ID] = tokenId;
        words[AUCTION_DATA_AUCTIONEER] = uint256(uint160(msgSender));
        words[AUCTION_DATA_PRICE] = price;
        words[AUCTION_DATA_INFO] |=
            (expireDate << AUCTION_DATA_INFO_EXPIRE_DATE_SHIFT) &
            AUCTION_DATA_INFO_EXPIRE_DATE_MASK;

        // Flag setting (active)
        words[AUCTION_DATA_INFO] |= AUCTION_DATA_INFO_FLAG_ACTIVE;

        _auctions.push(words);

        // Linking the latest information (suppressing relisting)
        _latestId[words[AUCTION_DATA_CONTRACT_ADDRESS]][
            words[AUCTION_DATA_TOKEN_ID]
        ] = auctionId;

        // event
        emit Auction(
            contractAddress,
            tokenId,
            msgSender,
            price,
            expireDate,
            auctionId
        );
    }

    //----------------------------------------------
    // [external/onlyMarket] Auction canceled
    //----------------------------------------------
    function cancelAuction(
        address msgSender,
        uint256 auctionId
    ) external override onlyMarket {
        require(_exists(auctionId), "nonexistent auction");

        // I don't see any invalidation here (the auction can be canceled without any problem)

        // Are you in an auction?
        require(auctionIsActive(auctionId), "not on auction");

        // Is it the organizer?
        require(
            msgSender == auctionAuctioneer(auctionId),
            "mismatch auctioneer"
        );

        // Are there any bidders?
        require(auctionBidder(auctionId) == address(0), "existent bidder");

        //------------
        // Check completed
        //------------

        uint256 dataId = auctionId - AUCTION_ID_OFS;
        uint256[AUCTION_DATA_SIZE] memory words = _auctions[dataId];

        // Flag setting (deactivated and canceled)
        words[AUCTION_DATA_INFO] &= ~AUCTION_DATA_INFO_FLAG_ACTIVE;
        words[AUCTION_DATA_INFO] |= AUCTION_DATA_INFO_FLAG_CANCELED;

        // Update
        _auctions[dataId] = words;

        // event
        emit AuctionCanceled(
            auctionId,
            auctionContractAddress(auctionId),
            auctionTokenId(auctionId),
            msgSender
        );
    }

    //------------------------------------------------------
    // [external/onlyMarket] bid
    //------------------------------------------------------
    function bid(
        address msgSender,
        uint256 auctionId,
        uint256 price,
        uint256 amount
    ) external override onlyMarket {
        require(_exists(auctionId), "nonexistent auction");

        // Is it disabled? (If it is invalidated, the bid will not be successful)
        require(!auctionIsInvalid(auctionId), "invalid auction");

        // Is it on sale?
        require(auctionIsActive(auctionId), "not on auction");

        // Is the owner valid?
        IERC721 tokenContract = IERC721(auctionContractAddress(auctionId));
        address owner = tokenContract.ownerOf(auctionTokenId(auctionId));
        require(owner != msgSender, "sender is the owner");
        require(owner == auctionAuctioneer(auctionId), "mismatch auctioneer");

        // Current bidder
        address oldBidder = auctionBidder(auctionId);
        require(oldBidder != msgSender, "sender is the bidder");

        // Confirm bid amount (If it is the first bid, you can bid at the starting price)
        if (oldBidder == address(0)) {
            require(price >= auctionPrice(auctionId), "invalid price");
        } else {
            require(price > auctionPrice(auctionId), "invalid price");
        }
        require(price <= amount, "Insufficient amount");

        // Period judgment
        uint256 expireDate = auctionExpireDate(auctionId);
        require(expireDate > block.timestamp, "expired");

        //------------
        // Check completed
        //------------

        uint256 dataId = auctionId - AUCTION_ID_OFS;
        uint256[AUCTION_DATA_SIZE] memory words = _auctions[dataId];

        // Bidder update
        {
            uint256 temp = uint256(uint160(msgSender));
            temp =
                (temp << AUCTION_DATA_INFO_BIDDER_SHIFT) &
                AUCTION_DATA_INFO_BIDDER_MASK;
            words[AUCTION_DATA_INFO] &= ~AUCTION_DATA_INFO_BIDDER_MASK;
            words[AUCTION_DATA_INFO] |= temp;
        }

        // Bid amount update
        words[AUCTION_DATA_PRICE] = price;

        // Judgment to extend the purchase period
        if (
            _extension_period > 0 &&
            expireDate < (block.timestamp + _extension_period)
        ) {
            expireDate = block.timestamp + _extension_period;

            uint256 temp = uint256(expireDate);
            temp =
                (temp << AUCTION_DATA_INFO_EXPIRE_DATE_SHIFT) &
                AUCTION_DATA_INFO_EXPIRE_DATE_MASK;
            words[AUCTION_DATA_INFO] &= ~AUCTION_DATA_INFO_EXPIRE_DATE_MASK;
            words[AUCTION_DATA_INFO] |= temp;
        } else {
            expireDate = 0; // No extension
        }

        // Update
        _auctions[dataId] = words;

        // event
        emit AuctionBidded(
            auctionId,
            auctionContractAddress(auctionId),
            auctionTokenId(auctionId),
            owner,
            msgSender,
            oldBidder,
            price,
            expireDate
        );
    }

    //-------------------------------------------------------------------------
    // [external/onlyMarket] End of auction (payment and NFT processing are left to the caller)
    //-------------------------------------------------------------------------
    function finishAuction(
        address msgSender,
        uint256 auctionId
    ) external override onlyMarket {
        require(_exists(auctionId), "nonexistent auction");

        // Is it disabled? (If it is invalidated, the transaction will not be completed)
        require(!auctionIsInvalid(auctionId), "invalid auction");

        // Is it valid?
        require(auctionIsActive(auctionId), "not on auction");

        // Is the owner valid?
        IERC721 tokenContract = IERC721(auctionContractAddress(auctionId));
        address owner = tokenContract.ownerOf(auctionTokenId(auctionId));
        require(owner == auctionAuctioneer(auctionId), "mismatch auctioneer");

        // Access from owner or bidder?
        address bidder = auctionBidder(auctionId);
        require(
            msgSender == owner || msgSender == bidder,
            "sender neither owner nor bidder"
        );

        // Period judgment
        uint256 expireDate = auctionExpireDate(auctionId);
        require(expireDate <= block.timestamp, "not expired");

        //------------
        // Check completed
        //------------

        uint256 dataId = auctionId - AUCTION_ID_OFS;
        uint256[AUCTION_DATA_SIZE] memory words = _auctions[dataId];

        // Flag setting (deactivate and exit)
        words[AUCTION_DATA_INFO] &= ~AUCTION_DATA_INFO_FLAG_ACTIVE;
        words[AUCTION_DATA_INFO] |= AUCTION_DATA_INFO_FLAG_FINISHED;

        // Update
        _auctions[dataId] = words;

        // event
        emit AuctionFinished(
            auctionId,
            auctionContractAddress(auctionId),
            auctionTokenId(auctionId),
            owner,
            bidder,
            auctionPrice(auctionId),
            expireDate
        );
    }

    //-----------------------------------------------------------------------------------------
    // [external/onlyMarket] Bid refund (when the item becomes invalid) (Refund processing is left to the caller)
    //-----------------------------------------------------------------------------------------
    function withdrawFromAuction(
        address msgSender,
        uint256 auctionId
    ) external override onlyMarket {
        require(_exists(auctionId), "nonexistent auction");

        // Is it valid?
        require(auctionIsActive(auctionId), "not active auction");

        // Are you a bidder?
        require(msgSender == auctionBidder(auctionId), "not bidder");

        // Do you meet the refund conditions? (The auction has been disabled or the owner has changed)
        IERC721 tokenContract = IERC721(auctionContractAddress(auctionId));
        address owner = tokenContract.ownerOf(auctionTokenId(auctionId));
        require(
            auctionIsInvalid(auctionId) ||
                owner != auctionAuctioneer(auctionId),
            "valid auction"
        );

        //------------
        // Check completed
        //------------

        uint256 dataId = auctionId - AUCTION_ID_OFS;
        uint256[AUCTION_DATA_SIZE] memory words = _auctions[dataId];

        // Flag setting (only deactivate)
        words[AUCTION_DATA_INFO] &= ~AUCTION_DATA_INFO_FLAG_ACTIVE;

        // Update
        _auctions[dataId] = words;

        // event
        emit AuctionWithdrawn(
            auctionId,
            auctionContractAddress(auctionId),
            auctionTokenId(auctionId),
            auctionAuctioneer(auctionId),
            msgSender,
            auctionPrice(auctionId)
        );
    }

    //----------------------------------------------
    // [external/onlyOwner] Invalidation of auction
    //----------------------------------------------
    function invalidateAuctions(
        uint256[] calldata auctionIds
    ) external override onlyOwner {
        for (uint256 i = 0; i < auctionIds.length; i++) {
            uint256 auctionId = auctionIds[i];

            // If enabled and not yet disabled
            if (_exists(auctionId) && !auctionIsInvalid(auctionId)) {
                uint256 dataId = auctionId - AUCTION_ID_OFS;
                uint256[AUCTION_DATA_SIZE] memory words = _auctions[dataId];

                // Flag setting(ACTIVE does not sleep)
                words[AUCTION_DATA_INFO] |= AUCTION_DATA_INFO_FLAG_INVALID;

                // Update
                _auctions[dataId] = words;

                // event
                emit AuctionInvalidated(
                    auctionId,
                    auctionContractAddress(auctionId),
                    auctionTokenId(auctionId),
                    auctionAuctioneer(auctionId),
                    auctionBidder(auctionId)
                );
            }
        }
    }

    //----------------------------------------------
    // [external] Token transfer information
    //----------------------------------------------
    function transferInfo(
        uint256 auctionId
    ) external view override returns (uint256[4] memory) {
        require(_exists(auctionId), "nonexistent auction");

        // See [ITrade.sol] for a breakdown of words
        uint256[4] memory words;
        words[0] = uint256(uint160(auctionContractAddress(auctionId)));
        words[1] = auctionTokenId(auctionId);
        words[2] = uint256(uint160(auctionAuctioneer(auctionId)));
        words[3] = uint256(uint160(auctionBidder(auctionId)));

        return (words);
    }

    //----------------------------------------------
    // [external] Get payment information
    //----------------------------------------------
    function payInfo(
        uint256 auctionId
    ) external view override returns (uint256[3] memory) {
        require(_exists(auctionId), "nonexistent auction");

        // See [ITrade.sol] for a breakdown of words
        uint256[3] memory words;
        words[0] = uint256(uint160(auctionAuctioneer(auctionId)));
        words[1] = uint256(uint160(auctionContractAddress(auctionId)));
        words[2] = auctionPrice(auctionId);

        return (words);
    }

    //----------------------------------------------
    // [external] Get refund information
    //----------------------------------------------
    function refundInfo(
        uint256 auctionId
    ) external view override returns (uint256[2] memory) {
        require(_exists(auctionId), "nonexistent auction");

        // See [ITrade.sol] for a breakdown of words
        uint256[2] memory words;
        words[0] = uint256(uint160(auctionBidder(auctionId)));
        words[1] = auctionPrice(auctionId);

        return (words);
    }

    //-----------------------------------------
    // [internal] Is there a valid Auction?
    //-----------------------------------------
    function _exists(uint256 auctionId) internal view returns (bool) {
        return (auctionId >= AUCTION_ID_OFS &&
            auctionId < (_auctions.length + AUCTION_ID_OFS));
    }

    //-----------------------------------------
    // [internal] Is it on sale?
    //-----------------------------------------
    function _alive(
        uint256 contractAddress,
        uint256 tokenId,
        address msgSender
    ) internal view returns (bool) {
        uint256 auctionId = _latestId[contractAddress][tokenId];
        if (_exists(auctionId)) {
            if (auctionIsInvalid(auctionId)) {
                return (false);
            }

            if (auctionIsFinished(auctionId)) {
                return (false);
            }

            if (auctionIsCanceled(auctionId)) {
                return (false);
            }

            if (!auctionIsActive(auctionId)) {
                return (false);
            }

            // Owners do not match
            IERC721 tokenContract = IERC721(address(uint160(contractAddress)));
            address owner = tokenContract.ownerOf(tokenId);
            if (owner != msgSender) {
                return (false);
            }

            // Expired (here, indefinite [expireDate == 0] is judged to be invalid)
            uint256 expireDate = auctionExpireDate(auctionId);
            if (expireDate <= block.timestamp) {
                return (false);
            }

            return (true);
        }

        return (false);
    }
}
