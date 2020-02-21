import React from "react";
import { Link } from "react-router-dom";
import "./ProjectListItem.css";

function ProjectListItem({ project, handleDeleteProject }) {
  return (
    <div className="row">
      <div className="col-lg-10 col-md-3">
        <div className="card">
          <div className='card-body'>
            <h3 className='panel-title'>{project.projectTitle}</h3>
            <dl className='row'>
              <dt className='col-md-auto text-warning'>Episode Title</dt>
              <dd>{project.episodeTitle}</dd>
              <dt className='col-md-auto text-warning'>Series Type</dt>
              <dd>{project.seriesType}</dd>
              <dt className='col-md-auto text-warning'>Episode Number</dt>
              <dd>{project.episodeNum}</dd>
              <dt className='col-md-auto text-warning'>length</dt>
              <dd>{project.length}</dd>
              <div>
                <dt className='col-md-auto text-warning'>Network</dt>
                <dd>{project.network}</dd>
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
