const { createCollectionService } = require('../services')
const { successResponse, errorResponseBadReq } = require('../helpers').ResponseHelper;


// create new collection


exports.indexAll = async (req, res, next) => {
    try {
        const data = await createCollectionService.indexAll(req);
        if (data.status == true) {
            return successResponse(req, res, data.data, data.message);
        } else {
            return successErrorResponse(req, res, data.data, data.message);
        }
    } catch (error) {
        next(error);
    }
}

exports.upload_image = async (req, res, next) => {
    try {
        const data = await createCollectionService.upload_image(req)
        if (data.status == true) {
            return successResponse(req, res, data.data, data.message);
        } else {
            return successErrorResponse(req, res, data.data, data.message);
        }
    } catch (error) {
        next(error);
    }
}

exports.createCollectionInfo = async (req, res, next) => {
    try {
        const data = await createCollectionService.createCollectionInfo(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}


exports.read_createCollectionInfo = async (req, res, next) => {
    try {
        const data = await createCollectionService.read_createCollectionInfo(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.update_createCollectionInfo = async (req, res, next) => {
    try {
        const data = await createCollectionService.update_createCollectionInfo(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.delete_createCollectionInfo = async (req, res, next) => {
    try {
        const data = await createCollectionService.delete_createCollectionInfo(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}