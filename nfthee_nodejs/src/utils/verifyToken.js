const jwt = require('jsonwebtoken');
const { credentials } = require('../config').constantCredentials;
const { errorResponseUnauth } = require('../api/helpers').ResponseHelper;

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split('Bearer ')[1];
    jwt.verify(token, credentials.SECRET_TOKEN, (err, encoded) => {
      if (err) {
        return errorResponseUnauth(res, err, 'Invalid Token');
      } else {
        req.user = encoded;
        next();
      }
    });
  } catch (error) {
    const err = new Error(error);
    return errorResponseUnauth(res, err, 'Token required');
  }
};


exports.signupAuth = (req, res, next) => {
  
      const token = req.headers.authorization.split('Bearer ')[1];

  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized',
      status: false,
      data: null,
    });
  }
  jwt.verify(token, credentials.SIGNUP_TOKEN, (err, user) => {
    if (err) {
      return res.status(403).json({
        message: 'Forbidden',
        status: false,
        data: null,
      });
    }
    req.user = user;
    next();
  });
};

exports.verifyToken = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.send('Unauthorized header');
    }
    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return errorResponseUnauth(res, err, 'Invalid Token');
      }
      if (decoded.sRole === 'user') {
        req.userId = decoded.id;
        req.role = decoded.sRole;
        req.name = decoded.oName;
        req.email = decoded.sEmail;
        next();
      } else {
        return errorResponseUnauth(res, err, 'Unauthrozied Access');
      }
    });
  } catch (error) {
    const err = new Error(error);
    return errorResponseUnauth(res, err, 'Token required');
  }uploadFile
};

exports.verifyWithoutToken = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token && token !== undefined && token !== '') {
      token = token.replace('Bearer ', '');
      jwt.verify(token, 'thisistestsecret', (err, decoded) => {
        if (err) {
          return res.send('unauthorized');
        }

        next();
      });
    } else {
      next();
    }
  } catch (error) {
    return res.send(error);
  }
};
