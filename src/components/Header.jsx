import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Logo
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {/* NavLink sẽ truyền tham số props.isActive
                        3 ngôi : isActive ? "nav-link myActive" : "nav-link" */}
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link myActive" : "nav-link"
              }
              style={({ isActive }) =>
                isActive ? { border: "1px solid red" } : {}
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            {/* style={({ isActive }) => isActive && { border: '1px solid red' }}  */}
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link myActive" : "nav-link"
              }
              to="/contact"
              style={({ isActive }) =>
                isActive ? { border: "1px solid red" } : {}
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link myActive" : "nav-link"
              }
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link myActive" : "nav-link"
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link myActive" : "nav-link"
              }
              to="/demo-use-effect"
            >
              Demo UseEffect
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link myActive" : "nav-link"
              }
              to="/demo-redux-toolkit"
            >
              Demo redux toolkit
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link myActive" : "nav-link"
              }
              to="/fakebook"
            >
             Fakebook
            </NavLink>
          </li>



        </ul>
      </div>
    </nav>
  );
}
