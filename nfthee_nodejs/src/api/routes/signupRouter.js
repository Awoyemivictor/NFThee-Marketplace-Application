const express = require('express');
const router = express.Router();

const {
    register,
    login,
    signupData,
    signupDataAll,
    loginOne
} = require('../controller').signupController;



router.post("/signup", register);
router.get("/signup/all", signupDataAll);
router.get("/login/email", login);

// router.post("/reg", SignUp)




module.exports = router;