import React from "react";
import { Link } from "react-router-dom";
import "./ProjectListItem.css";

function ProjectListItem({ project, handleDeleteProject }) {
  return (
    <div className="row">
      <div className="col-lg-10 col-md-3">
        <div className="card">
          <div className='card-body'>
            <h3 className='panel-title'>{project.cueNum}</h3>
            <dl>
              <dt>Composer</dt>
              <dd>{project.composer}</dd>
              <dt>Timecode In</dt>
              <dd>{project.timecodeIn}</dd>
              <dt>Timecode Out</dt>
              <dd>{project.timecodeOut}</dd>
              <dt>Total Time</dt>
              <dd>{project.totalTime}</dd>
              <dt>Notes</dt>
              <dd>{project.note}</dd>
            </dl>
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
      </div>
    </div>
  );
}

export default ProjectListItem;
