const mongoose = require('mongoose');
const fs = require('fs');
const { Mail } = require('../../utils');
const { suggestionModel } = require('../../models');
const { credentials } = require('../../config').constantCredentials;
/**
 * @function submitSuggestion
 * @description using this function to generate refercode for user
 * @param {mobile}
 * @author Rinku sain
 */
exports.submitSuggestion = async (req, res) => {
    console.log('hdddd')
    try {
        console.log(':::::::>:>:>:>:',req.body)
        let body = req.body;
        console.log('::::::::::>',body)
        const adminMail = new Mail('admin');
        const userMail = new Mail(req.body.email);
        await adminMail.sendMail(
            adminMail.email,
            `<h3>Name - ${req.body.name}</h3><br><h4>Email - ${req.body.email}</h4><br><p> Description:  ${req.body.description}</p>`,
            `Suggestions for users`,
        );
        await userMail.sendMail(
            userMail.email,
            `<h3>Dear ${req.body.name},</h3><br><p> Thank you for submitting request, We will review your request.</p>`,
            `Thank you for submitting request`,
        );
        let suggestionData = await suggestionModel.create(body);
        console.log('suggestionData',suggestionData)
        return {
            message: "Mail sent successfully.",
            status: true,
            data: suggestionData,
        };
    } catch (error) {
        throw error;
    }
}
