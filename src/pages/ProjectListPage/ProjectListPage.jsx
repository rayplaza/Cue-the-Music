import React from "react";
import { NavLink, Route } from "react-router-dom";
import AddProjectPage from "../../pages/AddProjectPage/AddProjectPage";
import "./ProjectListPage.css";
import ProjectListItem from "../../components/ProjectListItem/ProjectListItem";

function ProjectListPage(props) {
  return (
    <>
      <h1>Projects</h1>
      <NavLink exact to="/add">
        ADD PROJECT
      </NavLink>
      <div className="ProjectListPage-grid">
        {props.projects.map(project => (
          <ProjectListItem
            project={project}
            handleDeleteProject={props.handleDeleteProject}
            key={project._id}
          />
        ))}
      </div>
      <Route
        exact
        path="/add"
        render={() => <AddProjectPage handleAddProject={this.handleAddPuppy} />}
      />
    </>
  );
}

export default ProjectListPage;
