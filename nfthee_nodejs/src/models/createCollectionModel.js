const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const create_collection = new Schema(
  {
    user: {
      type: Object,
    },
    logo_image: {
      type: Object,
    },
    featured_image: {
      type: Object,
    },
    banner_image: {
      type: Object,
    },
    category: {
      type: String,
    },
    name: {
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
    erc_standard: {
      type: Boolean,
      //   require: true,
      default: true, // by Default erc721 is true
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
    },
    creator_earnings: {
      type: String,
    },
    blockchain: {
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
    created_by: {
      type: mongoose.Schema.ObjectId,
      ref: 'SingupInfo',
    },
  },

  { timestamps: true }
);

create_collection.methods.getNextId = function () {
  let nextId = this.nextId + 1;
  return nextId;
};

module.exports = mongoose.model('createCollection', create_collection);
