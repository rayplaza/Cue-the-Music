const Project = require("../models/project");

module.exports = {
    create,
}


async function create(req, res) {
    const user = await Project.findOne({ "_id": req.project._id });
    project.cues.push(req.body)
    project.save()
    res.status(200).json(user);
}
