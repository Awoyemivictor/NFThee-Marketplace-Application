const { manageSettingsService } = require('../services');
const { successResponse, errorResponseBadReq } = require('../helpers').ResponseHelper;

exports.addSmsDetails = async (req, res, next) => {
    try {
        const data = await manageSettingsService.addSmsDetails(req);
        if (data.status) {
            return successResponse(req, res, data.data, data.message);
        } else {
            return errorResponseBadReq(res, data.data, data.message);
        }
    } catch (error) {
        next(error)
    }

}

exports.getSmsDetails = async (req, res, next) => {
    try {
        const data = await manageSettingsService.getSmsDetails(req);
        if (data.status) {
            return successResponse(req, res, data.data, data.message);
        } else {
            return errorResponseBadReq(res, data.data, data.message);
        }
    } catch (error) {
        next(error)
    }

}