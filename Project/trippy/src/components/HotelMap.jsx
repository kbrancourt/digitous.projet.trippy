import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
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
      check:0,
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
        </Map>
      );
    } else if(this.state.pos !== null){
      return (
        <Map
          style={{ height: "60vh" }}
          center={this.state.pos}
          zoom={16}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={this.state.pos}>
            <Popup>
              <h1>pas trouvé</h1>
            </Popup>
          </Marker>
        </Map>
      )
    }else{
      return(
        <h1>Ca marche pas</h1>
      )
    }

    //   <Map style={{height: "60vh"}} center={this.props.center} zoom={13} scrollWheelZoom={false}>
    //     <TileLayer
    //       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     />
    //     {this.state.coord.map((hotelPoint,index)=>{
    //       <HotelMaker adresse={this.state.adresses[index]} prix={this.state.prix[index]} position={hotelPoint}></HotelMaker>
    //     })}
    // </Map>
    // )
  }
}

export default HotelMap;

{
  /* <Map style={{height: "50vh"}} center={this.props.localisations} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <HotelMaker position={this.props.localisations}></HotelMaker>
      </Map> */
}
