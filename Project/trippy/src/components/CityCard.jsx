import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import Home from "../views/Home"

class CityCard extends React.Component {

  render() {

    return (
           <Link to={`hotels/${this.props.slug}`} className={this.props.className} >
            <div
              className="card__background"
            >
              <img  src={this.props.source || "http://via.placeholder.com/300x200"} alt=""/>
            </div>
            <div className="card__content">
              <p className="card__category">{this.props.name}</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
    );
  }
}

export default CityCard;
