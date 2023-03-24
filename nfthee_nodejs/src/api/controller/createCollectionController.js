const { createCollectionService } = require('../services');
const { successResponse, errorResponseBadReq } =
  require('../helpers').ResponseHelper;

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
};

exports.upload_image = async (req, res, next) => {
  try {
    const data = await createCollectionService.upload_image(req);
    if (data.status == true) {
      return successResponse(req, res, data.data, data.message);
    } else {
      return successErrorResponse(req, res, data.data, data.message);
    }
  } catch (error) {
    next(error);
  }
};

exports.createCollectionInfo = async (req, res, next) => {
  try {
    // console.log(req)
    const data = await createCollectionService.createCollectionInfo(req);
    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
exports.getCollectionInfo = async (req, res, next) => {
  try {
    const data = await createCollectionService.getCollectionInfo(req);
    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
exports.getAllInfo = async (req, res, next) => {
  try {
    const data = await createCollectionService.getAllInfo(req);
    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
exports.read_getCollectionInfo = async (req, res, next) => {
  try {
    const data = await createCollectionService.read_getCollectionInfo(req);
    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
exports.update_getCollectionInfo = async (req, res, next) => {
  try {
    const data = await createCollectionService.update_getCollectionInfo(req);
    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
exports.read_createCollectionInfo = async (req, res, next) => {
  try {
    const data = await createCollectionService.read_createCollectionInfo(req);
    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.update_createCollectionInfo = async (req, res, next) => {
  try {
    const data = await createCollectionService.update_createCollectionInfo(req);
    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.delete_createCollectionInfo = async (req, res, next) => {
  try {
    const data = await createCollectionService.delete_createCollectionInfo(req);
    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
exports.deleteCollection = async (req, res, next) => {
  try {
    const data = await createCollectionService.deleteCollection(req);
    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
exports.getCollectionByAddress = async (req, res, next) => {
  try {
    const data = await createCollectionService.getCollectionByAddress(req);
    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.getSingleCollectionByName = async (req, res, next) => {
  try {
    const data = await createCollectionService.getSingleCollectionByName(req);
    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
