import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditProjectPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.project
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateProject(this.state.formData);
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
        <h1>Edit Project</h1>
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
            SAVE PROJECT
          </button>
          &nbsp;&nbsp;
          <Link to="/projects">CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditProjectPage;
