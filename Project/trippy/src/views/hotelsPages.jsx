import React from 'react';
import {BrowserRouter, Switch, Route, Link, useParams} from 'react-router-dom';
import '../App.css';
import StarsRating from "stars-rating";
import HotelMap from "../components/HotelMap"


class HotelsPages extends React.Component{
  constructor(props){
    super(props);
    this.state={
      idPage: props.match.params.id || "602aa65ce3f82c1c64aebfb5",
      hotelInfos:[],
      stars:0,
      prix:0,
      name:[],
      commodités:[],
      find:false,
      pos:[],
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3002/api/hotels/${this.state.idPage}`)
    .then((response) => response.json())
    .then((hotel) => {
      this.setState({
        hotelInfos : hotel.result,
        stars: hotel.result.stars,
        prix: hotel.result.price,
        name: hotel.result.name,
        commodités: [...hotel.result.commodities],
        find: hotel.success,
        pos: [hotel.result.location.lat, hotel.result.location.lon],
      })
      console.log(this.state.hotelInfos)
      console.log(this.state.pos)
    })
  }

  render(){
    console.log('pos',this.state.hotelInfos)
    if(this.state.find && this.state.pos.length >= 1){
      return (
        <div className="p-5">
          <h1>id : <strong style={{color: "#261758"}}>{this.state.idPage}</strong></h1>
          <h1>prix : <strong style={{color: "#261758"}}>{this.state.prix} €</strong></h1>
          <h1>name : <strong style={{color: "#261758"}}>{this.state.name}</strong></h1>
          <h1>commodités : <strong style={{color: "#261758"}}>{this.state.commodités}</strong></h1>
          <h1>stars : {this.state.stars === null && " pas de note" || 
                <StarsRating
                  value={this.state.stars}
                  edit={false}
                  count={5}
                  size={40}
                  color2={"#ffd700"}
                />
              }</h1>
              <div>
                <HotelMap pos={this.state.pos}></HotelMap>
              </div>
        </div>
      );
    }else{
      return(
        <h1>Veuillez patientez</h1>
      )
    }
  }
  
}

export default HotelsPages;
