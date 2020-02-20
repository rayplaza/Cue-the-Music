const mongoose = require("mongoose");

const cueSchema = new mongoose.Schema({
  cueNum: String,
  composer: String,
  timecodeIn: String,
  timecodeOut: String,
  totalTime: String,
  note: String
}, {
  timestamps: true
}
);

const projectSchema = new mongoose.Schema(
  {
    projectName: String,
    composer: String,
    timecodeIn: String,
    timecodeOut: String,
    totalTime: String,
    note: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Project", projectSchema);
