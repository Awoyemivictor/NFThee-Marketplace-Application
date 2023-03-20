const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailSchema = new Schema({

    domain_name: {
        type: String
    },
    sender_name: {
        type: String
    },
    sender_emailid: {
        type: String
    },
    reply_email: {
        type: String
    },
    host_name: {
        type: String
    },
    host_port: {
        type: String
    },
    host_pass:{
        type:String,
        require:''
    },
    status: {
        type: Boolean
    }
})

module.exports = mongoose.model("emailApi", emailSchema)