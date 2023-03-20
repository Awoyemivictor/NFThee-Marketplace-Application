const { adminService } = require('../services');
const { successResponse, errorResponseBadReq } = require('../helpers').ResponseHelper;


exports.adminfetch = async (req, res, next) => {
    try {
        const data = await adminService.adminfetch(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}



exports.all_blog = async (req, res, next) => {
    try {
        console.log(req)
        const data = await adminService.all_blog(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}



