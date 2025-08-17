const express = require("express");
const professorsController = require("../controllers/professors.controller");

const router = express.Router();

router.use("/professors", professorsController);

module.exports = router;
