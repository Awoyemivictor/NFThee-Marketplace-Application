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
      enum: ['Bids', 'Purchase', 'Transfer', 'Marketplace', 'Creation'],
    },
    actionMeta: {
      type: String,
      enum: ['Default', 'Accept', 'Listed', 'Unlisted'],
    },
    message: {
      type: String,
    },
    sCreated: {
      type: Date,
      default: Date.now,
    },

  })

module.exports = mongoose.model('historymodel', historySchema);
