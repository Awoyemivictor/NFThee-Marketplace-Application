const { categoryService } = require('../services');
const { successResponse, errorResponseBadReq } = require('../helpers').ResponseHelper;

exports.addCategory = async (req, res, next) => {
    try {
        const data = await categoryService.addCategory(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
} 

exports.updateCategory = async (req, res, next) => {
    try {
        const data = await categoryService.updateCategory(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}


exports.getCategory = async (req, res, next) => {
    try {
        const data = await categoryService.getCategory(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.deleteCategory = async (req, res, next) => {
    try {
        const data = await categoryService.deleteCategory(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.getSuggestion = async (req, res, next) => {
    try {
        const data = await categoryService.getSuggestion(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}


exports.deleteSuggestion = async (req, res, next) => { 
    try {
        const data = await categoryService.deleteSuggestion(req);
        if(!data.status) return errorResponseBadReq(res,data.data,data.message);
        else return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}