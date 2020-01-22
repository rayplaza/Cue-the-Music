const Project = require("../models/project");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const projects = await Project.find({});
  res.status(200).json(projects);
}

async function show(req, res) {
  const project = await Project.findById(req.params.id);
  res.status(200).json(project);
}

async function create(req, res) {
  const project = await Project.create(req.body);
  res.status(201).json(project);
}

async function deleteOne(req, res) {
  const deletedProject = await Project.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedProject);
}

async function update(req, res) {
  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedProject);
}
