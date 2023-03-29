const { nftteamsService } = require('../services')
const { successResponse, errorResponseBadReq } = require('../helpers').ResponseHelper;

exports.index = async (req, res, next) => {
    try {
        const data = await nftteamsService.index(req);
        return  successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.userLikes = async (req, res, next) => {
    try {
        const data = await nftteamsService.userLikes(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
} 
exports.getItemInfo = async (req, res, next) => {
    try {
        const data = await nftteamsService.getItemInfo(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
} 
exports.viewCounts = async (req, res, next) => {
    try {
        const data = await nftteamsService.viewCounts(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
} 
exports.getAllItemInfo = async (req, res, next) => {
    try {
        const data = await nftteamsService.getAllItemInfo(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
} 

exports.read_getItemInfo = async (req, res, next) => {
    try {
        const data = await nftteamsService.read_getItemInfo(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.update_getItemInfo = async (req, res, next) => {
    try {
        const data = await nftteamsService.update_getItemInfo(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.upload_image = async (req, res, next) => {
    try {
        const data = await nftteamsService.upload_image(req)
        if(data.status==true){
            return successResponse(req, res, data.data, data.message);
        }else{
            return successErrorResponse(req, res, data.data, data.message);
        }
    } catch (error) {
        next(error);
    }
}

exports.nftStore = async (req, res, next) => {
    try {
        const data = await nftteamsService.nftStore(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.read_nftStore = async (req, res, next) => {
    try {
        const data = await nftteamsService.read_nftStore(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}
exports.collectionNft = async (req, res, next) => {
    try {
        const data = await nftteamsService.collectionNft(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}
exports.collectionActivity = async (req, res, next) => {
    try {
        const data = await nftteamsService.collectionActivity(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.upadte_nftStore = async (req, res, next) => {
    try {
        const data = await nftteamsService.upadte_nftStore(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.delete_nftStore = async (req, res, next) => {
    try {
        const data = await nftteamsService.delete_nftStore(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

// create new collection


exports.indexAll = async (req, res, next) => {
    try {
        const data = await nftteamsService.indexAll(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}


exports.createCollectionInfo = async (req, res, next) => {
    try {
        const data = await nftteamsService.createCollectionInfo(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}


exports.read_createCollectionInfo = async (req, res, next) => {
    try {
        const data = await nftteamsService.read_createCollectionInfo(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.update_createCollectionInfo = async (req, res, next) => {
    try {
        const data = await nftteamsService.update_createCollectionInfo(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.delete_createCollectionInfo = async (req, res, next) => {
    try {
        const data = await nftteamsService.delete_createCollectionInfo(req);
        if (data.status === true) {
            return successResponse(req, res, data.data, data.message);
        } else {
            return successErrorResponse(req, res, data.data, data.message);
        }
    } catch (error) {
        next(error);
    }
}
exports.insert_likes= async (req, res, next) => {
    try {
        const data = await nftteamsService.insert_likes(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
    
}
exports.insert_likes= async (req, res, next) => {
    try {
        const data = await nftteamsService.insert_likes(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
    
}
exports.remove_likes= async (req, res, next) => {
    try {
        const data = await nftteamsService.remove_likes(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
    
}


exports.getPrice = async (req, res, next) => {
    try {
        const data = await nftteamsService.getPrice(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}

exports.uploadData = async (req, res, next) => {
    try {
        const data = await nftteamsService.uploadData(req);
        return successResponse(req, res, data.data, data.message);
    } catch (error) {
        next(error);
    }
}