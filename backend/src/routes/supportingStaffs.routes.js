const express = require("express");
const supportingStaffsController = require("../controllers/supportingStaffs.controller");

const router = express.Router();

router.use("/supportingStaffs", supportingStaffsController);

module.exports = router;
