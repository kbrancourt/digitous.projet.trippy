import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import StarsRating from "stars-rating";

class HotelCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: 3,
    };
  }
  
  render() {
    return (
      <Link to={`/hotel/${this.props.id}`} className="text-decoration-none text-body">
        <div className="card " style={{ width: "18rem", marginRight: "10px", marginBottom: "10px" }}>
          <img className="card-img-top" src={"http://via.placeholder.com/300x200" || this.props.image} alt="Card image cap"/>
          <div className="card-body ">
            <p className="card-text ">Nom : {this.props.name}</p>
            <p className="card-text">Stars :{(this.props.stars === null && " pas de note") || (
                <StarsRating
                  value={this.props.stars}
                  edit={false}
                  count={5}
                  size={24}
                  color2={"#ffd700"}
                />
              )}
            </p>
          </div>
        </div>
      </Link>
    )
  }
}

export default HotelCard;
