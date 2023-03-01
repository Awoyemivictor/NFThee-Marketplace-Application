const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const create_collection = new Schema(
  {
    // user: {
    //   type: Object,
    //   require:true,

    // },
    name: {
      type: String,
      required: [true, 'name required'],
      minlength:[3,'minimum 3 letters'],
      maxlength:[12,'maximum 12 letters'],
      unique:[true,'name already exist']
    },
    logo_image: {
      type: String,
      required: [true, 'logo_image required'],
    },
    featured_image: {
      type: String,
      required: [true, 'featured_image required'],
    },
    banner_image: {
      type: String,
      required: [true, 'banner_image required'],
    },
    url: {
      type: String,
      required: [true, 'url required'],
    },
    description: {
      type: String,
      required: [true, 'description required'],
    },
    contract_address: {
      type: String,
      required: [true, 'description required'],
      lowercase: [true,'only lowercase ']
    },
    collection_standard: {
      type: String,
      required: [true, 'collection_standard  required'],
      // default: 'Single', // by Default erc721 is true
    },
    nextId: {
      type: Number,
      //   require: true,
      default: 0,
    },
    royalty_percentage: {
      type: Number,
    },
    links: {
      type: String,
      required: [true, 'links  required'],
    },
    creator_earnings: {
      type: String,
      required: [true, 'creator_earnings  required'],
    },
    blockchain: {
      type: String,
      required: [true, 'select blockchain'],
    },
    payment_token: {
      type: String,
      required: [true, 'payment_token required'],
    },
    display_theme: {
      type: String,
      required: [true, ' display_theme required'],
    },
    explicit_sensitive_content: {
      type: Boolean,
    },
    created_by: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
    },
    status: {
      type: String,
      default: 'pending',
    },
  },

  { timestamps: true }
);

create_collection.methods.getNextId = function () {
  let nextId = this.nextId + 1;
  return nextId;
};

module.exports = mongoose.model('createCollection', create_collection);
