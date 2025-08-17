const express = require("express");
const publicComplaintsCommentsController = require("../controllers/publicComplaintsComments.Controller");

const router = express.Router();

router.use("/publicComplaintsComments", publicComplaintsCommentsController);

module.exports = router;
