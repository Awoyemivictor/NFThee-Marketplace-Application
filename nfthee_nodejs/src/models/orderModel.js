const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  seller_address: String, //walletADDRESS OF Seller
  tokenId: Number, //TokenID
  token_address: String, // Collection contract address
  token_quantity: Number, //order quantity
  order_type: {
    type: Number,
    //0 - Buy Now
    //1 - Offer
    //2 - Auction

    enum: [0, 1, 2],
    // required:true,
  },
  order_payment_token: String, //the payment token address ERC20
  token_price: mongoose.Types.Decimal128,
  validity_upto: Number,
  oSalt: Number,
  nftId: {
    type: mongoose.Schema.ObjectId,
    ref: 'nft',
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
  seller: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
  },
  auction_end_date: { type: Date },
  order_status: {
    type:String,
    //0 - inactive
    //1 - active
    //2 - completed
    //3 - cancelled
    enum: ['Bid', 'Cancelled', 'Accepted', 'Sold', 'Rejected'],
  },
  quantity_sold: { type: Number, default: 0 },
});

module.exports = mongoose.model('order', orderSchema);
