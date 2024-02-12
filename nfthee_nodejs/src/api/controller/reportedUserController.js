const { reportedUserService } = require('../services')
const { successResponse, errorResponseBadReq, successErrorResponse } =
  require('../helpers').ResponseHelper;

  exports.userReport = async (req, res, next) => {
    try {
      const data = await reportedUserService.userReport(req);
  
      return successResponse(req, res, data.data, data.message);
    } catch (error) {
      next(error);
    }
  };

exports.fetchUserReport = async (req, res, next) => {
  try {
    const data = await reportedUserService.fetchUserReport(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.fetchAllUserReport = async (req, res, next) => {
  try {
    const data = await reportedUserService.fetchAllUserReport(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.deleteUserReport = async (req, res, next) => {
  try {
    const data = await reportedUserService.deleteUserReport(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};


