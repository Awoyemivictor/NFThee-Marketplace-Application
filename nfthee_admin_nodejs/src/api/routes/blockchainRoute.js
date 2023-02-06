const express = require('express');
const { Multer: { upload }, ApiAuth: { auth } } = require('../../utils');

const router = express.Router();
const {
    addBlockchain,
    getBlockchain,
    editBlockchain,
    deleteBlockchain
} = require('../controller').blockchainController;

router.post("/addBlockchain", auth, upload.single('icon'), addBlockchain)
router.get("/getBlockchain", auth, getBlockchain)
router.post("/editBlockchain", auth, upload.single('icon'), editBlockchain)
router.get("/deleteBlockchain", auth, upload.single('icon'), deleteBlockchain)

module.exports = router;