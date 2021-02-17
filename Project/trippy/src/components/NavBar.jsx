import React from "react";
import "../App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class NavBar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <i className="fas fa-umbrella-beach"/> Trippy KHS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hotels/:city" className="nav-link" href="#">
                  Hôtels
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hotel/:id" className="nav-link" href="#">
                  Hôtels Page
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
