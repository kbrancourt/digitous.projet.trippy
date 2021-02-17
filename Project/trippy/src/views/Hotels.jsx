import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import HotelMap from "../components/HotelMap";

class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesHotel: [], //=>api.json
      page: props.match.params.city, //=> valeur de ville ds l'url
      center: 0, // => position du centre de ville
      nbrHotel: 0, // => nb d'hotels trouvés
      tab: [], //=> position des hotels[latitude, longitude]
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3002/api/hotels/city/${this.state.page}`)
    .then((res) => {
      return res.json();
    })
    .then((hotel) => {
      let lat = hotel.center.lat;
      let lon = hotel.center.lon;
      this.setState({
        citiesHotel: hotel,
        center: [lat, lon],
        nbrHotel: hotel.total,
        tab: hotel.results.map((hotel) => {
          return(
            [hotel.location.lat, hotel.location.lon]
          )
        })
      });
      console.log(this.state.citiesHotel)
    })
    .catch((error) => console.error(error));
  }

  render() {
    //if(this.state.citiesHotel >= 1){
      //return (
      //  <h1> Hôtels </h1>
      //  <h2>Voici la liste des hôtels trouvés:</h2> 
      //  <HotelCard hotel={this.state./>
      //)
    //}
    if (this.state.citiesHotel.success) {
      return (
        <>
          <h1>coucou</h1>
          <h2>
            Nous avons trouver{" "}
            <strong style={{ color: "green" }}>{this.state.nbrHotel}</strong>{" "}
            hotels
          </h2>
          <HotelMap  api={this.state.citiesHotel} center={this.state.center} localisations={this.state.tab}></HotelMap>
        </>
      );
    } else {
      return (
        <>
          <h1>Veuillez patienter</h1>
          <HotelMap center={[51.505, -0.09]} localisations={this.state.tab}></HotelMap> 
        </>
      );
    }
  }
}
export default Hotels;
