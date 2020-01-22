import React from "react";
import { NavLink } from "react-router-dom";
import AddCuePage from "../AddCuePage/AddCuePage";

function CueListPage(props) {
  console.log("PROPS LOC: ", props.location);
  return (
    <>
      <h1>Cue Sheet</h1>
      <NavLink exact to="/addCue">
        ADD CUE
      </NavLink>
      <AddCuePage location={props.location} />}
    </>
  );
}

export default CueListPage;
