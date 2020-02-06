import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./LoginPage.css";
import userService from "../../utils/userService";

class LoginPage extends Component {
  state = {
    email: "",
    pw: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/projects");
    } catch (err) {
      toast.error("Invalid Credentials!");
    }
  };

  render() {
    return (
      <div className="LoginPage">
        <header className="header-footer text-center">Log In</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-3 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-3 mx-auto">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.pw}
                name="pw"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-warning">Log In</button>
              &nbsp;&nbsp;&nbsp;
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
