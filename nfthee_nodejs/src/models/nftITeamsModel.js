const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nftSchema = new Schema(
  {
    user: {
      type: Object,
      required: [true, 'user required'],
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
      required: [true, 'token required'],
      // require: true,
    },
    nft_quantity: Number,
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
      required: [true, 'select chooseType'],
    },
    uploadFile: {
      type: String,
      required: [true, 'please uploadFile'],
    },
    status: {
      type: String,
      default: 'pending',
    },
    name: {
      type: String,
      required: [true, 'name required'],
        minlength:[3,'minimum 3 letters'],
        maxlength:[12,'maximum 12 letters'],
        unique:[true,'name already exist']
    },
    designation: {
      type: String,
      required: [true, 'designation required'],
    },
    about: {
      type: String,
      required: [true, 'about required'],
    },
    chooseCollection: {
      type: String,
      required: [true, 'please select Collection'],
    },
    chooseCategory: {
      type: String,
      required: [true, 'please select Category'],
    },
    chooseBlockchain: {
      type: String,
      required: [true, 'please select blockchain'],
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
