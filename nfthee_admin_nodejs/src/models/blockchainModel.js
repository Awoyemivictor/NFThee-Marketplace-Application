const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockchainSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
    },
    icon: {
      type: String,
    },
    status: {
      type: String,
    },
    chainId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('blockchain', blockchainSchema);
