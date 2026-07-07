const express = require("express");
const router = express.Router();
const user_auth = require("../../middleware/user_auth");

const {
    register,
    user_login,
    verifyOtp,
    userID,
    getMe
} = require("../../controllers/userSide/user_validation");

router.post("/register", register);
router.post("/verifyOtp", verifyOtp);
router.post("/user_login", user_login);
router.post("/userID", user_auth, userID);
router.get("/me", user_auth, getMe);

module.exports = router;