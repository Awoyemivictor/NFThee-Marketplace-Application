const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const suggestionSchema = new Schema({
    name: {
        type: String,
        // default:''
        required:true
    },
    email: {
        type: String,
        default:''
        // required:true
    },
    description: {
        type: String,
        default:''
        // required:true
    }
  
}, { timestamps: true ,versionKey:false});

module.exports = mongoose.model("suggestion", suggestionSchema);

