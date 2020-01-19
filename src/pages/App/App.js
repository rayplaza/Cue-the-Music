import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, NavLink, Switch } from "react-router-dom";
import ProjectListPage from "../../pages/ProjectListPage/ProjectListPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink className="App-link" exact to="/projects">
              Projects
            </NavLink>
          </nav>
        </header>
        <Switch>
          <Route exact path="/projects" render={() => <ProjectListPage />} />
        </Switch>
      </div>
    );
  }
}

export default App;
