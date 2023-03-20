const express = require('express');
const { Multer: { uploadS3 },ApiAuth: { auth } } = require('../../utils');

const router = express.Router();
const {getPartner, deletePartner} = require('../controller').partnerController;

router.get("/getPartner", auth, getPartner);
router.get("/deletePartner", auth, deletePartner);

module.exports = router;