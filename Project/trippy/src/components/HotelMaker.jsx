import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../App.css';


class HotelMaker extends React.Component{
  constructor(props){
    super(props);
    this.state={
      pose:[...this.props.position],
      citiesHotel:[...this.props.api],
    }
  }

  
  render(){
        return (
      <Marker position={this.state.pose}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
          <>
            <p>coucou</p>
          </>
        </Popup>
      </Marker>
      );
  }
  
}

export default HotelMaker;
