const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const signupInfo = new Schema(
  {
    user_name: {
      type: String,
      required: [true, 'user_name required'],
        minlength:[3,'minimum 3 letters'],
        maxlength:[12,'maximum 12 letters'],
        unique:[true,'name already exist']
    },
    token: {
      type: String,
    },
    first_name: {
      type: String,
      required: [true, 'first_name required'],
        minlength:[3,'minimum 3 letters'],
        maxlength:[12,'maximum 12 letters'],
        
    },
    last_name: {
      type: String,
      required: [true, 'last_name required'],
        minlength:[3,'minimum 3 letters'],
        maxlength:[12,'maximum 12 letters'],
       
    },
    email_address: {
      type: String,
      match:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required: [true, 'email required']
    },
    country: {
      type: String,
      required: [true, 'select country']
    },
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
    
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', signupInfo);

// module.exports = { signupModel }
