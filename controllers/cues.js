const Project = require("../models/project");

module.exports = {
  create
};

async function create(req, res) {
  const project = await Project.findById(req.params.id);
  project.cues.push(req.body.note);
  project.save();
  res.status(200).json(project.cues);
}
