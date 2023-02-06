// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

import "./ITrade.sol";

//-----------------------------------------
// Trade
//-----------------------------------------
contract Trade is Ownable, ITrade {
    //-----------------------------------------
    // Setting
    //-----------------------------------------
    address private _market; // Implemented in Trade (not published to ITrade & no event required = no need to monitor on the server side)

    uint256 private _max_price;
    uint256 private _min_price;

    uint256 private _max_period;
    uint256 private _min_period;

    bool private _only_no_limit_period;
    bool private _accept_no_limit_period;

    //-----------------------------------------
    // [public] market
    //-----------------------------------------
    function market() public view returns (address) {
        return (_market);
    }

    //-----------------------------------------
    // [external/onlyOwner] Market setting
    //-----------------------------------------
    function setMarket(address contractAddress) external onlyOwner {
        _market = contractAddress;
    }

    //-----------------------------------------
    // [modifier] Can only be called from the market
    //-----------------------------------------
    modifier onlyMarket() {
        require(market() == _msgSender(), "caller is not the market");
        _;
    }

    //-----------------------------------------
    // Constructor
    //-----------------------------------------
    constructor() Ownable() {
        // Price limit
        _max_price = 1000000000000000000000000000; // 1,000,000,000.000000 MATIC
        _min_price = 1000000000000; //             0.000001 MATIC

        emit MaxPriceModified(_max_price);
        emit MinPriceModified(_min_price);

        // Time limit
        _max_period = 30 * 24 * 60 * 60; // 30 days
        _min_period = 1 * 24 * 60 * 60; // 1 day

        emit MaxPeriodModified(_max_period);
        emit MinPeriodModified(_min_period);

        // Indefinite setting
        _only_no_limit_period = false;
        _accept_no_limit_period = false;

        emit OnlyNoLimitPeriodModified(_only_no_limit_period);
        emit AcceptNoLimiPeriodModified(_accept_no_limit_period);
    }

    //-----------------------------------------
    // [external] Confirmation
    //-----------------------------------------
    function maxPrice() external view virtual override returns (uint256) {
        return (_max_price);
    }

    function minPrice() external view virtual override returns (uint256) {
        return (_min_price);
    }

    function maxPeriod() external view virtual override returns (uint256) {
        return (_max_period);
    }

    function minPeriod() external view virtual override returns (uint256) {
        return (_min_period);
    }

    function onlyNoLimitPeriod() external view virtual override returns (bool) {
        return (_only_no_limit_period);
    }

    function acceptNoLimitPeriod()
        external
        view
        virtual
        override
        returns (bool)
    {
        return (_accept_no_limit_period);
    }

    //-----------------------------------------
    // [external/onlyOwner] Setting
    //-----------------------------------------
    function setMaxPrice(uint256 price) external virtual override onlyOwner {
        _max_price = price;

        emit MaxPriceModified(price);
    }

    function setMinPrice(uint256 price) external virtual override onlyOwner {
        _min_price = price;

        emit MinPriceModified(price);
    }

    function setMaxPeriod(uint256 period) external virtual override onlyOwner {
        _max_period = period;

        emit MaxPeriodModified(period);
    }

    function setMinPeriod(uint256 period) external virtual override onlyOwner {
        _min_period = period;

        emit MinPeriodModified(period);
    }

    function setOnlyNoLimitPeriod(
        bool flag
    ) external virtual override onlyOwner {
        _only_no_limit_period = flag;

        emit OnlyNoLimitPeriodModified(flag);
    }

    function setAcceptNoLimitPeriod(
        bool flag
    ) external virtual override onlyOwner {
        _accept_no_limit_period = flag;

        emit AcceptNoLimiPeriodModified(flag);
    }

    //-----------------------------------------
    // [internal] Price effectiveness
    //-----------------------------------------
    function _checkPrice(uint256 price) internal view virtual returns (bool) {
        if (price > _max_price) {
            return (false);
        }

        if (price < _min_price) {
            return (false);
        }

        return (true);
    }

    //-----------------------------------------
    // [internal] Validity of period
    //-----------------------------------------
    function _checkPeriod(uint256 period) internal view virtual returns (bool) {
        // When accepting only unlimited
        if (_only_no_limit_period) {
            return (period == 0);
        }

        // When accepting unlimited
        if (_accept_no_limit_period) {
            if (period == 0) {
                return (true);
            }
        }

        if (period > _max_period) {
            return (false);
        }

        if (period < _min_period) {
            return (false);
        }

        return (true);
    }

    //-----------------------------------------
    // [external] Token transfer information
    //-----------------------------------------
    function transferInfo(
        uint256 /*tradeId*/
    ) external view virtual override returns (uint256[4] memory) {
        uint256[4] memory words;
        return (words);
    }

    //-----------------------------------------
    // [external] Get payment information
    //-----------------------------------------
    function payInfo(
        uint256 /*tradeId*/
    ) external view virtual override returns (uint256[3] memory) {
        uint256[3] memory words;
        return (words);
    }

    //-----------------------------------------
    // [external] Get refund information
    //-----------------------------------------
    function refundInfo(
        uint256 /*tradeId*/
    ) external view virtual override returns (uint256[2] memory) {
        uint256[2] memory words;
        return (words);
    }
}
