// Global imports
const JWT = require('jsonwebtoken');

// Local imports
const { SECRET_TOKEN, EXPIRE_TIME } = require('../config').constantCredentials.credentials;

//to do: keep in time in config

exports.sign = async(key) => {
    try {
        const token = await JWT.sign(key, SECRET_TOKEN, { expiresIn: EXPIRE_TIME });
        return token;
    } catch (e) {
        throw e;
    }
}