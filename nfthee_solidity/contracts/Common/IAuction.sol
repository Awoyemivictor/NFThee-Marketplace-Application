// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7 <0.9.0;

//-----------------------------------------------------------------------
// IAuction
//-----------------------------------------------------------------------
interface IAuction {
    //----------------------------------------
    // Events
    //----------------------------------------
    event Auction(
        address indexed contractAddress,
        uint256 indexed tokenId,
        address auctioneer,
        uint256 startingPrice,
        uint256 expireDate,
        uint256 auctionId
    );
    event AuctionCanceled(
        uint256 indexed auctionId,
        address indexed contractAddress,
        uint256 indexed tokenId,
        address auctioneer
    );
    event AuctionBidded(
        uint256 indexed auctionId,
        address indexed contractAddress,
        uint256 indexed tokenId,
        address auctioneer,
        address newBidder,
        address oldBidder,
        uint256 newPrice,
        uint256 updatedExpireDate
    );
    event AuctionFinished(
        uint256 indexed auctionId,
        address indexed contractAddress,
        uint256 indexed tokenId,
        address auctioneer,
        address winner,
        uint256 price,
        uint256 expireDate
    );
    event AuctionWithdrawn(
        uint256 indexed auctionId,
        address indexed contractAddress,
        uint256 indexed tokenId,
        address auctioneer,
        address bidder,
        uint256 price
    );
    event AuctionInvalidated(
        uint256 indexed auctionId,
        address indexed contractAddress,
        uint256 indexed tokenId,
        address auctioneer,
        address bidder
    );

    //----------------------------------------
    // Functions
    //----------------------------------------
    function auction(
        address msgSender,
        address contractAddress,
        uint256 tokenId,
        uint256 startingPrice,
        uint256 period
    ) external;

    function cancelAuction(address msgSender, uint256 auctionId) external;

    function bid(
        address msgSender,
        uint256 auctionId,
        uint256 price,
        uint256 amount
    ) external;

    function finishAuction(address msgSender, uint256 auctionId) external;

    function withdrawFromAuction(address msgSender, uint256 auctionId) external;

    function invalidateAuctions(uint256[] calldata auctionIds) external;
}
