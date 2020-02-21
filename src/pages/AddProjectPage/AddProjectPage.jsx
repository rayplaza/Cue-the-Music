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
      network: ""
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddProject(this.state.formData);
  };

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center">Add Project</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group col-sm-3 mx-auto">
            <label>Project Title (required)</label>
            <input
              className="form-control"
              name="projectTitle"
              value={this.state.formData.projectTitle}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group col-sm-3 mx-auto">
            <label>Episode Title</label>
            <input
              className="form-control"
              name="episodeTitle"
              value={this.state.formData.episideTitle}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-sm-3 mx-auto">
            <label>Series Type</label>
            <input
              className="form-control"
              name="seriesType"
              value={this.state.formData.seriesType}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-sm-3 mx-auto">
            <label>Episode Number</label>
            <input
              className="form-control"
              name="episodeNum"
              value={this.state.formData.episodeNum}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-sm-3 mx-auto">
            <label>Length</label>
            <input
              className="form-control"
              name="length"
              value={this.state.formData.length}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-sm-3 mx-auto">
            <label>Network</label>
            <input
              className="form-control"
              name="network"
              value={this.state.formData.network}
              onChange={this.handleChange}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="far fa-save"
              disabled={this.state.invalidForm}
            >
            </button>Add
          </div>
        </form>
      </>
    );
  }
}

export default AddProjectPage;
