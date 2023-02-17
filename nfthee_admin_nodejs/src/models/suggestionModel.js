const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const suggestionSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        default:''
    },
    description: {
        type: String,
        default:''
    }
  
}, { timestamps: true ,versionKey:false});

module.exports = mongoose.model("suggestion", suggestionSchema);

