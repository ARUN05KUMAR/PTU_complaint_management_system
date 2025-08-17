const express = require("express");
const studentsController = require("../controllers/students.controller");

const router = express.Router();

router.use("/students", studentsController);

module.exports = router;
