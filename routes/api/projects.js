const express = require("express");
const router = express.Router();
const projectsCtrl = require("../../controllers/projects");

/*---------- Public Routes ----------*/
router.get("/", projectsCtrl.index);
router.get("/:id", projectsCtrl.show);
router.post("/", checkAuth, projectsCtrl.create);
router.delete("/:id", checkAuth, projectsCtrl.delete);
router.put("/:id", checkAuth, projectsCtrl.update);
/*---------- Protected Routes ----------*/

module.exports = router;


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}