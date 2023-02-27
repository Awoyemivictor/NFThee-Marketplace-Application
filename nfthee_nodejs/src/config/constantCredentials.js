const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const ENVIRONMENT = process.env.NODE_ENV || 'prod';
let appName = '';
switch (ENVIRONMENT) {
  case 'local': {
    if (fs.existsSync(path.join(process.cwd(), '/.env.local'))) {
      dotenv.config({ path: '.env.local' });
    } else {
      process.exit(1);
    }
    break;
  }
  default: {
    console.log('here', ENVIRONMENT);
    if (fs.existsSync(path.join(process.cwd(), '/.env'))) {
      dotenv.config({ path: '.env' });
      appName = '';
    } else {
      process.exit(1);
    }
  }
}

/**
 * @description credential object credentials
 * @author [Rinku sain]
 */
exports.credentials = {
  DB_URL: process.env.DB_URL || 'mongodb://127.0.0.1:27017/',
  DB_NAME: process.env.DB_NAME || 'NFTHee',
  BASE_URL: process.env.BASE_URL || '',
  BASE_URL_LOCAL: process.env.BASE_URL_LOCAL || 'http://localhost:2022/',
  PORT: process.env.PORT || 2022,
  EXPIRE_TIME: process.env.EXPIRE_TIME || '30d',
  APP_SHORT_NAME: process.env.APP_SHORT_NAME || 'NFTH',
  API_ROUTE_PREFIX: process.env.API_ROUTE_PREFIX || '/api',
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_EMAIL: process.env.SMTP_EMAIL,
  SMTP_PASS: process.env.SMTP_PASS,
  SECRET_TOKEN:
    process.env.SECRET_TOKEN ||
    '6229d687MYNASIF4dc56229dHSDFFFBAbfdc543ca821de5b6543BDFSUDca821de5b52',
  SIGNUP_TOKEN:
    process.env.SIGNUP_TOKEN ||
    '6229d687MYNASIF4dc56229dHSDFFFBAbfdc543ca821de5b6543BDFSUDca821de2223',
  AWS_ID: process.env.AWS_ID || '',
  AWS_SECRET: process.env.AWS_SECRET || '',
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME || '',
  USER_TYPE: {
    USER: 'user',
  },
};

/**
 * @description credential object for status codes
 * @author Rinku sain
 */
exports.StatusCodes = {
  NOT_FOUND: 404,
  OK: 200,
  INTERNAL_SERVER_ERROR: 500,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};
