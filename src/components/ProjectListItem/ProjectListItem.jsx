import React from "react";
import { Link } from "react-router-dom";

function ProjectListItem({ project, handleDeleteProject }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className='panel-title'>{project.cueNum}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Composer</dt>
          <dd>{project.composer}</dd>
          <dt>Timecode In</dt>
          <dd>{project.timecodeIn}</dd>
          <dt>Timecode Out</dt>
          <dd>{project.timecodeOut}</dd>
          <dt>Notes</dt>
          <dd>{project.note}</dd>
        </dl>
      </div>
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
  );
}

export default ProjectListItem;
