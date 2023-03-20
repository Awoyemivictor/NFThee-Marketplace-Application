const { historyServices } = require('../services')
const { successResponse, errorResponseBadReq, successErrorResponse } =
  require('../helpers').ResponseHelper;

exports.insertHistory = async (req, res, next) => {
  try {
    const data = await historyServices.insertHistory(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.fetchHistory = async (req, res, next) => {
  try {
    const data = await historyServices.fetchHistory(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
 