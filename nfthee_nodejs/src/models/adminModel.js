const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminInfo = new Schema({
    title: {
        type: String
    },
    author_name: {
        type: String
    },
    sub_description: {
        type: String
    },
    description: {
        type: String
    },
    date_of_posting: {
        type: Date,
        default: Date.now
    },
    date_of_publishing: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String
    },
    meta_tag: {
        type: String
    },
    meta_title: {
        type: String
    },
    meta_description: {
        type: String
    },
    keyword_tag: {
        type: String
    },
    uploadFile: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("adminData", adminInfo);

