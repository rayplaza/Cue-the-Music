const Project = require("../models/project");

module.exports = {
  create
};

async function create(req, res) {
  // console.log()
  const project = await Project.create(req.body);
  res.status(201).json(project);
}
