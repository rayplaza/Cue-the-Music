import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logosolo from "../../img/logosolo.png";

const NavBar = props => {
  let nav = props.user ? (
    <div>
      <Link to="/" className="NavLogo"><img src={Logosolo} alt="navlogo" /></Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/projects" className="NavBar-link">
        PROJECTS
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="" className="NavBar-link" onClick={props.handleLogout}>
        LOG OUT
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className="NavBar-welcome">Bienvenidos, {props.user.name}</span>
    </div>
  ) : (
      <div>
        <Link to="/login" className="NavBar-link">
          LOG IN
      </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
          SIGN UP
      </Link>
      </div>
    );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
