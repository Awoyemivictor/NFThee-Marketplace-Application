const express = require('express');
const { Multer: { uploadS3 }, ApiAuth: { auth } } = require('../../utils');

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



router.post("/blog",auth,  uploadS3.single('uploadFile'), adminBlog);
router.get("/blog/all",auth,  all_blog)
router.post("/blog/modify",auth,  uploadS3.single('uploadFile'), adminUpdate)
router.delete("/blog/delete",auth,  blog_delete)
router.get("/singleBlog",auth,  single_blog)

//login api

router.post("/user/login",loginUser)
router.post("/registerAdmin",registerAdmin)

//change password
router.post("/user/changePassword",auth,  changePassword)
module.exports = router;