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
            <label>Project Title (required)</label>
            <input
              className="form-control"
              projectTitle="projectTitle"
              value={this.state.formData.projectTitle}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Episode Title</label>
            <input
              className="form-control"
              episodeTitle="episodeTitle"
              value={this.state.formData.episodeTitle}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Series Type</label>
            <input
              className="form-control"
              seriesType="seriesType"
              value={this.state.formData.seriesType}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Episode Number</label>
            <input
              className="form-control"
              episodeNum="episodeNum"
              value={this.state.formData.episodeNum}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Length</label>
            <input
              className="form-control"
              length="length"
              value={this.state.formData.length}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Network</label>
            <input
              className="form-control"
              network="network"
              value={this.state.formData.network}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </>
    );
  }
}

export default AddProjectPage;
