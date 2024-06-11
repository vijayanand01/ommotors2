const express = require("express");
const { sendMailController } = require("../controllers/userController");


const router = express.Router();


// contact us || post || api/v1/user/contactus

router.post("/contactus",sendMailController);



module.exports = router;
