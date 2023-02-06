const jwt = require('jsonwebtoken');
const { credentials } = require('../config').constantCredentials;
const { errorResponseUnauth } = require('../api/helpers').ResponseHelper

exports.auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split('Bearer ')[1];
        console.log(token)
        jwt.verify(token, credentials.SECRET_TOKEN, (err, encoded) => {
            if (err) {
                return errorResponseUnauth(res, err, 'Invalid Token')
            } else {
                req.user = encoded;
                next();
            }
        });
    } catch (error) {
        const err = new Error(error)
        return errorResponseUnauth(res, err, 'Token required')
    }
}