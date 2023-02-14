const express = require('express');

const router = express.Router();

const { searchCollection,searchUser } = require('../controller').searchController;

router.get('/search',searchCollection);
router.get("/searchUser",searchUser)

module.exports = router;
