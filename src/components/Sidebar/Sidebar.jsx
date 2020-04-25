import React from "react";
import { NavLink } from "react-router-dom";

import Home from "../../images/home";
import PR from "../../images/pr";
import Avatar from "../../images/farmer.svg";
import Cog from "../../images/cog";

import "./Sidebar.css";

function Sidebar() {
  return (
    <nav className="Sidebar">
      <div className="Sidebar__Avatar">
        <img src={Avatar} alt="Avatar" />
      </div>
      <ul className="Sidebar__Nav">
        <li className="Sidebar__Nav-Item">
          <NavLink exact to="/" activeClassName="active">
            <Home />
          </NavLink>
        </li>
        <li className="Sidebar__Nav-Item">
          <NavLink to="/pr" activeClassName="active">
            <PR />
          </NavLink>
        </li>
        <li className="Sidebar__Nav-Item Sidebar__Nav-Item-Cog">
          <NavLink to="/settings" activeClassName="active">
            <Cog />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
