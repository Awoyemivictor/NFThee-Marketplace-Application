const { partnerModel } = require('../../models');

exports.getPartner = async (req,res) => {
    try {
        let query={};
        if(req.query?.id){
            query={ _id:req.query.id }
        }
        let findData = await partnerModel.find(query).sort({'createdAt':-1});
        return {
            message: "Getting partner listing.",
            status: true,
            data: findData,
        };
    } catch (error) {
        throw error;
    }
}

exports.deletePartner = async (req) => {
    try {
        id = req.query.id
        let deletedPartner = await partnerModel.findByIdAndDelete(id)
        if (deletedPartner) {
            return {
                message: "Deleted Partner.",
                status: true,
                data: deletedPartner,
            };
        } else {
            return {
                message: "Partner not found",
                status: false,
                data: {},
            };
        }
    } catch (error) {
        return {
            message: "Something went wrong.",
            status: false,
            data: {},
        };
    }
}