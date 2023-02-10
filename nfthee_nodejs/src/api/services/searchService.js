const { createCollection } = require('../../models');
const { nftIteams } = require('../../models');
const { partnerModel } = require('../../models');
const { signup } = require('../../models');


exports.searchCollection = async (req, res, next) => {
  try {
    console.log(req.body)
    let searchParam = req.body.searchParam
    result = await createCollection.find({ "name": searchParam });
    
      return {
      message: 'Found Collection ',
      status: true,
      data: result,
    };

  } catch (error) {
   return error
  }
};

exports.searchUser = async (req, res, next) => {
    try {
      let searchParam = req.body.searchParam
      result = await signup.find({ "user_name": searchParam });
     
      return {
        message: 'Found Collection ',
        status: true,
        data: result,
      };
  
    } catch (error) {
     return error
    }
  };