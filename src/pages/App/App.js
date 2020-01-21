import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Redirect, Switch } from "react-router-dom";
import * as projectAPI from "../../utils/projectService";
import ProjectListPage from "../../pages/ProjectListPage/ProjectListPage";
import MainPage from "../MainPage/MainPage";
import AddProjectPage from "../../pages/AddProjectPage/AddProjectPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import NavBar from "../../components/NavBar/NavBar";

class App extends Component {
  state = {
    user: userService.getUser(),
    projects: []
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleAddProject = async newProjData => {
    const newProj = await projectAPI.create(newProjData);
    this.setState(
      state => ({
        projects: [...state.puppies, newProj]
      }),
      () => this.props.history.push("/")
    );
  };

  handleUpdateProject = async updatedProjData => {
    const updatedProject = await projectAPI.update(updatedProjData);
    const newProjectsArray = this.state.projects.map(p =>
      p._id === updatedProject._id ? updatedProject : p
    );
    this.setState({ projects: newProjectsArray }, () =>
      this.props.history.push("/")
    );
  };

  handleDeleteProject = async id => {
    await projectAPI.deleteOne(id);
    this.setState(
      state => ({
        // Yay, filter returns a NEW array
        project: state.projects.filter(p => p._id !== id)
      }),
      () => this.props.history.push("/")
    );
  };

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const projects = await projectAPI.getAll();
    this.setState({ projects });
  }

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
                <ProjectListPage
                  projects={this.state.projects}
                  handleDeleteProject={this.handleDeleteProject}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/add"
            render={() => (
              <AddProjectPage handleAddProject={this.handleAddProject} />
            )}
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
