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
        {/* <div className="card " style={{ width: "18rem", marginRight: "10px", marginBottom: "10px" }}>
          <img className="card-img-top" onError={(ev) => {ev.target.src = "/unnamed.jpg"}} src={this.props.image} alt="Card image cap"/>
          <div className="card-body ">
            <p className="card-text ">Nom : {this.props.name}</p>
            <span className="card-text">{(this.props.stars === null && <StarsRating
                  value={0}
                  edit={false}
                  count={5}
                  size={24}
                  color2={"#ffd700"}
                />) || (
                <StarsRating
                  value={this.props.stars}
                  edit={false}
                  count={5}
                  size={24}
                  color2={"#ffd700"}
                />
              )}
            </span>
          </div>
        </div> */}
        <div className="hcard">
          <img className="hcard-img" onError={(ev) => {ev.target.src = "https://media.onomohotel.com/images/cache/gd2/799x800ke/0/05/580-imagetxmmip.jpg"}} src={this.props.image} alt="Card image cap"/>
          <div className="hcard-content">
            <h5>{this.props.name}</h5>
            <div className="">
            <span >{(this.props.stars === null && <StarsRating
                  value={0}
                  edit={false}
                  count={5}
                  size={24}
                  color2={"#ffd700"}
                />) || (
                <StarsRating
                  value={this.props.stars}
                  edit={false}
                  count={5}
                  size={24}
                  color2={"#ffd700"}
                />
              )}
            </span>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default HotelCard;
