const express = require("express");
const router = express.Router();
const cuesCtrl = require("../../controllers/cues");

/*---------- Public Routes ----------*/
router.put("/cues/:id", cuesCtrl.create);

/*---------- Protected Routes ----------*/

module.exports = router;
