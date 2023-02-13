const express = require('express');
const router = express.Router();
const {
    insertLikes,
    getLikes

} = require('../controller').likesController


router.post('/insertlikes', insertLikes);
router.get('/getLikes',getLikes)



module.exports = router;