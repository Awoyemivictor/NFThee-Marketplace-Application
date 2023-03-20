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
exports.followingList = async (req, res, next) => {
  try {
    const data = await signupServices.followingList(req);

    return successResponse(req, res, data.data, data.message);
  } catch (error) {
    next(error);
  }
};
exports.signupData = async (req, res, next) => {
  try {
    const data = await signupServices.signupData(req);

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
exports.updateAccountAdrs = async (req, res, next) => {
  try {
    const data = await signupServices.updateAccountAdrs(req);
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
    const data = await signupServices.updateAccountAddress(req);
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


//token update on login user
exports.addLoginToken = async (req, res, next) => {
  try {
    const data = await signupServices.addLoginToken(req);
    if (data.status == true) {
      return successResponse(req, res, data.data, data.message);
    } else {
      return successErrorResponse(req, res, data.data, data.message);
    }
  } catch (error) {
    next(error);
  }
};


// Notification store data 
exports.notificationSend = async (req, res, next) => {
  try {
    const data = await signupServices.notificationSend(req);
    if (data.status == true) {
      return successResponse(req, res, data.data, data.message);
    } else {
      return successErrorResponse(req, res, data.data, data.message);
    }
  } catch (error) {
    next(error);
  }
};
exports.notificationFetch = async (req, res, next) => {
  try {
    const data = await signupServices.notificationFetch(req);
    if (data.status == true) {
      return successResponse(req, res, data.data, data.message);
    } else {
      return successErrorResponse(req, res, data.data, data.message);
    }
  } catch (error) {
    next(error);
  }
};
exports.messageDelete = async (req, res, next) => {
  try {
    const data = await signupServices.messageDelete(req);
    console.log("req",data,"----------request-------")
    if (data.status == true) {
      return successResponse(req, res, data.data, data.message);
    } else {
      return successErrorResponse(req, res, data.data, data.message);
    }
  } catch (error) {
    next(error);
  }
};
exports.addWalletToken = async (req, res, next) => {
  try {
    const data = await signupServices.addWalletToken(req);
    console.log("req",data,"----------request-------")
    if (data.status == true) {
      return successResponse(req, res, data.data, data.message);
    } else {
      return successErrorResponse(req, res, data.data, data.message);
    }
  } catch (error) {
    next(error);
  }
};



//user status
exports.updateUserStatus = async (req, res, next) => {
  try {
    const data = await signupServices.updateUserStatus(req);
    if (data.status == true) {
      return successResponse(req, res, data.data, data.message);
    } else {
      return successErrorResponse(req, res, data.data, data.message);
    }
  } catch (error) {
    next(error);
  }
};
exports.readUser = async (req, res, next) => {
  try {
    const data = await signupServices.readUser(req);
    if (data.status == true) {
      return successResponse(req, res, data.data, data.message);
    } else {
      return successErrorResponse(req, res, data.data, data.message);
    }
  } catch (error) {
    next(error);
  }
};

exports.checkWalletAddress = async (req, res, next) => {
  try {
    const data = await signupServices.checkWalletAddress(req);
    if (data.status == true) {
      return successResponse(req, res, data.data, data.message);
    } else {
      return successErrorResponse(req, res, data.data, data.message);
    }
  } catch (error) {
    next(error);
  }
};