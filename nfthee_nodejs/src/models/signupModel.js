const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const signupInfo = new Schema({
    user_name: {
        type: String,
        index: {
            unique: true
        }
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email_address: {
        type: String,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required: true
    },
    country: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('user', signupInfo)

// module.exports = { signupModel }