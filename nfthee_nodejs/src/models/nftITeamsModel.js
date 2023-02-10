const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nftSchema = new Schema(
  {
    user: {
      type: Object,
    },
    chooseType: {
      type: String,
    },
    uploadFile: {
      type: Object,
    },
    status: {
      type: String,
      default:'pending',
    },
    name: {
      type: String,
    },
    designation: {
      type: String,
    },
    about: {
      type: String,
    },
    chooseCollection: {
      type: String,
    },
    chooseCategory: {
      type: String,
    },
    chooseBlockchain: {
      type: String,
    },
    putOnMarketplace: {
      type: Object,
      fixedPrice: {
        price: String,
      },
      openForBides: String,
      timedAuction: {
        minimum_bid: String,
        start_date: String,
        end_date: String,
      },
    },
    unlockOncePurchased: {
      type: Boolean,
      default: true,
    },
    attribute: {
      type: Object,
      default: {},
    },
    levels: {
      type: Object,
      default: {},
    },
    stats: {
      type: Object,
      default: {},
    },
    explicitAndSensitiveContent: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('nft', nftSchema);
