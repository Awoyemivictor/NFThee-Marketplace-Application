const { DB_URL, DB_NAME } = require('../config').constantCredentials.credentials;
const mongoose = require('mongoose');

/**
 * @description database connection
 * @author Rinku sain
 */

exports.connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URL);
    console.log(`Database connected successfully on ${conn.connection.host}`);
  } catch (error) {
    console.log('Database not connected', error);
  }
};
