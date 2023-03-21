const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const signupInfo = new Schema(
  {
    user_name: {
      type: String,
      index: {
        unique: true,
      },
    },
    token: {
      type: String,
    },
    // wallet_token: {
    //   type: String,
    // },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email_address: {
      type: String,
      match:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    //wallet_token
    account_address: {
      type: String,
    },
    profile_image: {
      type: String,
    },
    banner_image: {
      type: String,
    },
    bio: {
      type: String,
    },
    website: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    youtube: {
      type: String,
    },
    token_id: {
      type: String,
    },
    status: {
      type: String,
      default:'pending'
    },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', signupInfo);

// module.exports = { signupModel }
