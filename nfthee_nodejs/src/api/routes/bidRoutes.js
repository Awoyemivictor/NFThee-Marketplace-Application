const express = require('express');
const {
  Multer: { upload },
} = require('../../utils');

const router = express.Router();
const { createBidNft, updateBidNft, fetchBidNft, acceptBidNft, fetchBids ,userBids} =
  require('../controller').bidController;

router.post('/createBidNft', createBidNft);
router.post('/updateBidNft', updateBidNft);
router.post('/fetchBidNft', fetchBidNft);
router.post('/acceptBidNft', acceptBidNft);
router.post('/userBids', userBids);
router.post('/bidNft', fetchBids);
module.exports = router;
