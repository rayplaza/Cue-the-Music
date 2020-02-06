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
            <dl className='row'>
              <dt className='col-md-auto text-warning'>Composer</dt>
              <dd>{project.composer}</dd>
              <dt className='col-md-auto text-warning'>Timecode In</dt>
              <dd>{project.timecodeIn}</dd>
              <dt className='col-md-auto text-warning'>Timecode Out</dt>
              <dd>{project.timecodeOut}</dd>
              <dt className='col-md-auto text-warning'>Total Time</dt>
              <dd>{project.totalTime}</dd>
              <div>
                <dt className='col-md-auto text-warning'>Notes</dt>
                <dd className='col-md-auto'>{project.note}</dd>
              </div>
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
