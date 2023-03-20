const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const subscriptionSchema = new Schema({
  email_address: {
    type: String,
    match:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: true,
  },
createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('subscription', subscriptionSchema);
