const express = require('express');

const router = express.Router();
const { airdropSingleUser,airdropNewUsers } = require('../controller').airdropController;

router.get('/airdropSingleUser', airdropNewUsers);

module.exports = router;
