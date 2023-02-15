const mongoose = require('mongoose');
const fs = require('fs');
// const multer = require('multer');

const { followModel } = require('../../models');

const { credentials } = require('../../config').constantCredentials;




exports.follow= async (req) => {
  try {
    console.info(req.body);
    // let result = await followModel.find(req.body);
    // console.log(result)
    return {
      message: 'follow successfully',
      status: true,
      data: "njdjdn",
    };
  } catch (error) {
    return error;
  }
};
exports.unfollow= async (req) => {
    try {
      console.info(req.body);
      // let result = await followModel.find(req.body);
      // console.log(result)
      return {
        message: 'unfollow successfully',
        status: true,
        data: "njdjdn",
      };
    } catch (error) {
      return error;
    }
  };

