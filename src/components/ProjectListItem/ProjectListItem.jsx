import React from "react";
import { Link } from "react-router-dom";

function ProjectListItem({ project, handleDeleteProject }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{project.name}</h3>
      </div>
      <div className="panel-footer ProjectListItem-action-panel">
        <Link
          className="btn btn-xs btn-info"
          to={{
            pathname: "/cues",
            state: { project }
          }}
        >
          DETAILS
        </Link>
        <Link
          className="btn btn-xs btn-warning"
          to={{
            pathname: "/edit",
            state: { project }
          }}
        >
          EDIT
        </Link>
        <button
          className="btn btn-xs btn-danger margin-left-10"
          onClick={() => handleDeleteProject(project._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ProjectListItem;
