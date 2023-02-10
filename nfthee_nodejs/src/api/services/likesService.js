const mongoose = require('mongoose');
const fs = require('fs');
const { likes } = require('../../models');
const { sign } = require('crypto');
const { Mail } = require('../../utils');
const jwt = require('jsonwebtoken');

const { credentials } = require('../../config').constantCredentials;

exports.insertLikes = async (req, res) => {
  try {
    const existingLike = await likes.findOne({
      userId: req.body.userId,
      postId: req.body.postId,
      likes:  req.body.likes
    });

    if (existingLike) {
      return {
        message: 'Like already exists',
        status: false,
        data: existingLike
      };
    }

    const insertData = new likes({
      userId: req.body.userId,
      postId: req.body.postId,
      likes: req.body.likes
    });

    return insertData.save().then((results) => {
      return {
        message: 'Like added successfully',
        status: true,
        data: results
      };
    });

  } catch (error) {
    throw error;
  }
};
