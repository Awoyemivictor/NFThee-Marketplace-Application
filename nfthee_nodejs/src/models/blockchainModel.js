const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockchainSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name required'],
      minlength: [3, 'minimum 3 letters'],
      maxlength: [12, 'maximum 12 letters'],
      unique: [true, 'name already exist'],
    },
    description: {
      type: String,
      required: [true, 'description required'],
    },
    icon: {
      type: String,
      required: [true, 'icon required'],
    },
    status: {
      type: String,
      required: [true, 'status required'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('blockchain', blockchainSchema);
