const express= require("express");
const addStudent = require("../Controller/Signup_controller");

const router= express.Router();

router.post('/',addStudent);

module.exports=router;
