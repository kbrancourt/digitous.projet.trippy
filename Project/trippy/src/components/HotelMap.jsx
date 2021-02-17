import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import '../App.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import HotelMaker from './HotelMaker';

class HotelMap extends React.Component{
  constructor(props){
    super(props);
    this.state={
      coord:[], //=> coordonnées [latitude, longitude]
      citiesHotel: [] ,
    }
  }


  componentDidMount(){
    this.setState({
      coord:[...this.props.localisations],
      citiesHotel: [...this.props.api]
    })
  }

  render(){
    if(this.state.coord.length > 1){
      return (
      <Map style={{height: "60vh"}} center={this.props.center} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.state.coord.map((hotelPoint)=>{
          return(
            <HotelMaker api={this.state.citiesHotel}  position={hotelPoint}></HotelMaker>
          )
        })}
    </Map>
      );
    }else{
      return(
        <h1>Veuillez patienter</h1>
      )
    }
  }
  
}

export default HotelMap;
