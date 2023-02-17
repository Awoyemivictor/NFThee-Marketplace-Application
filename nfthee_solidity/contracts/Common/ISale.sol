// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7 <0.9.0;

//-----------------------------------------------------------------------
// ISale
//-----------------------------------------------------------------------
interface ISale {
    //----------------------------------------
    // Events
    //----------------------------------------
    event Sale(
        address indexed contractAddress,
        uint256 indexed tokenId,
        address indexed seller,
        uint256 price,
        uint256 expireDate,
        uint256 saleId
    );
    event SaleCanceled(
        uint256 indexed saleId,
        address indexed contractAddress,
        uint256 indexed tokenId,
        address seller
    );
    event Sold(
        uint256 indexed saleId,
        address indexed contractAddress,
        uint256 indexed tokenId,
        address seller,
        address buyer,
        uint256 price
    );
    event SaleInvalidated(
        uint256 indexed saleId,
        address indexed contractAddress,
        uint256 indexed tokenId,
        address seller
    );

    //----------------------------------------
    // Functions
    //----------------------------------------
    function sell(
        address msgSender,
        address contractAddress,
        uint256 tokenId,
        uint256 price,
        uint256 period
    ) external;

    function cancelSale(address msgSender, uint256 saleId) external;

    function buy(address msgSender, uint256 saleId, uint256 amount) external;

    function invalidateSales(uint256[] calldata saleIds) external;
}
