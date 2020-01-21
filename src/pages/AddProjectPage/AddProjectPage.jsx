import React, { Component } from "react";

class AddProjectPage extends Component {
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

  formRef = React.createRef();
}

export default AddProjectPage;
