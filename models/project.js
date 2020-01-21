const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    projectTitle: String,
    episodeTitle: String,
    seriesType: String,
    episodeNum: String,
    length: String,
    network: String,
    cues: []
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Project", projectSchema);
