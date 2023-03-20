const mongoose = require('mongoose');
const fs = require('fs');

const { adminModel } = require('../../models');

const { credentials } = require('../../config').constantCredentials;
/**
 * @function admin data
 * @description using this function to generate refercode for user
 * @param {mobile}
 * @author Rinku sain
 */
exports.all_blog = async() => {
    try {
        let result = await adminModel.find();
        return {
            message: "All Blog Data Fetch.....",
            status: true,
            data: result,
        };
    } catch (error) {
        throw error;
    }
}

exports.adminfetch = async(req) => {
    try {
        let blogId = req.query.blogId;
        let result = await adminModel.findById({ _id: mongoose.Types.ObjectId(blogId) });
        return {
            message: "Blog Data Fetch.....",
            status: true,
            data: result,
        };
    } catch (error) {
        throw error;
    }
}

