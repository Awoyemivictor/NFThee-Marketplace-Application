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
    symbol: {
      type: String,
      default: 'TST',
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
    links: {
      type: String,
    },
    creator_earnings: {
      type: String,
    },
    blockchain: {
      type: String,
    },
    contract_address: {
      type: String,
    },
    next_id: {
      type: Number,
    },
    royalty_percentage: {
      type: Number,
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
  },
  { timestamps: true }
);

module.exports = mongoose.model('createCollection', create_collection);
