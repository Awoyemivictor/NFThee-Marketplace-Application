const { emailApiService } = require('../services');

const { successResponse } = require('../helpers').ResponseHelper;

exports.createEmail = async(req, res, next) => {
    try {
        const data = await emailApiService.createEmail(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}
exports.readEmail = async(req, res, next) => {
    try {
        const data = await emailApiService.readEmail(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}
exports.readAllEmail = async(req, res, next) => {
    try {
        const data = await emailApiService.readAllEmail(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}
exports.updateEmail = async(req, res, next) => {
    try {
        const data = await emailApiService.updateEmail(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}
exports.deleteEmail = async(req, res, next) => {
    try {
        const data = await emailApiService.deleteEmail(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}