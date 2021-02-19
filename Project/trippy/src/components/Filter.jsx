import React, { Component } from "react";
import "../App.css";

class Filter extends Component {
  render() {
    return (
      <div className="container filter">
        <div className="row">
          <div className="col-12 filter-content">
            <div className="btn-group">
              <button
                className="btn btn-light btn-m dropdown-toggle p-2  mb-2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sélectionnez votre destination
              </button>
              <ul className="dropdown-menu">
                <li>France</li>
                <li>Royaume-Uni</li>
                <li>Italie</li>
                <li>Usa</li>
              </ul>
            </div>
            <div className="btn-group">
              <button
                className="btn btn-light btn-m dropdown-toggle p-2  mb-2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sélectionnez votre ville
              </button>
              <ul className="dropdown-menu">
                <li>Paris</li>
                <li>Londre</li>
                <li>Rome</li>
                <li>Nice</li>
                <li>New-York</li>
              </ul>
            </div>
            <div className="btn-group">
              <button
                className="btn btn-light btn-m dropdown-toggle p-2 mb-2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sélectionnez votre hôtel
              </button>
              <ul className="dropdown-menu">
                <li>CitizenM</li>
                <li>Hyatt Regency London</li>
                <li>Best Western Plus Hotel Universo</li>
                <li>Hotel Negresco</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Filter;
