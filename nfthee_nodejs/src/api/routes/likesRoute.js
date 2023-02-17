const express = require('express');
const router = express.Router();
const {
    insertLikes,
    removeLikes,
    getLikes

} = require('../controller').likesController


router.post('/insertlikes', insertLikes);
router.post('/removelikes',removeLikes)
router.get('/getLikes',getLikes)



module.exports = router;