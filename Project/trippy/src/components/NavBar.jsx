import React from "react";
import "../App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      // <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
      //   <div className="container-fluid">
      //     <a className="navbar-brand" href="#">
      //     <i className="fas fa-umbrella-beach"/> Trippy KHS
      //     </a>
      //     <button
      //       className="navbar-toggler"
      //       type="button"
      //       data-bs-toggle="collapse"
      //       data-bs-target="#navbarNav"
      //       aria-controls="navbarNav"
      //       aria-expanded="false"
      //       aria-label="Toggle navigation"
      //     >
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //     <div className="collapse navbar-collapse" id="navbarNav">
      //       <ul className="navbar-nav">
      //         <li className="nav-item">
      //           <Link
      //             to="/"
      //             className="nav-link active"
      //             aria-current="page"
      //             href="#"
      //           >
      //             Hotels
      //           </Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link to="#" className="nav-link" href="#">
      //             restaurants
      //           </Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link to="#" className="nav-link" href="#">
      //             Hôtels Page
      //           </Link>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>

      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          <div className="d-flex justify-content-center align-items-center logo">
            <span class="material-icons p-2">beach_access</span>
            <a className="navbar-brand " href="#">
              TRIPPY
            </a>
          </div>
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
            <ul className="navbar-nav ">
              <Link to="/">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </Link>
              <Link to="hotel/602aa65ce3f82c1c64aebfb5">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Hôtels
                  </a>
                </li>
              </Link>
              <Link to="#">
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Restaurants
                  </a>
                </li>
              </Link>
              <Link to="#">
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Sign Up
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
