// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7 <0.9.0;

//-----------------------------------------------------------------------
// IDutchAuction
//-----------------------------------------------------------------------
interface IDutchAuction {
    //----------------------------------------
    // Events
    //----------------------------------------
    event DutchAuction(
        address indexed contractAddress,
        uint256 indexed tokenId,
        address auctioneer,
        uint256 startingPrice,
        uint256 endingPrice,
        uint256 expireDate,
        uint256 startMargin,
        uint256 endMargin,
        uint256 auctionId
    );
    event DutchAuctionCanceled(
        uint256 indexed auctionId,
        address indexed contractAddress,
        uint256 indexed tokenId,
        address auctioneer
    );
    event DutchAuctionSold(
        uint256 indexed auctionId,
        address indexed contractAddress,
        uint256 indexed tokenId,
        address auctioneer,
        address buyer,
        uint256 price
    );
    event DutchAuctionInvalidated(
        uint256 indexed auctionId,
        address indexed contractAddress,
        uint256 indexed tokenId,
        address auctioneer
    );

    //----------------------------------------
    // Functions
    //----------------------------------------
    function dutchAuction(
        address msgSender,
        address contractAddress,
        uint256 tokenId,
        uint256 startingPrice,
        uint256 endingPrice,
        uint256 period,
        uint256 startMargin,
        uint256 endMargin
    ) external;

    function cancelDutchAuction(address msgSender, uint256 auctionId) external;

    function buyDutchAuction(
        address msgSender,
        uint256 auctionId,
        uint256 amount
    ) external;

    function invalidateDutchAuctions(uint256[] calldata auctionIds) external;
}
