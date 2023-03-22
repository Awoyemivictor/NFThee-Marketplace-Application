const express = require('express');
const { Multer: { upload,uploadS3 },ApiAuth: { auth } } = require('../../utils');

const router = express.Router();
const {addPartner,getPartner,createPageToken} = require('../controller').partnerController;


let uploadMultiple = uploadS3.fields([
    {name:'nft_artwork',maxCount:1},
    {name:'banner_image',maxCount:1},
    {name:'icon_image',maxCount:1},
]);

// router.post("/addPartner",auth, uploadMultiple, addPartner);
router.post("/addPartner",uploadMultiple, addPartner);
router.get("/getPartner",getPartner);
// router.get("/getPartner", auth,getPartner);
router.post("/createPageToken", createPageToken);
module.exports = router;