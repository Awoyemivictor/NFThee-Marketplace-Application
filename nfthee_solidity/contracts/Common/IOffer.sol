// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7 <0.9.0;

//-----------------------------------------------------------------------
// IOffer
//-----------------------------------------------------------------------
interface IOffer {
    //----------------------------------------
    // Events
    //----------------------------------------
    event Offer(
        address indexed contractAddress,
        uint256 indexed tokenId,
        address owner,
        address offeror,
        uint256 price,
        uint256 expireDate,
        uint256 offerId
    );
    event OfferCanceled(
        uint256 indexed offerId,
        address indexed contractAddress,
        uint256 indexed tokenId,
        address owner,
        address offeror,
        uint256 price
    );
    event OfferAccepted(
        uint256 indexed offerId,
        address indexed contractAddress,
        uint256 indexed tokenId,
        address owner,
        address offeror,
        uint256 price
    );
    event OfferWithdrawn(
        uint256 indexed offerId,
        address indexed contractAddress,
        uint256 indexed tokenId,
        address owner,
        address offeror,
        uint256 price
    );
    event OfferInvalidated(
        uint256 indexed offerId,
        address indexed contractAddress,
        uint256 indexed tokenId,
        address owner,
        address offeror
    );

    //----------------------------------------
    // Functions
    //----------------------------------------
    function offer(
        address msgSender,
        address contractAddress,
        uint256 tokenId,
        uint256 price,
        uint256 period,
        uint256 amount
    ) external;

    function cancelOffer(address msgSender, uint256 offerId) external;

    function acceptOffer(address msgSender, uint256 offerId) external;

    function withdrawFromOffer(address msgSender, uint256 offerId) external;

    function invalidateOffers(uint256[] calldata offerIds) external;
}
