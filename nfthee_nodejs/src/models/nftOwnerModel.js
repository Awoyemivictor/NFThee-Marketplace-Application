const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nftOwnerSchema = new Schema({
  nftId: {
    type: mongoose.Schema.ObjectId,
    ref: 'nft',
  },
  created: {
    type: Date,
    default: Date.now,
  },
  current_owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
  },
  order: Array,
  quantity: Number,
  quantity_left: Number,
  base_price: mongoose.Types.Decimal128,
  auction_type: {
    type: String,
    enum: ['Auction', 'Fixed Sale', 'Unlockable'],
  },
  sTransactionStatus: {
    type: Number,
    default: -99,
    // -99: Transaction not submitted to Blockchain
    // -1:  Transaction Failed
    //  0:  Pending
    //  1:  Mined
    enum: [-99, -1, 0, 1],
  },
  auction_end_date: { type: Date },
});

module.exports = mongoose.model('nftOwner', nftOwnerSchema);
