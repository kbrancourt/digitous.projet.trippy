import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../App.css';

class HotelMaker extends React.Component{
  constructor(props){
    super(props);
    this.state={
      pppp:[]
    }
  }

  componentDidMount(){
    this.setState({
      pppp:[...this.props.position]
    })
    console.log("je me met en route HotelMaker")
  }

  render(){
    
    console.log(this.state.pppp)
    return (
      <Marker position={this.props.position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      );
  }
  
}

export default HotelMaker;
