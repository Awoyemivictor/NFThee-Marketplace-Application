const { bidModel } = require('../../models');
const { credentials } = require('../../config').constantCredentials;

exports.createBidNft = async (req, res) => {
  try {
    return {
      message: 'Bid Created Successfully',
      status: true,
      data: [],
    };
  } catch (error) {
    throw error;
  }
};

exports.updateBidNft = async (req, res) => {
  try {
    return {
      message: 'Bid Updated Successfully',
      status: true,
      data: [],
    };
  } catch (error) {
    throw error;
  }
};

exports.fetchBidNft = async (req, res) => {
  try {
    return {
      message: 'Bid Data ',
      status: true,
      data: [],
    };
  } catch (error) {
    throw error;
  }
};

exports.acceptBidNft = async (req, res) => {
  try {
    return {
      message: 'Bid Accepted Successfully',
      status: true,
      data: [],
    };
  } catch (error) {
    throw error;
  }
};
