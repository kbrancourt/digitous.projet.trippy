import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import HotelMap from "../components/HotelMap";

class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesHotel: [],
      page: props.match.params.city,
      center: 0,
      nbrHotel: 0,
      tab: [],
    };
    console.log("state");
  }

  componentDidMount() {
    console.log("didMount");
    this.tkt()
  }

  tkt = () => {
    fetch(`http://localhost:3002/api/hotels/city/${this.state.page}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((hotel) => {
        console.log(hotel);
        let lat = hotel.center.lat;
        let lon = hotel.center.lon;
        this.setState({
          citiesHotel: hotel,
          center: [lat, lon],
          nbrHotel: hotel.total,
        });
      })
      .then(() => {
        this.state.citiesHotel.results.map((hotel) => {
          this.setState({
            tab: [...this.state.tab, [hotel.location.lat, hotel.location.lon]],
          });
        });
      })
      .catch((error) => console.error(error));
  };

  render() {
    {
      console.log("render");
    }
    if (this.state.citiesHotel.success) {
      return (
        <>
          <h1>coucou</h1>
          <h2>
            Nous avons trouver{" "}
            <strong style={{ color: "green" }}>{this.state.nbrHotel}</strong>{" "}
            hotels
          </h2>
          <HotelMap center={this.state.center} np={this.state.tab}></HotelMap>
        </>
      );
    } else {
      return (
        <>
          <h1>Veuillez patienter</h1>
          <HotelMap center={[51.505, -0.09]} np={this.state.tab}></HotelMap>
        </>
      );
    }
  }
}
export default Hotels;
