const mongoose = require('mongoose');
const fs = require('fs');
const { reportedUserModel } = require('../../models');
const { sign } = require('crypto');
const { Mail } = require('../../utils');
const jwt = require('jsonwebtoken');
const historyModel = require('../../models/historyModel');

const { credentials } = require('../../config').constantCredentials;


exports.userReport = async (req, res) => {
  try {
    console.log(req.body);
    const insertData = new reportedUserModel({
      reportedUser: req.body.reportedUser,
      userId: req.body.userId,
      action: req.body.action,
      report_issue: req.body.report_issue,
    });
    return insertData.save().then((results) => {
      return {
        message: 'report Added Successfully ',
        status: true,
        data: results,
      };
    });
  } catch (error) {
    return error;
  }
};

exports.fetchUserReport = async (req, res) => {
  try {
    let reportId = req.query.id;
    console.log('fetchReport', reportId);
    const results = await reportedUserModel
      .find({ _id: reportId })
      .populate('reportedUser')
      .populate('userId');
    return {
      message: 'Report Details',
      status: true,
      data: results,
    };
  } catch (error) {
    throw error;
  }
};

exports.fetchAllUserReport = async (req, res) => {
  try {
    const results = await reportedUserModel
      .find()
      .populate('reportedUser')
      .populate('userId')
      .sort({ sCreated: -1 });
    console.log('fetchAllHistory', results);
    return {
      message: 'report Details',
      status: true,
      data: results,
    };
  } catch (error) {
    throw error;
  }
};
exports.deleteUserReport = async (req) => {
  try {
    let reportId = req.query.id;
    let result = await reportedUserModel.findByIdAndDelete({ _id: reportId });
    console.log('result', result);
    return {
      message: 'report  Delete successfully.',
      status: true,
      data: result,
    };
  } catch (error) {
    throw error;
  }
};
