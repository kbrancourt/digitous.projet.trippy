import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import Home from "../views/Home"

class CityCard extends React.Component {

  render() {

    return (
      <BrowserRouter>
      {/* <Switch>
        <Route path="/hotels/{this.state.name}">

        </Route>
      </Switch> */}
      {/* <>
         <h1>{this.props.name}</h1>
         <p>{this.props.slug}</p>
         <img src={`"${this.props.source}"`} alt=""/>
      </> */}


           <a className={this.props.className} href="/">
            <div
              className="card__background"
            >
              <img src={this.props.source} alt=""/>
            </div>
            <div className="card__content">
              <p className="card__category">{this.props.name}</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </a>
      </BrowserRouter>
     
    );
  }
}

export default CityCard;
