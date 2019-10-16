//@flow
import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

type Props = {
  auth: Object
};

export const Header = (props: Props) => {
  const { auth } = props;

  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item">
            <a href="/api/auth/google" className="nav-link ">
              Login With Google
            </a>
          </li>
        );
      default:
        return [
          <li key="3" className="nav-item">
            <a href="/api/logout" className="nav-link ">
              Logout
            </a>
          </li>
        ];
    }
  };

  return (
    <nav className="navbar sticky-top navbar-expand navbar-light border-bottom shadow-sm">
      <div className="container">
        <Link
          to={auth ? "/admin-dashboard/admin-home" : "/"}
          className="navbar-brand "
        >
          CONFEZEP
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">{renderContent()}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
