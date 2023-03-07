const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bidSchema = new Schema({
  bidder: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
  },
  bid_status: {
    type: String,
    enum: ['Bid', 'Cancelled', 'Accepted', 'Sold', 'Rejected'],
  },
  bid_price: {
    type: Number,
    required: true,
  },
  nftId: {
    type: mongoose.Schema.ObjectId,
    ref: 'nft',
  },
  orderId: {
    type: mongoose.Schema.ObjectId,
    ref: 'order',
  },
  sCreated: {
    type: Date,
    default: Date.now,
  },
  bid_deadline: Number,
  bid_quantity: Number,
});

module.exports = mongoose.model('bid', bidSchema);
