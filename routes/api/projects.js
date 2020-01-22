const express = require("express");
const router = express.Router();
const projectsCtrl = require("../../controllers/projects");

/*---------- Public Routes ----------*/
router.get("/", projectsCtrl.index);
router.get("/:id", projectsCtrl.show);
router.post("/", projectsCtrl.create);
router.delete("/:id", projectsCtrl.delete);
router.put("/:id", projectsCtrl.update);
/*---------- Protected Routes ----------*/

module.exports = router;
