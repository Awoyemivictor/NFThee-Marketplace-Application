const mongoose = require('mongoose');
const fs = require('fs');
const { subscriptionModel } = require('../../models');
const { sign } = require('crypto');
const { Mail } = require('../../utils');
const jwt = require('jsonwebtoken');

const { credentials } = require('../../config').constantCredentials;

exports.insertSubsription = async (req, res) => {
  try {
    
   
    const upadate_data = {
      email_address: req.body.email,
    };

    console.log(upadate_data);

    // const isSigned = await subscription.findOne({ email_address });
  
    // console.log(isSigned)
    
      const result = await subscriptionModel.create(upadate_data);
      console.log("result", result);
      return {
        message: "subscriptiom Data Save..........",
        status: true,
        data: result,
      };
    
  } catch (err) {
    return err;
  }
};


