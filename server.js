const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

require("dotenv").config();
require("./config/database");

var projectsRouter = require("./routes/api/projects");
var cuesRouter = require("./routes/api/cues");

var app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// API Routes
app.use("/api/users", require("./routes/api/users"));
app.use(require("./config/auth"));
app.use("/api/projects", projectsRouter);
app.use("/api/cues", cuesRouter);


app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
