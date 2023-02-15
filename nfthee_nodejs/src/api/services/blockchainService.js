const {blockchainModel} = require('../../models')
const { credentials } = require('../../config').constantCredentials;

exports.getBlockchain = async (req,res) => {
    try {
        console.log(req.query)
        let query={};
        if(req.query?.id){
            query={ _id:req.query.id }
        }
        // let findData = await blockchainModel.find(query).sort({'createdAt':-1});
        let findData = await blockchainModel.find({}).sort({'createdAt':-1});
        return {
            message: "Getting blockchain listing.",
            status: true,
            data: findData,
        };
    } catch (error) {
        throw error;
    }
}

exports.setBlockchain  = async(req,res)=>{
    try {

        // const uploadFile = `${credentials.BASE_URL}fileUpload/${req.file.filename}`;
        // console.log(uploadFile)
    
        let addBlockchain = {
            name:req.body.name,
            description:req.body.description ,
            icon: req.body.icon,
            status:req.body.status
        };
        console.log(addBlockchain);
        let result = await blockchainModel.create(addBlockchain)
        return {
            message: "Setting Blokchain Data.",
            status: true,
            data: result,
        };

    
    } catch (error) {
        throw error
    }
}