const express = require('express');

const router = express.Router();
const { airdropSingleUser } = require('../controller').airdropController;

router.get('/airdropSingleUser', airdropSingleUser);

module.exports = router;
