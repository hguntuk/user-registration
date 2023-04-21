import React from "react";
import {Link, NavLink} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          React User
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link"  to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to="/about">
                About us
              </NavLink>
            </li>
          </ul>
        </div>
        <Link className="btn btn-outline-light" to = "/users/add">Add User</Link >
      </div>
    </nav>
  );
};

export default Navbar;
