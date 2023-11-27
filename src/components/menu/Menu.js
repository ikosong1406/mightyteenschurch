import React from "react";
import "./Menu.css";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <div className="Navbars">
        <ul className="NavbarWrappers">
          <li className="NavbarElement">
            <NavLink className="link" to="/about">
              ABOUT
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="/events">
              EVENTS
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="/contact">
              CONTACT
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink className="link" to="/partnership">
              PARTNERSHIP
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
