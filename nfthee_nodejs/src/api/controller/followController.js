const { followService } = require('../services')
const { successResponse, errorResponseBadReq } = require('../helpers').ResponseHelper;

exports.follow = async (req, res, next) => {
    try {
        const data = await followService.follow(req);
        return  successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.unfollow = async (req, res, next) => {
    try {
        const data = await followService.unfollow(req);
        return  successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}