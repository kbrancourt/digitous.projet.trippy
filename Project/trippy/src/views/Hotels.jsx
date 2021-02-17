import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import HotelMap from "../components/HotelMap"

class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesHotel: [],
      page: this.props.match.params.city || false,
      center:0,
      nbrHotel:0,
      tab:[],
    };
  }


  componentDidMount() {
    let lat = 0;
    let lon = 0;
    fetch(`http://localhost:3002/api/hotels/city/${this.state.page}`)
    .then((response) => {
      return response.json();
    }).then((res) => {
      lat = res.center.lat
      lon = res.center.lon
      this.setState({
        citiesHotel: res,
        center: [lat, lon],
        nbrHotel: res.total,
      });
      this.state.citiesHotel.results.map((hotel) =>{
        this.setState({
          tab : [...this.state.tab,[hotel.location.lat, hotel.location.lon]]
        })
      })
    })
    console.log("je me met en route Hotel")
  }

  render() {
    if (this.state.citiesHotel.success){
      return (
        <>
          <h1>coucou</h1>
          <h2>Nous avons trouver <strong style={{color: "green"}}>{this.state.nbrHotel}</strong> hotels</h2>
          <HotelMap center={this.state.center} np={this.state.tab}></HotelMap>
        </>
      );
    }else{
      return (
      <>
        <h1>Veuillez patienter</h1>
      </>
      )
    }
  }
}
export default Hotels;