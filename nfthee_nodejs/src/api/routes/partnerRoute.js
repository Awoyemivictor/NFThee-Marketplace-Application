const express = require('express');
const { Multer: { upload },ApiAuth: { auth } } = require('../../utils');

const router = express.Router();
const {addPartner,getPartner,createPageToken} = require('../controller').partnerController;


let uploadMultiple = upload.fields([
    {name:'nft_artwork',maxCount:1},
    {name:'banner_image',maxCount:1},
    {name:'icon_image',maxCount:1},
]);

// router.post("/addPartner",auth, uploadMultiple, addPartner);
router.post("/addPartner",auth, uploadMultiple, addPartner);

router.get("/getPartner", auth,getPartner);
router.post("/createPageToken",auth, createPageToken);
module.exports = router;