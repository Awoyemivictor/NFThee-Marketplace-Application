const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema({
    toggleValue: {
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model("search", searchSchema);


