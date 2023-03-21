const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const notification = new Schema(
  {
    // user: {
    //   type: Object,
    //   require:true,

    // },
    sender_id: {
      type: String,
    },
    receiver_id: {
      type: String,
    },
    sender_token: {
      type: String,
    },
    receiver_token: {
      type: String,
    },
    message:{
        type: String,
    },
    nftId: {
      type: mongoose.Schema.ObjectId,
      ref: 'nft',
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

notification.methods.getNextId = function () {
  let nextId = this.nextId + 1;
  return nextId;
};

module.exports = mongoose.model('notification', notification);
