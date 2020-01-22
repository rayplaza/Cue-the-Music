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

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddProject(this.state.formData);
  };

  handleChange = e => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Add Project</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>Project Name (required)</label>
            <input
              className="form-control"
              projectTitle="Name of Project"
              value={this.state.formData.projectTitle}
              onChange={this.handleChange}
              required
            />
          </div>
        </form>
      </>
    );
  }
}

export default AddProjectPage;
