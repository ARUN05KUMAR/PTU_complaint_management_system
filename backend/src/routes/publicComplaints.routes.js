const express = require("express");
const publicComplaintsController = require("../controllers/publicComplaints.controller");

const router = express.Router();

router.use("/publicComplaints", publicComplaintsController);

module.exports = router;
