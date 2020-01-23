import React from "react";
import { NavLink } from "react-router-dom";

function CueListPage(props) {
  return (
    <>
      <h1>Cue Sheet</h1>
      <NavLink exact to="/addCue">
        ADD CUE
      </NavLink>
    </>
  );
}

export default CueListPage;
