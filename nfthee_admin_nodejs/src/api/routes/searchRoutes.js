const express = require('express');
const { Multer: { uploadS3 },ApiAuth: { auth } } = require('../../utils');

const router = express.Router();
const {addToggle, getToggle,createToggle} = require('../controller').searchController;

// router.post("/createToggle", createToggle);
router.post("/addToggle", addToggle);
router.get("/getToggle", getToggle);

module.exports = router;