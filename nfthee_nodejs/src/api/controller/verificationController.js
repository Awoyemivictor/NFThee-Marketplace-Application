const { verificationServices } = require("../services");
const {
  addVerification,
  getVerification,
  createPageToken,
  getAllVerification,
  deleteVerification
} = verificationServices;
const {
  successResponse,
  errorResponseBadReq,
} = require("../helpers").ResponseHelper;

exports.addVerification = async (req, res, next) => {
  try {
    const data = await addVerification(req);
    if (!data.status) return errorResponseBadReq(res, data.data, data.message);
    else return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.getAllVerification = async (req, res, next) => {
    try {
      const data = await getAllVerification(req);
      if (!data.status) return errorResponseBadReq(res, data.data, data.message);
      else return successResponse(req, res, data.data, data.message);
    } catch (error) {
      next(error);
    }
  };
exports.getVerification = async (req, res, next) => {
  try {
    const data = await getVerification(req);
    if (!data.status) return errorResponseBadReq(res, data.data, data.message);
    else return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.deleteVerification = async (req, res, next) => {
    try {
      const data = await deleteVerification(req);
      if (!data.status) return errorResponseBadReq(res, data.data, data.message);
      else return successResponse(req, res, data.data, data.message);
    } catch (error) {
      next(error);
    }
  };
  
exports.createPageToken = async (req, res, next) => {
  try {
    const data = await createPageToken(req);
    if (!data.status) return errorResponseBadReq(res, data.data, data.message);
    else return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
