import React, { Componenet } from "react";

class AddProjectPage extends Componenet {
  state = {
    invalidForm: true,
    formData: {
      projectTitle: "",
      episodeTitle: "",
      seriesType: "",
      episodeNum: "0",
      length: "",
      network: "",
      cues: []
    }
  };
}

export default AddProjectPage;
