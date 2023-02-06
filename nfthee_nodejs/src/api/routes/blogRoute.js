
const express = require('express');
const { Multer: { upload } } = require('../../utils');

const router = express.Router();
const {adminBlog, adminfetch,all_blog, adminUpdate,
     blog_delete} = require('../controller').adminController;



router.get("/blog/fetch", adminfetch)
router.get("/blog/all", all_blog)
module.exports = router;