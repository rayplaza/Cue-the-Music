const express = require("express");
const router = express.Router();
const cuesCtrl = require("../../controllers/cues");

/*---------- Public Routes ----------*/
router.post("/", cuesCtrl.create);

/*---------- Protected Routes ----------*/

module.exports = router;
