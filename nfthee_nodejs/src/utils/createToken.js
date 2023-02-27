// Global imports
const Jwt = require('jsonwebtoken');

// Local imports
const { SECRET_TOKEN,SIGNUP_TOKEN, EXPIRE_TIME } = require('../config').constantCredentials.credentials;

//to do: keep in time in config

exports.sign = async (key) => {
    try {
      const token = await Jwt.sign(key, SECRET_TOKEN, { expiresIn: EXPIRE_TIME });
      return token;
    } catch (e) {
      throw e;
    }
}

exports.signup = async (key) => {
  try {
    const token = await Jwt.sign(key, SIGNUP_TOKEN, { expiresIn: EXPIRE_TIME });
    return token;
  } catch (e) {
    throw e;
  }
}