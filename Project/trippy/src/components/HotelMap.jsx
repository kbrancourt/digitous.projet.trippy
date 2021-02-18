import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import { Map, TileLayer, Marker, Popup, Circle, Tooltip } from "react-leaflet";
import HotelMaker from "./HotelMaker";

class HotelMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: this.props.pos,
      coord: this.props.localisations, //=> coordonnées [latitude, longitude]
      adresses: [],
      prix: [],
      nom: [],
      check: 0,
      bounds: [
        [51.49, -0.08],
        [51.5, -0.06],
      ],
    };
  }

  componentDidMount() {
    this.setState({
      nom: this.props.nom,
      prix: this.props.prix,
      adresses: this.props.adresses,
    });
  }

  render() {
    if (this.state.coord != null) {
      return (
        <Map
          style={{ height: "60vh" }}
          center={this.props.center}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.coord.map((item, index) => (
            <HotelMaker
            position={item}
            adresses={this.state.adresses[index]}
            prix={this.state.prix[index]}
            nom={this.state.nom[index]}
            ></HotelMaker>
            ))}
            <Circle center={this.props.center} fillColor="blue" radius={6000} />
        </Map>
      );
    } else if (this.state.pos !== null) {
      return (
        <Map
          style={{ height: "60vh" }}
          center={this.state.pos}
          zoom={17}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={this.state.pos}>
            {/* <Popup permanent>
              <h1>pas trouvé</h1>
            </Popup> */}
            <Tooltip direction="top" offset={[-16,27]} opacity={1} permanent>
              <div className="text-center">
                <h5>{this.props.name}</h5>
                <h1>{this.props.price} €</h1>
                <p>{this.props.street}</p>
              </div>
            </Tooltip>
            <Circle center={this.state.pos} fillColor="green" radius={20} />
          </Marker>
        </Map>
      );
    } else {
      return <h1>Ca marche pas</h1>;
    }
  }
}

export default HotelMap;
