const express = require("express");
const router = express.Router();
const cuesCtrl = require("../../controllers/cues");

router.post("/", cuesCtrl.create);

module.exports = router;

