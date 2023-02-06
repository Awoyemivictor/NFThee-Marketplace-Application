// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "./Common/ITrade.sol";
import "./Common/ISale.sol";
import "./Common/IOffer.sol";
import "./Common/IAuction.sol";
import "./Common/IDutchAuction.sol";

//----------------------------------------------------------------
// Market (this contract must not change no matter what happens once it is released)
//----------------------------------------------------------------
contract Market is Ownable {
    //-----------------------------------------
    // event
    //-----------------------------------------
    event SaleStartSuspended(bool);
    event OfferStartSuspended(bool);
    event AuctionStartSuspended(bool);
    event DutchAuctionStartSuspended(bool);

    event SaleModified(address contractAddress);
    event OfferModified(address contractAddress);
    event AuctionModified(address contractAddress);
    event DutchAuctionModified(address contractAddress);

    event DefaultMarketFeeModified(uint feeRate);
    event DefaultCollectionFeeModified(uint feeRate);

    event MarketFeeModified(address indexed contractAddress, uint feeRate);
    event CollectionFeeModified(address indexed contractAdress, uint feeRate);
    event MarketFeeReset(address indexed contractAddress);
    event CollectionFeeReset(address indexed contractAdress);

    // Present(Since it is just a transfer, it will be completed inside Market without preparing an IPresent interface)
    event Presented(
        address indexed contractAddress,
        uint256 indexed tokenId,
        address from,
        address to
    );

    //-----------------------------------------
    // Constant
    //-----------------------------------------
    uint256 private constant FEE_RATE_BASE = 10000; // Base value of fee (percentage) (Because if you specify more than this value, it will be free / 0 will refer to the default as an invalid value)

    //-----------------------------------------
    // Setting
    //-----------------------------------------
    // Start / stop flag
    bool private _sale_start_suspended;
    bool private _offer_start_suspended;
    bool private _auction_start_suspended;
    bool private _dutch_auction_start_suspended;

    // Component
    ISale private _sale;
    IOffer private _offer;
    IAuction private _auction;
    IDutchAuction private _dutch_auction;

    // commission
    uint256 private _default_fee_rate_market; // Basic market fee ratio
    uint256 private _default_fee_rate_collection; // Basic collection fee percentage

    // Individual fee
    mapping(address => uint256) private _fixed_fee_rate_market;
    mapping(address => uint256) private _fixed_fee_rate_collection;

    //-----------------------------------------
    // Constructor
    //-----------------------------------------
    constructor() Ownable() {
        _default_fee_rate_market = 1000; // 10.0 %
        _default_fee_rate_collection = 1000; // 10.0 %

        emit DefaultMarketFeeModified(_default_fee_rate_market);
        emit DefaultCollectionFeeModified(_default_fee_rate_collection);
    }

    //-----------------------------------------
    // [external] Get
    //-----------------------------------------
    function saleStartSuspended() external view returns (bool) {
        return (_sale_start_suspended);
    }

    function offerStartSuspended() external view returns (bool) {
        return (_offer_start_suspended);
    }

    function auctionStartSuspended() external view returns (bool) {
        return (_auction_start_suspended);
    }

    function dutchAuctionStartSuspended() external view returns (bool) {
        return (_dutch_auction_start_suspended);
    }

    function sale() external view returns (address) {
        return (address(_sale));
    }

    function offer() external view returns (address) {
        return (address(_offer));
    }

    function auction() external view returns (address) {
        return (address(_auction));
    }

    function dutchAuction() external view returns (address) {
        return (address(_dutch_auction));
    }

    function defaultFeeRateForMarket() external view returns (uint256) {
        return (_default_fee_rate_market);
    }

    function defaultFeeRateForCollection() external view returns (uint256) {
        return (_default_fee_rate_collection);
    }

    //-----------------------------------------
    // [external/onlyOwner] Setting
    //-----------------------------------------
    function setSaleStartSuspended(bool flag) external onlyOwner {
        _sale_start_suspended = flag;

        emit SaleStartSuspended(flag);
    }

    function setOfferStartSuspended(bool flag) external onlyOwner {
        _offer_start_suspended = flag;

        emit OfferStartSuspended(flag);
    }

    function setAuctionStartSuspended(bool flag) external onlyOwner {
        _auction_start_suspended = flag;

        emit AuctionStartSuspended(flag);
    }

    function setDutchAuctionStartSuspended(bool flag) external onlyOwner {
        _dutch_auction_start_suspended = flag;

        emit DutchAuctionStartSuspended(flag);
    }

    function setSale(address contractAddress) external onlyOwner {
        _sale = ISale(contractAddress);

        emit SaleModified(contractAddress);
    }

    function setOffer(address contractAddress) external onlyOwner {
        _offer = IOffer(contractAddress);

        emit OfferModified(contractAddress);
    }

    function setAuction(address contractAddress) external onlyOwner {
        _auction = IAuction(contractAddress);

        emit AuctionModified(contractAddress);
    }

    function setDutchAuction(address contractAddress) external onlyOwner {
        _dutch_auction = IDutchAuction(contractAddress);

        emit DutchAuctionModified(contractAddress);
    }

    function setDefaultFeeRateForMarket(uint256 rate) external onlyOwner {
        _default_fee_rate_market = rate;

        emit DefaultMarketFeeModified(rate);
    }

    function setDefaultFeeRateForCollection(uint256 rate) external onlyOwner {
        _default_fee_rate_collection = rate;

        emit DefaultCollectionFeeModified(rate);
    }

    //----------------------------------------
    // [external] Obtaining individual fees
    //----------------------------------------
    function fixedFeeRateForMarket(
        address contractAddress
    ) external view returns (uint256) {
        return (_fixed_fee_rate_market[contractAddress]);
    }

    function fixedFeeRateForCollection(
        address contractAddress
    ) external view returns (uint256) {
        return (_fixed_fee_rate_collection[contractAddress]);
    }

    //----------------------------------------
    // [external/onlyOwner] Individual fee setting
    //----------------------------------------
    function setFixedFeeRateForMarket(
        address contractAddress,
        uint256 rate
    ) external onlyOwner {
        _fixed_fee_rate_market[contractAddress] = rate;

        emit MarketFeeModified(contractAddress, rate);
    }

    function setFixedFeeRateForCollection(
        address contractAddress,
        uint256 rate
    ) external onlyOwner {
        _fixed_fee_rate_collection[contractAddress] = rate;

        emit CollectionFeeModified(contractAddress, rate);
    }

    function resetFixedFeeRateForMarket(
        address contractAddress
    ) external onlyOwner {
        delete _fixed_fee_rate_market[contractAddress];

        emit MarketFeeReset(contractAddress);
    }

    function resetFixedFeeRateForCollection(
        address contractAddress
    ) external onlyOwner {
        delete _fixed_fee_rate_collection[contractAddress];

        emit CollectionFeeReset(contractAddress);
    }

    //----------------------------------------
    // [public] Acquisition of actual fee ratio
    //----------------------------------------
    function feeRateForMarket(
        address contractAddress
    ) public view returns (uint256) {
        uint256 fee = _fixed_fee_rate_market[contractAddress];

        // If valid
        if (fee > 0) {
            // Set to 0 if it exceeds 1.
            if (fee > FEE_RATE_BASE) {
                return (0);
            }

            return (fee);
        }

        return (_default_fee_rate_market);
    }

    function feeRateForCollection(
        address contractAddress
    ) public view returns (uint256) {
        uint256 fee = _fixed_fee_rate_collection[contractAddress];

        // If valid
        if (fee > 0) {
            // Set to 0 if it exceeds 1.
            if (fee > FEE_RATE_BASE) {
                return (0);
            }

            return (fee);
        }

        return (_default_fee_rate_collection);
    }

    //-----------------------------------------
    // [external] Window: Sale
    //-----------------------------------------
    function sell(
        address contractAddress,
        uint256 tokenId,
        uint256 price,
        uint256 period
    ) external {
        require(address(_sale) != address(0), "invalid sale");
        require(!_sale_start_suspended, "sale suspended"); // 新規セール中止中

        _sale.sell(msg.sender, contractAddress, tokenId, price, period);
    }

    function cancelSale(uint256 saleId) external {
        require(address(_sale) != address(0), "invalid sale");

        _sale.cancelSale(msg.sender, saleId);
    }

    function buy(uint256 saleId) external payable {
        require(address(_sale) != address(0), "invalid sale");

        _sale.buy(msg.sender, saleId, msg.value);

        // Token transfer
        uint256[4] memory transferInfo = ITrade(address(_sale)).transferInfo(
            saleId
        );
        _transfer(transferInfo);

        // Payment
        uint256[3] memory payInfo = ITrade(address(_sale)).payInfo(saleId);
        _pay(payInfo);
    }

    //-----------------------------------------
    // [external] Window: Offer
    //-----------------------------------------
    function offer(
        address contractAddress,
        uint256 tokenId,
        uint256 price,
        uint256 period
    ) external payable {
        require(address(_offer) != address(0), "invalid offer");
        require(!_offer_start_suspended, "offer suspended"); // 新規オファー中止中

        _offer.offer(
            msg.sender,
            contractAddress,
            tokenId,
            price,
            period,
            msg.value
        );
    }

    function cancelOffer(uint256 offerId) external {
        require(address(_offer) != address(0), "invalid offer");

        _offer.cancelOffer(msg.sender, offerId);

        // Refund
        uint256[2] memory refundInfo = ITrade(address(_offer)).refundInfo(
            offerId
        );
        _refund(refundInfo);
    }

    function acceptOffer(uint256 offerId) external {
        require(address(_offer) != address(0), "invalid offer");

        _offer.acceptOffer(msg.sender, offerId);

        // Token transfer
        uint256[4] memory transferInfo = ITrade(address(_offer)).transferInfo(
            offerId
        );
        _transfer(transferInfo);

        // Payment
        uint256[3] memory payInfo = ITrade(address(_offer)).payInfo(offerId);
        _pay(payInfo);
    }

    function withdrawFromOffer(uint256 offerId) external {
        require(address(_offer) != address(0), "invalid offer");

        _offer.withdrawFromOffer(msg.sender, offerId);

        // Refund
        uint256[2] memory refundInfo = ITrade(address(_offer)).refundInfo(
            offerId
        );
        _refund(refundInfo);
    }

    //-----------------------------------------
    // [external] Window: Auction
    //-----------------------------------------
    function auction(
        address contractAddress,
        uint256 tokenId,
        uint256 startingPrice,
        uint256 period
    ) external {
        require(address(_auction) != address(0), "invalid auction");
        require(!_auction_start_suspended, "auction suspended"); // New auction is being canceled

        _auction.auction(
            msg.sender,
            contractAddress,
            tokenId,
            startingPrice,
            period
        );
    }

    function cancelAuction(uint256 auctionId) external {
        require(address(_auction) != address(0), "invalid auction");

        _auction.cancelAuction(msg.sender, auctionId);
    }

    function bid(uint256 auctionId, uint256 price) external payable {
        require(address(_auction) != address(0), "invalid auction");

        // Refund for existing bids (if existing bids are valid)
        uint256[2] memory refundInfo = ITrade(address(_auction)).refundInfo(
            auctionId
        );
        if (refundInfo[0] != 0) {
            _refund(refundInfo);
        }

        _auction.bid(msg.sender, auctionId, price, msg.value);
    }

    function finishAuction(uint256 auctionId) external {
        require(address(_auction) != address(0), "invalid auction");

        _auction.finishAuction(msg.sender, auctionId);

        // Token transfer
        uint256[4] memory transferInfo = ITrade(address(_auction)).transferInfo(
            auctionId
        );
        _transfer(transferInfo);

        // Payment
        uint256[3] memory payInfo = ITrade(address(_auction)).payInfo(
            auctionId
        );
        _pay(payInfo);
    }

    function withdrawFromAuction(uint256 auctionId) external {
        require(address(_auction) != address(0), "invalid auction");

        _auction.withdrawFromAuction(msg.sender, auctionId);

        // Refund
        uint256[2] memory refundInfo = ITrade(address(_auction)).refundInfo(
            auctionId
        );
        _refund(refundInfo);
    }

    //-----------------------------------------
    // [external] Window: Dutch Auction
    //-----------------------------------------
    function dutchAuction(
        address contractAddress,
        uint256 tokenId,
        uint256 startingPrice,
        uint256 endingPrice,
        uint256 period,
        uint256 startMargin,
        uint256 endMargin
    ) external {
        require(address(_dutch_auction) != address(0), "invalid dutch auction");
        require(!_dutch_auction_start_suspended, "dutch_auction suspended"); // New Dutch auction is being canceled

        _dutch_auction.dutchAuction(
            msg.sender,
            contractAddress,
            tokenId,
            startingPrice,
            endingPrice,
            period,
            startMargin,
            endMargin
        );
    }

    function cancelDutchAuction(uint256 auctionId) external {
        require(address(_dutch_auction) != address(0), "invalid dutch auction");

        _dutch_auction.cancelDutchAuction(msg.sender, auctionId);
    }

    function dutchAuctionBuy(uint256 auctionId) external payable {
        require(address(_dutch_auction) != address(0), "invalid dutch_auction");

        _dutch_auction.buyDutchAuction(msg.sender, auctionId, msg.value);

        // Token transfer
        uint256[4] memory transferInfo = ITrade(address(_dutch_auction))
            .transferInfo(auctionId);
        _transfer(transferInfo);

        // Payment
        uint256[3] memory payInfo = ITrade(address(_dutch_auction)).payInfo(
            auctionId
        );
        _pay(payInfo);
    }

    //---------------------------------------------------------------------------
    // [external] Contact: Present (I will implement it on the market because it is not enough to make it Trade)
    //---------------------------------------------------------------------------
    function present(
        address contractAddress,
        uint256 tokenId,
        address to
    ) external {
        // No need for stop control (because it is a process that does not rot)

        // Is the owner valid?
        IERC721 tokenContract = IERC721(contractAddress);
        address owner = tokenContract.ownerOf(tokenId);
        require(owner == msg.sender, "sender is not the owner");

        // event
        emit Presented(contractAddress, tokenId, msg.sender, to);

        // Token transfer
        uint256[4] memory transferInfo;
        transferInfo[0] = uint256(uint160(contractAddress));
        transferInfo[1] = tokenId;
        transferInfo[2] = uint256(uint160(msg.sender));
        transferInfo[3] = uint256(uint160(to));
        _transfer(transferInfo);
    }

    //-----------------------------------
    // [internal] Common processing: Token transfer
    //-----------------------------------
    function _transfer(uint256[4] memory words) internal {
        require(words[0] != 0, "invalid contract");
        require(words[2] != 0, "invalid from");
        require(words[3] != 0, "invalid to");

        // See [ITrade.sol] for a breakdown of words
        IERC721 tokenContract = IERC721(address(uint160(words[0])));
        uint256 tokenId = words[1];
        address from = address(uint160(words[2]));
        address to = address(uint160(words[3]));
        tokenContract.safeTransferFrom(from, to, tokenId);
    }

    //-----------------------------------
    // [internal] Common processing: Payment
    //-----------------------------------
    function _pay(uint256[3] memory words) internal {
        require(words[0] != 0, "invalid to");
        require(words[1] != 0, "invalid contract address");

        // Transfer destination of sales
        address payable to = payable(address(uint160(words[0])));

        // Creator (owner of collection contract)
        address contractAddress = address(uint160(words[1]));
        Ownable collectionContract = Ownable(contractAddress);
        address payable creator = payable(collectionContract.owner());

        // Market (owner of this contract)
        address payable market = payable(owner());

        // Clearing
        uint256 amount = words[2];

        // Market fee (ignored if it is the same as the payee)
        if (market != to) {
            uint256 fee = feeRateForMarket(contractAddress);
            fee = (words[2] * fee) / FEE_RATE_BASE;
            if (fee > 0) {
                if (fee > amount) {
                    fee = amount;
                }
                market.transfer(fee);
                amount -= fee;
            }
        }

        // Creator fee (ignored if it is the same as the payee)
        if (creator != to) {
            uint256 fee = feeRateForCollection(contractAddress);
            fee = (words[2] * fee) / FEE_RATE_BASE;
            if (fee > 0) {
                if (fee > amount) {
                    fee = amount;
                }
                creator.transfer(fee);
                amount -= fee;
            }
        }

        // Sales
        if (amount > 0) {
            to.transfer(amount);
        }
    }

    //-----------------------------------
    // [internal] Common processing: Refund of deposit
    //-----------------------------------
    function _refund(uint256[2] memory words) internal {
        require(words[0] != 0, "invalid to");

        address payable to = payable(address(uint160(words[0])));

        if (words[1] > 0) {
            to.transfer(words[1]);
        }
    }
}
