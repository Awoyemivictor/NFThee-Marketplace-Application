const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AutoIncrement = require('mongoose-sequence')(mongoose);

const nftSchema = new Schema(
  {
    user: {
      type: Object,
    },
    token_type: {
      type: Number,
      require: true,
      //1 - ERC721
      //2 - ERC1155
      enum: [1, 2],
    },
    tokenId: {
      type: Number,
      // require: true,
    },
    nft_quantity: Number,
    nft_orders: [{ type: mongoose.Schema.ObjectId, ref: 'order' }],
    currentOwner: { type: mongoose.Schema.ObjectId, ref: 'user' },
    // owned_by: [
    //   {
    //     address: {
    //       type: String,
    //       lowercase: true,
    //     },
    //     quantity: {
    //       type: Number,
    //     },
    //   },
    // ],
    royalty_percentage: Number,
    chooseType: {
      type: String,
    },
    uploadFile: {
      type: String,
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

nftSchema.plugin(AutoIncrement, { id: 'order_seq', inc_field: 'nextId' });

module.exports = mongoose.model('nft', nftSchema);
