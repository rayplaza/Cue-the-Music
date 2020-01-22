const mongoose = require("mongoose");

const cueSchema = new mongoose.Schema(
  {
    cueNum: Number,
    composer: String,
    timecodeIn: String,
    timecodeOut: String,
    totalTime: String,
    notes: String
  },
  {
    timestamps: true
  }
);

const projectSchema = new mongoose.Schema(
  {
    projectTitle: String,
    episodeTitle: String,
    seriesType: String,
    episodeNum: String,
    length: String,
    network: String,
    cues: [cueSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Project", projectSchema);
