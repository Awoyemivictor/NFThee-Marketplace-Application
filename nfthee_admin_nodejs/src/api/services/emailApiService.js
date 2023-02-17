const { emailApiModel } = require('../../models');



exports.createEmail = async(req, res) => {
    try {
        let body = req.body;
        let createEmail = await emailApiModel.create(body);
        return {
            message: "Email Api Added Successfully",
            status: true,
            data: createEmail
        }
    } catch (error) {
        return error
    }
}

exports.readEmail = async(req, res) => {
    try {
        let id = req.body._id;
        let readEmail = await emailApiModel.findOne({ id: id })
        return {
            message: "Email Data Fetch.....",
            status: true,
            data: readEmail,
        }
    } catch (error) {
        return error
    }
}

exports.readAllEmail = async(req, res) => {
    try {
        let readAllEmail = await emailApiModel.find();

        return {
            message: "All Email Data.....",
            status: true,
            data: readAllEmail
        }
    } catch (error) {
        return error
    }
}

exports.updateEmail = async(req, res) => {
    try {
        let id = req.body.id;
        let body = req.body;
        console.log(id, body)
        let updateEmail = await emailApiModel.findByIdAndUpdate(id, { $set: body }, {new: true})
        return {
            message: "Update Email Data.....",
            status: true,
            data: updateEmail
        }
    } catch (error) {
        return error
    }
}

exports.deleteEmail = async(req, res) => {
    try {
        let id = req.body.id
        let deleteEmail = await emailApiModel.findOneAndDelete({ id: id });
        return {
            message: "Delete Email Data.....",
            status: true,
            data: deleteEmail
        }
    } catch (error) {
        return error
    }
}