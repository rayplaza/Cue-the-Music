import React, { Component } from "react";

class AddProjectPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      projectTitle: "",
      episodeTitle: "",
      seriesType: "",
      episodeNum: "",
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
              name="projectTitle"
              value={this.state.formData.projectTitle}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Episode Title</label>
            <input
              className="form-control"
              name="episodeTitle"
              value={this.state.formData.episodeTitle}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Series Type</label>
            <input
              className="form-control"
              name="seriesType"
              value={this.state.formData.seriesType}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Episode Number</label>
            <input
              className="form-control"
              name="episodeNum"
              value={this.state.formData.episodeNum}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Length</label>
            <input
              className="form-control"
              name="length"
              value={this.state.formData.length}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Network</label>
            <input
              className="form-control"
              name="network"
              value={this.state.formData.network}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            Add Project
          </button>
        </form>
      </>
    );
  }
}

export default AddProjectPage;
