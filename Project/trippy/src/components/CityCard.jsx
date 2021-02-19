import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import Home from "../views/Home";

class CityCard extends React.Component {
  render() {
    return (
        <Link to={`hotels/${this.props.slug}`} className={this.props.className}>
          <img
            src={this.props.source || "http://via.placeholder.com/300x200"}
            alt=""
          />
          <div className="card-content">
            <h3 className="">{this.props.name}</h3>
            <p className="card__category">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Curabitur aliquet quam id dui posuere blandit. Seds{" "}
            </p>
            <button>Cliquez !</button>
          </div>
        </Link>
    );
  }
}

export default CityCard;
