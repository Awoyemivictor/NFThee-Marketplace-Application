const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'name required'],
        minlength:[3,'minimum 3 letters'],
        maxlength:[12,'maximum 12 letters'],
        unique:[true,'name already exist']
    },
    icon: {
        type: String,
        required: [true, 'icon required'],
    },
    description: {
        type: String,
        required: [true, 'description required'],
    },
    status: {
        type: Number,
        required: [true, 'status required'],
    },
  
}, { timestamps: true ,versionKey:false});

module.exports = mongoose.model("category", categorySchema);

