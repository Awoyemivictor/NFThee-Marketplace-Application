const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const smsDetailsSchema = new Schema({
    url: {
        type: String,
        required: true,
      },
      api: {
        type: String,
        required: true,
      },
      secret: {
        type: String,
        required: true,
      },
      sender: {
        type: String,
        required: true,
      },
      provider: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
}, { timestamps: true });

module.exports = mongoose.model("smsDetails", smsDetailsSchema);