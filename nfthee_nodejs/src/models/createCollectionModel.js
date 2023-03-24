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
    },
    logo_image: {
      type: String,
      require: true,
    },
    featured_image: {
      type: String,
      require: true,
    },
    banner_image: {
      type: String,
    },
    url: {
      type: String,
    },
    description: {
      type: String,
    },
    contract_address: {
      type: String,
      //   require: true,
      lowercase: true,
    },
    collection_standard: {
      type: String,
      //   require: true,
      default: 'Single', // by Default erc721 is true
    },
    nextId: {
      type: Number,
      //   require: true,
      default: 0,
    },
    royalty_percentage: {
      type: Number,
    },
    telegram: {
      type: String,
    },
    discord: {
      type: String,
    },
    instagram: {
      type: String,
    },
    medium: {
      type: String,
    },
    website: {
      type: String,
    },
    creator_earnings: {
      type: String,
    },
    blockchain: {
      type: String,
    },
    category: {
      type: String,
    },
    payment_token: {
      type: String,
    },
    display_theme: {
      type: String,
    },
    explicit_sensitive_content: {
      type: Boolean,
    },
    currentOwner: {
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
