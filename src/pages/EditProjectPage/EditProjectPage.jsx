import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditProjectPage extends Component {
  x = this.props.location.state.project;
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
        <h1 className="text-center">Edit Cue</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group col-sm-3 mx-auto">
            <label>Cue Number (required)</label>
            <input
              className="form-control"
              name="cueNum"
              value={this.state.formData.cueNum}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group col-sm-3 mx-auto">
            <label>Composer</label>
            <input
              className="form-control"
              name="composer"
              value={this.state.formData.composer}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-sm-3 mx-auto">
            <label>Timecode In</label>
            <input
              className="form-control"
              name="timecodeIn"
              value={this.state.formData.timecodeIn}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-sm-3 mx-auto">
            <label>Timecode Out</label>
            <input
              className="form-control"
              name="timecodeOut"
              value={this.state.formData.timecodeOut}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-sm-3 mx-auto">
            <label>Total Time</label>
            <input
              className="form-control"
              name="totalTime"
              value={this.state.formData.totalTime}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-sm-3 mx-auto">
            <label>Notes</label>
            <textarea
              className="form-control"
              name="note"
              value={this.state.formData.note}
              onChange={this.handleChange}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="far fa-save"
              disabled={this.state.invalidForm}
            >
            </button>Save
          &nbsp;&nbsp;
          <Link to="/projects">CANCEL</Link>
          </div>
        </form>
      </>
    );
  }
}

export default EditProjectPage;
