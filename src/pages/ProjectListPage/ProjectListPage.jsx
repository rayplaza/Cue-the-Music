import React from "react";
import "./ProjectListPage.css";
import ProjectListItem from "../../components/ProjectListItem/ProjectListItem";

function ProjectListPage(props) {
  return (
    <>
      <h1>Projects</h1>
      <div className="ProjectListPage-grid">
        {props.projects.map(project => (
          <ProjectListItem
            project={project}
            handleDeleteProject={props.handleDeleteProject}
            key={project._id}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectListPage;
