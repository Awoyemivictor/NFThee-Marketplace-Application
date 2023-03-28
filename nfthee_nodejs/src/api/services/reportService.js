const mongoose = require('mongoose');
const fs = require('fs');
const { reportModel } = require('../../models');
const { sign } = require('crypto');
const { Mail } = require('../../utils');
const jwt = require('jsonwebtoken');
const historyModel = require('../../models/historyModel');

const { credentials } = require('../../config').constantCredentials;

exports.insertReport = async (req, res) => {
  try {
    const insertData = new reportModel({
      nftId: req.body.nftId,
      userId: req.body.userId,
      action: req.body.action,
      report_issue: req.body.report_issue,
    });
    console.log('insertData', insertData);
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

exports.fetchReport = async (req, res) => {
  try {
    let reportId = req.query.id;
    console.log('fetchReport', reportId);
    const results = await reportModel
      .find({ _id: reportId })
      .populate('nftId')
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

exports.fetchAllReport = async (req, res) => {
  try {
    const results = await reportModel
      .find()
      .populate('nftId')
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
exports.deleteReport = async (req) => {
  try {
    let reportId = req.query.id;
    let result = await reportModel.findByIdAndDelete({ _id: reportId });
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
