const { signupServices } = require('../services');
const { successResponse, errorResponseBadReq, successErrorResponse } =
  require('../helpers').ResponseHelper;

exports.register = async (req, res, next) => {
  try { 
    const data = await signupServices.register(req);
    if (data.status == true) {
      return successResponse(req, res, data.data, data.message);
    } else {
      return successErrorResponse(req, res, data.data, data.message);
    }
  } catch (error) {
    next(error);
  }
};
exports.signupDataAll = async (req, res, next) => {
  try {
    const data = await signupServices.signupDataAll(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
exports.login = async (req, res, next) => {
  try {
    const data = await signupServices.login(req);
    if (data.status == true) {
      return successResponse(req, res, data.data, data.message);
    } else {
      return successErrorResponse(req, res, data.data, data.message);
    }
  } catch (error) {
    next(error);
  }
};
exports.updateProfile = async (req, res, next) => {
  try {
    const data = await signupServices.updateProfile(req);
    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};

exports.updateAccountAddress = async (req, res, next) => {
  try {
    const data = await signupServices.updateAddress(req);
    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
exports.userCollections = async (req, res, next) => {
  try {
    const data = await signupServices.userCollections(req)
    // console.log('<><><><S>S<S><S>S<S<>S<',data);
    return successResponse(req, res, data.data, data.message)
    
    ;
  } catch (error) {
    next(error);
  }
};

exports.userItems = async (req, res, next) => {
  try {
  
    const data = await signupServices.userItems(req)
    // console.log('<><><><S>S<S><S>S<S<>S<',data);
    return successResponse(req, res, data.data, data.message)
    
    ;
  } catch (error) {
    next(error);
  }
};
exports.userFollow = async (req, res, next) => {
  try {
    

    const data = await signupServices.userFollow(req)
    // console.log('<><><><S>S<S><S>S<S<>S<',data);
    return successResponse(req, res, data.data, data.message)
    
    ;
  } catch (error) {
    next(error);
  }
};

exports.userUnFollow = async (req, res, next) => {
  try {
    

    const data = await signupServices.userUnFollow(req)
    // console.log('<><><><S>S<S><S>S<S<>S<',data);
    return successResponse(req, res, data.data, data.message)
    
    ;
  } catch (error) {
    next(error);
  }
};
