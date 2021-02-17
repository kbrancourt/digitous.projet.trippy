import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../App.css';


class HotelMaker extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  
  render(){
        return (
      <Marker position={this.props.position}>
        <Popup>
          <h1>{this.props.nom}</h1>
          <p>{this.props.adresses}</p>
          <p>{this.props.prix}€</p>
        </Popup>
      </Marker>
      );
  }
  
}

export default HotelMaker;
