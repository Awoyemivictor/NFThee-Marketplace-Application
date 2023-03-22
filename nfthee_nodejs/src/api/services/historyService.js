const mongoose = require('mongoose');
const fs = require('fs');
const { history } = require('../../models');
const { sign } = require('crypto');
const { Mail } = require('../../utils');
const jwt = require('jsonwebtoken');

const { credentials } = require('../../config').constantCredentials;

exports.insertHistory = async (req, res) => {
  try {
    const insertData = new history({ 
      nftId: req.body.nftId,
      userId: req.body.userId,
      action: req.body.action,
      actionMeta: req.body.actionMeta,
      message: req.body.message,
      from: req.body.from,
      bid_price: req.body.bid_price,
      sCreated: req.body.created_ts,
    });
    console.log('insertData',insertData)
    return insertData.save().then((results) => {
      return {
        message: 'History Added Successfully ',
        status: true,
        data: results
      };
    });
  } catch (error) {
    return error;
  }
}

exports.fetchHistory = async (req, res) => {
  try {
    let nftId = req.query.nftId;
    let userId = req.body.userId;
    let action = req.body.action;
    let actionMeta = req.body.actionMeta;

    console.log("fetchhistory",nftId)

    // let onftIDQuery = {};
    // let ouserIDQuery = {};
    // let oactionQuery = {};
    // let oactionMetaQuery = {};

    // if (nftId !== 'All') {
    //   onftIDQuery = { nftId: mongoose.Types.ObjectId(nftId) };
    //   if (userId !== 'All') {
    //     ouserIDQuery = { userId: mongoose.Types.ObjectId(userId) };
    //   }
    //   if (action !== 'All') {
    //     oactionQuery = { action: action };
    //   }
    //   if (actionMeta !== 'All') {
    //     oactionMetaQuery = { actionMeta: actionMeta };
    //   }

      // const searchObj = {
      //   ...onftIDQuery,
      //   ...ouserIDQuery,
      //   ...oactionQuery,
      //   ...oactionMetaQuery
      // };

      // const count = await history.countDocuments(searchObj);
      const results = await history.find({nftId:nftId})
        .sort({ sCreated: -1 })
        
        // .select({
        //   _id: 1,
        //   nftId: 1,
        //   userId: 1,
        //   action: 1,
        //   actionMeta: 1,
        //   message: 1,
        //   sCreated: 1,
        // })

      return {
        message: 'History Details',
        status: true,
        data:  results

      };
    }
   catch (error) {
    throw error
  }
};








