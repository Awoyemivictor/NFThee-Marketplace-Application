const { reportService } = require('../services')
const { successResponse, errorResponseBadReq, successErrorResponse } =
  require('../helpers').ResponseHelper;

exports.insertReport = async (req, res, next) => {
  try {
    const data = await reportService.insertReport(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.fetchReport = async (req, res, next) => {
  try {
    const data = await reportService.fetchReport(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
exports.fetchAllReport = async (req, res, next) => {
  try {
    const data = await reportService.fetchAllReport(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
exports.deleteReport = async (req, res, next) => {
  try {
    const data = await reportService.deleteReport(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

