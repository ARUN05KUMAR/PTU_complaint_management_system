const express = require("express");
const privateComplaintsCommentsController = require("../controllers/privateComplaintsComments.controller");

const router = express.Router();

router.use("/privateComplaintsComments", privateComplaintsCommentsController);

module.exports = router;
