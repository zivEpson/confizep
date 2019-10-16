//@flow
import React from "react";
import { Link } from "react-router-dom";

import "./SideBar.css";

/**
 * @file Component which represent the admin side bar
 * @module SideBar
 */

export const SideBar = () => {
  return (
    <div className="row border-right border-light" id="full-size-sidebar">
      <div className="col mt-3">
        <nav className="nav flex-column">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link
                className="nav-link text-dark"
                to="/admin-dashboard/admin-home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item sidebar-nav-item">
              <Link
                className="nav-link text-muted"
                to="/admin-dashboard/question-panel"
              >
                Questions
              </Link>
            </li>
            <li className="nav-item sidebar-nav-item">
              <Link
                className="nav-link text-muted"
                to="/admin-dashboard/user-panel"
              >
                Users
              </Link>
            </li>
            <li className="nav-item sidebar-nav-item">
              <Link
                className="nav-link text-muted"
                to="/admin-dashboard/course-panel"
              >
                Courses
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
