const { adminService } = require('../services');
const { successResponse, errorResponseBadReq } = require('../helpers').ResponseHelper;

exports.adminBlog = async (req, res, next) => {
    try {
        const data = await adminService.adminBlog(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}



exports.all_blog = async (req, res, next) => {
    try {
        const data = await adminService.all_blog(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}


exports.single_blog = async (req, res, next) => {
    try {
        const data = await adminService.single_blog(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}


exports.adminUpdate = async (req, res, next) => {
    try {
        const data = await adminService.adminUpdate(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}



exports.blog_delete = async (req, res, next) => {
    try {
        const data = await adminService.blog_delete(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}


exports.loginUser = async (req, res, next) => {
    try {
        const data = await adminService.loginUser(req);
        if (data.status === true) {
            return successResponse(req, res, data.data, data.message);
        } else {
            return errorResponseBadReq(res, data.data, data.message);
        }
    } catch (error) {
        console.log('error',error)
        next(error);
    }
}

exports.changePassword = async (req, res, next) => {
    try {
        const data = await adminService.changePassword(req);
        if (data.success) {
            return successResponse(req, res, data.data, data.message);
        } else {
            return errorResponseBadReq(res, data.data, data.message);
        }
    } catch (error) {
        console.log('error',error)
        next(error);
    }
}
