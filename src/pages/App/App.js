import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Redirect, Switch } from "react-router-dom";
import ProjectListPage from "../../pages/ProjectListPage/ProjectListPage";
import MainPage from "../MainPage/MainPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import NavBar from "../../components/NavBar/NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <ToastContainer />
        <Switch>
          <Route exact path="/" render={() => <MainPage />} />
          <Route
            exact
            path="/projects"
            render={() =>
              userService.getUser() ? (
                <ProjectListPage />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
