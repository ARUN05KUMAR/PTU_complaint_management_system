const express = require("express");
const privateComplaintsController = require("../controllers/privateComplaints.controller");

const router = express.Router();

router.use("/privateComplaints", privateComplaintsController);

module.exports = router;
