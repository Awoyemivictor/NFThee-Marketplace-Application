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
    changePassword,registerAdmin
} = require('../controller').adminController;



router.post("/blog",  upload.single('uploadFile'), adminBlog);
router.get("/blog/all",  all_blog)
router.post("/blog/modify",  upload.single('uploadFile'), adminUpdate)
router.post("/blog/delete",  blog_delete)
router.get("/singleBlog",  single_blog)

//login api

router.post("/user/login", loginUser)
router.post("/registerAdmin",registerAdmin)

//change password
router.post("/user/changePassword",  changePassword)
module.exports = router;