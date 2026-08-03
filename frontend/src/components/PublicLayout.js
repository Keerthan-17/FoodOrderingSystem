import React from "react";
import { Link } from "react-router-dom";
import '../styles/layout.css'
import {
  FaHome,
  FaSignInAlt,
  FaTruck,
  FaUserPlus,
  FaUserShield,
  FaUtensils,
} from "react-icons/fa";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <FaUtensils className="me-1 icon-fix" />
            Food Ordering System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/">
                  <FaHome className="me-1 icon-fix" />
                  Home
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="#">
                  <FaUtensils className="me-1 icon-fix" />
                  Menu
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="#">
                  <FaTruck className="me-1 icon-fix" />
                  Track
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/register">
                  <FaUserPlus className="me-1 icon-fix" />
                  Register
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/login">
                  <FaSignInAlt className="me-1 icon-fix" />
                  Login
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/admin-login">
                  <FaUserShield className="me-1 icon-fix" />
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>{children}</div>
      <footer className="text-center py-3 mt-5">
        <div className="container">
          <p>&copy; 2026 Food Ordering System. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
