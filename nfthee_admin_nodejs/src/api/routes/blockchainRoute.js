const express = require('express');
const {
  Multer: { uploadS3 },
  ApiAuth: { auth },
} = require('../../utils');

const router = express.Router();
const { addBlockchain, getBlockchain, editBlockchain, deleteBlockchain } =
  require('../controller').blockchainController;

router.post('/addBlockchain', uploadS3.single('icon'), addBlockchain);
router.get('/getBlockchain', getBlockchain);
router.post('/editBlockchain', auth, uploadS3.single('icon'), editBlockchain);
router.get(
  '/deleteBlockchain',
  auth,
  uploadS3.single('icon'),
  deleteBlockchain
);

module.exports = router;
