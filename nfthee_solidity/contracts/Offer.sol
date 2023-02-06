// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "./Common/Trade.sol";
import "./Common/IOffer.sol";

//-----------------------------------------
// Offer
//-----------------------------------------
contract Offer is Trade, IOffer {
    //----------------------------------------
    // constant
    //----------------------------------------
    // ID offset
    uint256 private constant OFFER_ID_OFS = 1;

    // I don't want to use a structure, so I manage it with an array of [uint256]
    uint256 private constant OFFER_DATA_CONTRACT_ADDRESS = 0; // Contract address (address)
    uint256 private constant OFFER_DATA_TOKEN_ID = 1; // Token ID
    uint256 private constant OFFER_DATA_OWNER = 2; // Holder (address)
    uint256 private constant OFFER_DATA_PRICE = 3; // price
    uint256 private constant OFFER_DATA_INFO = 4; // information
    uint256 private constant OFFER_DATA_SIZE = 5; // Data size

    // [OFFER_DATA_INFO] Operation: Flag
    uint256 private constant OFFER_DATA_INFO_FLAG_ACTIVE =
        0x8000000000000000000000000000000000000000000000000000000000000000; // Is it active?
    uint256 private constant OFFER_DATA_INFO_FLAG_ACCEPTED =
        0x4000000000000000000000000000000000000000000000000000000000000000; // Have you consented?
    uint256 private constant OFFER_DATA_INFO_FLAG_CANCELED =
        0x2000000000000000000000000000000000000000000000000000000000000000; // Has it been canceled?
    uint256 private constant OFFER_DATA_INFO_FLAG_INVALID =
        0x1000000000000000000000000000000000000000000000000000000000000000; // Was it disabled?

    // [OFFER_DATA_INFO] Operation: Applicant
    uint256 private constant OFFER_DATA_INFO_OFFEROR_SHIFT = 0;
    uint256 private constant OFFER_DATA_INFO_OFFEROR_MASK =
        0x000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF; // uint160: Applicant (address)

    // [OFFER_DATA_INFO] Operation: Application period
    uint256 private constant OFFER_DATA_INFO_EXPIRE_DATE_SHIFT = 160;
    uint256 private constant OFFER_DATA_INFO_EXPIRE_DATE_MASK =
        0x00000000FFFFFFFFFFFFFFFF0000000000000000000000000000000000000000; // uint64：Application end date and time

    //-----------------------------------------
    // storage
    //-----------------------------------------
    uint256[OFFER_DATA_SIZE][] private _offers;

    //-----------------------------------------
    // constructor
    //-----------------------------------------
    constructor() Trade() {}

    //-----------------------------------------------
    // [public] Data acquisition: Assumption that a valid offerId comes
    //-----------------------------------------------
    function offerContractAddress(
        uint256 offerId
    ) public view returns (address) {
        return (
            address(
                (
                    uint160(
                        _offers[offerId - OFFER_ID_OFS][
                            OFFER_DATA_CONTRACT_ADDRESS
                        ]
                    )
                )
            )
        );
    }

    function offerTokenId(uint256 offerId) public view returns (uint256) {
        return (_offers[offerId - OFFER_ID_OFS][OFFER_DATA_TOKEN_ID]);
    }

    function offerOwner(uint256 offerId) public view returns (address) {
        return (
            address(
                (uint160(_offers[offerId - OFFER_ID_OFS][OFFER_DATA_OWNER]))
            )
        );
    }

    function offerPrice(uint256 offerId) public view returns (uint256) {
        return (_offers[offerId - OFFER_ID_OFS][OFFER_DATA_PRICE]);
    }

    function offerOfferor(uint256 offerId) public view returns (address) {
        return (
            address(
                uint160(
                    (_offers[offerId - OFFER_ID_OFS][OFFER_DATA_INFO] &
                        OFFER_DATA_INFO_OFFEROR_MASK) >>
                        OFFER_DATA_INFO_OFFEROR_SHIFT
                )
            )
        );
    }

    function offerExpireDate(uint256 offerId) public view returns (uint256) {
        return ((_offers[offerId - OFFER_ID_OFS][OFFER_DATA_INFO] &
            OFFER_DATA_INFO_EXPIRE_DATE_MASK) >>
            OFFER_DATA_INFO_EXPIRE_DATE_SHIFT);
    }

    function offerIsActive(uint256 offerId) public view returns (bool) {
        return ((_offers[offerId - OFFER_ID_OFS][OFFER_DATA_INFO] &
            OFFER_DATA_INFO_FLAG_ACTIVE) != 0);
    }

    function offerIsAccepted(uint256 offerId) public view returns (bool) {
        return ((_offers[offerId - OFFER_ID_OFS][OFFER_DATA_INFO] &
            OFFER_DATA_INFO_FLAG_ACCEPTED) != 0);
    }

    function offerIsCanceled(uint256 offerId) public view returns (bool) {
        return ((_offers[offerId - OFFER_ID_OFS][OFFER_DATA_INFO] &
            OFFER_DATA_INFO_FLAG_CANCELED) != 0);
    }

    function offerIsInvalid(uint256 offerId) public view returns (bool) {
        return ((_offers[offerId - OFFER_ID_OFS][OFFER_DATA_INFO] &
            OFFER_DATA_INFO_FLAG_INVALID) != 0);
    }

    //----------------------------------------------
    // [external/onlyMarket] application
    //----------------------------------------------
    function offer(
        address msgSender,
        address contractAddress,
        uint256 tokenId,
        uint256 price,
        uint256 period,
        uint256 amount
    ) external override onlyMarket {
        // Is the owner valid?
        IERC721 tokenContract = IERC721(contractAddress);
        address owner = tokenContract.ownerOf(tokenId);
        require(owner != address(0), "burned token");
        require(owner != msgSender, "offeror is the owner");

        // Payment confirmation
        require(_checkPrice(price), "invalid price");
        require(price <= amount, "Insufficient amount");

        // Is the period valid?
        require(_checkPeriod(period), "invalid period");

        //------------
        // Check completed
        //------------

        uint256 offerId = OFFER_ID_OFS + _offers.length;

        uint256 expireDate;
        if (period == 0) {
            expireDate = 0;
        } else {
            expireDate = block.timestamp + period;
        }

        uint256[OFFER_DATA_SIZE] memory words;
        words[OFFER_DATA_CONTRACT_ADDRESS] = uint256(uint160(contractAddress));
        words[OFFER_DATA_TOKEN_ID] = tokenId;
        words[OFFER_DATA_OWNER] = uint256(uint160(owner));
        words[OFFER_DATA_PRICE] = price;

        uint256 offeror = uint256(uint160(msgSender));
        words[OFFER_DATA_INFO] |=
            (offeror << OFFER_DATA_INFO_OFFEROR_SHIFT) &
            OFFER_DATA_INFO_OFFEROR_MASK;
        words[OFFER_DATA_INFO] |=
            (expireDate << OFFER_DATA_INFO_EXPIRE_DATE_SHIFT) &
            OFFER_DATA_INFO_EXPIRE_DATE_MASK;

        // Flag setting (active)
        words[OFFER_DATA_INFO] |= OFFER_DATA_INFO_FLAG_ACTIVE;

        _offers.push(words);

        // event
        emit Offer(
            contractAddress,
            tokenId,
            owner,
            msgSender,
            price,
            expireDate,
            offerId
        );
    }

    //-------------------------------------------------------------
    // [external/onlyMarket] Cancellation of application (refund processing is left to the caller)
    //-------------------------------------------------------------
    function cancelOffer(
        address msgSender,
        uint256 offerId
    ) external override onlyMarket {
        require(_exists(offerId), "nonexistent offer");

        // I do not see invalidation here (because it will be refunded)

        // Is it active?
        require(offerIsActive(offerId), "not active offer");

        // Applicant judgment
        address offeror = offerOfferor(offerId);
        require(msgSender == offeror, "not offeror");

        //------------
        // Check completed
        //------------

        uint256 dataId = offerId - OFFER_ID_OFS;
        uint256[OFFER_DATA_SIZE] memory words = _offers[dataId];

        // Flag setting (deactivated and canceled)
        words[OFFER_DATA_INFO] &= ~OFFER_DATA_INFO_FLAG_ACTIVE;
        words[OFFER_DATA_INFO] |= OFFER_DATA_INFO_FLAG_CANCELED;

        // update
        _offers[dataId] = words;

        // event
        emit OfferCanceled(
            offerId,
            offerContractAddress(offerId),
            offerTokenId(offerId),
            offerOwner(offerId),
            msgSender,
            offerPrice(offerId)
        );
    }

    //------------------------------------------------------------------
    // [external/onlyMarket] Acceptance of application (payment and NFT processing are left to the caller)
    //------------------------------------------------------------------
    function acceptOffer(
        address msgSender,
        uint256 offerId
    ) external override onlyMarket {
        require(_exists(offerId), "nonexistent offer");

        // Has it been disabled? (If it is invalidated, the transaction will not be completed)
        require(!offerIsInvalid(offerId), "invalid offer");

        // Is it valid?
        require(offerIsActive(offerId), "offer not active");

        // Is the owner valid?
        IERC721 tokenContract = IERC721(offerContractAddress(offerId));
        address owner = tokenContract.ownerOf(offerTokenId(offerId));
        require(owner == msgSender, "sender is not the owner");
        require(owner == offerOwner(offerId), "mismatch owner");

        // Period judgment
        uint256 expireDate = offerExpireDate(offerId);
        require(expireDate == 0 || expireDate > block.timestamp, "expired");

        //------------
        // Check completed
        //------------

        uint256 dataId = offerId - OFFER_ID_OFS;
        uint256[OFFER_DATA_SIZE] memory words = _offers[dataId];

        // Flag setting (inactive and accepted)
        words[OFFER_DATA_INFO] &= ~OFFER_DATA_INFO_FLAG_ACTIVE;
        words[OFFER_DATA_INFO] |= OFFER_DATA_INFO_FLAG_ACCEPTED;

        // update
        _offers[dataId] = words;

        // event
        emit OfferAccepted(
            offerId,
            offerContractAddress(offerId),
            offerTokenId(offerId),
            owner,
            offerOfferor(offerId),
            offerPrice(offerId)
        );
    }

    //----------------------------------------------------------------------------------------
    // [external/onlyMarket] Refund of application (when the product becomes invalid) (Refund processing is left to the caller)
    //----------------------------------------------------------------------------------------
    function withdrawFromOffer(
        address msgSender,
        uint256 offerId
    ) external override onlyMarket {
        require(_exists(offerId), "nonexistent offer");

        // Is it valid?
        require(offerIsActive(offerId), "not active offer");

        // Are you a bidder?
        require(msgSender == offerOfferor(offerId), "not offeror");

        // Do you meet the refund conditions? (The offer has been invalidated or the owner change)

        IERC721 tokenContract = IERC721(offerContractAddress(offerId));
        address owner = tokenContract.ownerOf(offerTokenId(offerId));
        require(
            offerIsInvalid(offerId) || owner != offerOwner(offerId),
            "valid offer"
        );

        //------------
        // Check completed
        //------------

        uint256 dataId = offerId - OFFER_ID_OFS;
        uint256[OFFER_DATA_SIZE] memory words = _offers[dataId];

        // Flag setting (just deactivate)
        words[OFFER_DATA_INFO] &= ~OFFER_DATA_INFO_FLAG_ACTIVE;

        // update
        _offers[dataId] = words;

        // event
        emit OfferWithdrawn(
            offerId,
            offerContractAddress(offerId),
            offerTokenId(offerId),
            offerOwner(offerId),
            msgSender,
            offerPrice(offerId)
        );
    }

    //----------------------------------------------
    // [external/onlyOwner] Invalidation of offer
    //----------------------------------------------
    function invalidateOffers(
        uint256[] calldata offerIds
    ) external override onlyOwner {
        for (uint256 i = 0; i < offerIds.length; i++) {
            uint256 offerId = offerIds[i];

            // If not already disabled
            if (_exists(offerId) && !offerIsInvalid(offerId)) {
                uint256 dataId = offerId - OFFER_ID_OFS;
                uint256[OFFER_DATA_SIZE] memory words = _offers[dataId];

                // Flag setting (ACTIVE does not sleep)
                words[OFFER_DATA_INFO] |= OFFER_DATA_INFO_FLAG_INVALID;

                // update
                _offers[dataId] = words;

                // event
                emit OfferInvalidated(
                    offerId,
                    offerContractAddress(offerId),
                    offerTokenId(offerId),
                    offerOwner(offerId),
                    offerOfferor(offerId)
                );
            }
        }
    }

    //----------------------------------------------
    // [external] Token transfer information
    //----------------------------------------------
    function transferInfo(
        uint256 offerId
    ) external view override returns (uint256[4] memory) {
        require(_exists(offerId), "nonexistent offer");

        // See [ITrade.sol] for a breakdown of words
        uint256[4] memory words;
        words[0] = uint256(uint160(offerContractAddress(offerId)));
        words[1] = offerTokenId(offerId);
        words[2] = uint256(uint160(offerOwner(offerId)));
        words[3] = uint256(uint160(offerOfferor(offerId)));

        return (words);
    }

    //----------------------------------------------
    // [external] Get payment information
    //----------------------------------------------
    function payInfo(
        uint256 offerId
    ) external view override returns (uint256[3] memory) {
        require(_exists(offerId), "nonexistent offer");

        // See [ITrade.sol] for a breakdown of words
        uint256[3] memory words;
        words[0] = uint256(uint160(offerOwner(offerId)));
        words[1] = uint256(uint160(offerContractAddress(offerId)));
        words[2] = offerPrice(offerId);

        return (words);
    }

    //----------------------------------------------
    // [externa] Get refund information
    //----------------------------------------------
    function refundInfo(
        uint256 offerId
    ) external view override returns (uint256[2] memory) {
        require(_exists(offerId), "nonexistent offer");

        // See [ITrade.sol] for a breakdown of words
        uint256[2] memory words;
        words[0] = uint256(uint160(offerOfferor(offerId)));
        words[1] = offerPrice(offerId);

        return (words);
    }

    //-----------------------------------------
    // [internal] check existence
    //-----------------------------------------
    function _exists(uint256 offerId) internal view returns (bool) {
        return (offerId >= OFFER_ID_OFS &&
            offerId < (_offers.length + OFFER_ID_OFS));
    }
}
