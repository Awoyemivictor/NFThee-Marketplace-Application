
const express = require('express');
const { Multer: { upload }, ApiAuth: { auth } } = require('../../utils');
const {addSmsDetails, getSmsDetails} = require('../controller').manageSettingsController

const router = express.Router();

// router.post("/addSmsDetails", auth, addSmsDetails);
router.post("/addSmsDetails", addSmsDetails);
router.get("/getSmsDetails", auth, getSmsDetails);

module.exports = router;