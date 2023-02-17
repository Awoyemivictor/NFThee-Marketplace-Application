// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7 <0.9.0;

//-----------------------------------------------------------------------
// ITrade
//-----------------------------------------------------------------------
interface ITrade {
    //----------------------------------------
    // Events
    //----------------------------------------
    event MaxPriceModified(uint256 maxPrice);
    event MinPriceModified(uint256 minPrice);

    event MaxPeriodModified(uint256 maxPrice);
    event MinPeriodModified(uint256 minPrice);

    event OnlyNoLimitPeriodModified(bool);
    event AcceptNoLimiPeriodModified(bool);

    //----------------------------------------
    // Functions
    //----------------------------------------
    function maxPrice() external view returns (uint256);

    function minPrice() external view returns (uint256);

    function setMaxPrice(uint256 price) external;

    function setMinPrice(uint256 price) external;

    function maxPeriod() external view returns (uint256);

    function minPeriod() external view returns (uint256);

    function setMaxPeriod(uint256 period) external;

    function setMinPeriod(uint256 period) external;

    function onlyNoLimitPeriod() external view returns (bool);

    function acceptNoLimitPeriod() external view returns (bool);

    function setOnlyNoLimitPeriod(bool flag) external;

    function setAcceptNoLimitPeriod(bool flag) external;

    //----------------------------------------------
    // Token transfer information
    //----------------------------------------------
    // The breakdown of uint256 [4] is as follows
    // ・ [0]: Token contract (cast to ERC721 and use)
    // ・ [1]: Token ID
    // ・ [2]: Donor side (cast to address and use)
    // ・ [3]: Recipient (cast to address and use)
    //----------------------------------------------
    function transferInfo(
        uint256 tradeId
    ) external view returns (uint256[4] memory);

    // ----------------------------------------------
    // Get payment information
    // ----------------------------------------------
    // The breakdown of uint256 [2] is as follows
    // ・ [0]: Payment destination (cast to payable address)
    // ・ [1]: Contract address (cast to ERC721 and used)
    // ・ [2]: Payment amount
    // ----------------------------------------------
    function payInfo(uint256 tradeId) external view returns (uint256[3] memory);

    //----------------------------------------------
    // Get refund information
    // ----------------------------------------------
    // The breakdown of uint256 [2] is as follows
    // ・ [0]: Refund destination (cast to payable address)
    // ・ [1]: Refund amount
    //----------------------------------------------
    function refundInfo(
        uint256 tradeId
    ) external view returns (uint256[2] memory);
}
