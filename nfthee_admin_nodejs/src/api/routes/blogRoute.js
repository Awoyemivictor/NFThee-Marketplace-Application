const express = require('express');
const { Multer: { upload }, ApiAuth: { auth } } = require('../../utils');

const router = express.Router();
const {
    adminBlog,
    all_blog,
    adminUpdate,
    blog_delete,
    single_blog,
    loginUser,
    changePassword
} = require('../controller').adminController;



router.post("/blog", auth, upload.single('uploadFile'), adminBlog);
router.get("/blog/all", auth, all_blog)
router.post("/blog/modify", auth, upload.single('uploadFile'), adminUpdate)
router.post("/blog/delete", auth, blog_delete)
router.get("/singleBlog", auth, single_blog)

//login api

router.post("/user/login", loginUser)

//change password
router.post("/user/changePassword", auth, changePassword)
module.exports = router;