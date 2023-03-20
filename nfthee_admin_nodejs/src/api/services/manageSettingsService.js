const mongoose = require('mongoose');
const { smsDetailsModel } = require('../../models');

exports.addSmsDetails = async (req) => {
    const {url, api, secret, sender, provider, status} = req.body;
    const [smsDetails] = await smsDetailsModel.find();
    //update 
    if (smsDetails) {
        if (Object.keys(req.body).length) {
            const updateSmsDetails = await smsDetailsModel.findByIdAndUpdate(smsDetails._id, req.body, {new: true});
            return {
                message: "Sms details updated successfully",
                status: true,
                data: updateSmsDetails
            }
        } else {
            return {
                message: "Enter data to update",
                status: false,
                data: {}
            }
        }
    } 
    //add
    else {
        try {
            const addSmsDetails = new smsDetailsModel({url, api, secret, sender, provider, status});
            await addSmsDetails.save();
            return {
                message: "Sms details added successfully",
                status: true,
                data: addSmsDetails
            }
        } catch (error) {
            return {
                message: "All fields are required",
                status: false,
                data: {}
            }
        }
    }
}
exports.getSmsDetails = async (req) => {
    const [smsDetails] = await smsDetailsModel.find();
    if (smsDetails) {
        return {
            message: "Sms Details: ",
            status: true,
            data: smsDetails
        }
    } 
    else {
        return {
            message: "No Data",
            status: false,
            data: {}
        }
    }
}