const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema(
  {
    nftId: {
      type: mongoose.Schema.ObjectId,
      ref: 'nft',
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
    },
    action: {
      type: String,
      enum: ['Bids', 'Purchase', 'Transfer', 'Marketplace', 'Creation','Sale','Offer','Auction'],
    },
    actionMeta: {
      type: String,
      enum: ['Default', 'Accept', 'Listed', 'Unlisted'],
    },
    message: {
      type: String,
    },
    collection_name: {
      type: String,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
      default:''
    },
    price: {
      type: Number,
    },
    sCreated: {
      type: Date,
      default: Date.now,
    },

  })

module.exports = mongoose.model('historymodel', historySchema);
