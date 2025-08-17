const express = require("express");
const adminsController = require("../controllers/admins.controller");

const router = express.Router();

router.use("/admins", adminsController);

module.exports = router;
