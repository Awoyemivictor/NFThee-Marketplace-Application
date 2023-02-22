const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nftSchema = new Schema(
  {
    user: {
      type: Object,
    },

    nft_orders: [{ type: mongoose.Schema.ObjectId, ref: 'order' }],

    owned_by: [
      {
        address: {
          type: String,
          lowercase: true,
        },
        quantity: {
          type: Number,
        },
      },
    ],
    royalty_percentage: Number,
    chooseType: {
      type: String,
    },
    uploadFile: {
      type: Object,
    },
    status: {
      type: String,
      default: 'pending',
    },
    name: {
      type: String,
      require: true,
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
      require: true,
    },
    chooseType: {
      type: String,
      required: true,
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
    created_by: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
      // type:String
    },
    likes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
      },
    ],
    explicitAndSensitiveContent: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('nft', nftSchema);
