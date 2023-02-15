const express = require('express');

const router = express.Router();

const {
    follow,
    unfollow
   } = require('../controller').followController

router.post("/:userId/follow", follow);
router.post("/:userId/unfollow", unfollow);

module.exports = router;
