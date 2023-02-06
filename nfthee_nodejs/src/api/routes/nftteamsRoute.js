const express = require('express');
const { Multer: { upload } } = require('../../utils');

const { imageUpload } = require('../../../server');

const router = express.Router();

const {
    index,
    nftStore,
    upload_image,
    read_nftStore,
    upadte_nftStore,
    delete_nftStore,
} = require('../controller').nftteamsController

router.get("/all", index);
router.post('/store', nftStore);
router.post('/image', imageUpload.single('fileName'), upload_image);
router.get('/read', read_nftStore);
router.post('/update', upload.single('uploadFile'), upadte_nftStore);
router.post('/delete', delete_nftStore);

module.exports = router;