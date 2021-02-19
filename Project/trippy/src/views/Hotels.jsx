import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import HotelMap from "../components/HotelMap";
import HotelCard from "../components/HotelCard";

class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesHotel: [], //=>api.json
      page: props.match.params.city, //=> valeur de ville ds l'url
      center: 0, // => position du centre de ville
      nbrHotel: 0, // => nb d'hotels trouvés
      tab: [], //=> position des hotels[latitude, longitude]
      prix: [], //=> prix des hotels
      adresses: [], //=> adresses des hotels
      nom:[],//=> nom des hotels
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
            return [hotel.location.lat, hotel.location.lon];
          }),
          adresses: hotel.results.map((hotel) => {
            return hotel.address;
          }),
          prix: hotel.results.map((hotel) => {
            return hotel.price;
          }),
          nom: hotel.results.map((hotel) => {
            return hotel.name;
          }),
        });
        console.log(this.state.citiesHotel.results[0].pictures[0])
      })
      .catch((error) => console.error(error));
  }

  render() {
    {}
    if (this.state.citiesHotel.success) {
      return (
        <div className="mb-5 text-center mt-4">
          <h2>
            Nous avons trouvés{" "}
            <strong style={{ color: "green" }}>{this.state.nbrHotel}</strong>{" "}
            hotels
          </h2>
          <div className="my-5">
            <HotelMap
              nom={this.state.nom}
              prix={this.state.prix}
              adresses={this.state.adresses}
              center={this.state.center}
              localisations={this.state.tab}
            ></HotelMap>
          </div>
          <div className="col-12 d-flex flex-wrap justify-content-center gap-2 pb-5">
            {this.state.tab.map((item, index) => (
                <HotelCard
                  id={this.state.citiesHotel.results[index]._id}
                  image={this.state.citiesHotel.results[index].pictures[0]}
                  name={this.state.citiesHotel.results[index].name}
                  stars={this.state.citiesHotel.results[index].stars}
                  nbrHotel={this.state.nbrHotel}
                  key={index}
                ></HotelCard>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <>
          <h1>Veuillez patienter</h1>
        </>
      );
    }
  }
}
export default Hotels;
