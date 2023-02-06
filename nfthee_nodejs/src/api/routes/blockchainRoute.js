const express = require('express');
const {
  Multer: { upload },
  ApiAuth: { auth },
} = require('../../utils');

const router = express.Router();
const { getBlockchain, setBlockchain } =
  require('../controller').blockchainController;

router.get('/getBlockchain', getBlockchain);
router.post('/setBlockchain', setBlockchain);

module.exports = router;
