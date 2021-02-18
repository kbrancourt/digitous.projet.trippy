import React from 'react';
import {BrowserRouter, Switch, Route, Link, useParams} from 'react-router-dom';
import '../App.css';
import StarsRating from "stars-rating";
import HotelMap from "../components/HotelMap"
import ImageGallery from 'react-image-gallery';


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
      images:[],
      adresse:"",
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
        adresse: hotel.result.address,
        commodités: [...hotel.result.commodities],
        find: hotel.success,
        pos: [hotel.result.location.lat, hotel.result.location.lon],
        // images : hotel.result.pictures
      })
      console.log(this.state.commodités.length)
      // console.log("imgs",this.state.images)
    })
  }

  test=() =>{
    let tkt = [];
    tkt = this.state.images.map((img) => {
      return [{original:img},{thumbnail:"http://via.placeholder.com/300x200"}]
    })
    this.setState({
      images: tkt
    })
    console.log("tkt",tkt)
  }

  render(){
    if(this.state.find && this.state.pos.length >= 1){
      return (
        <div className="p-5">
          <h1>prix : <strong style={{color: "#261758"}}>{this.state.prix} €</strong></h1>
          <h1>name : <strong style={{color: "#261758"}}>{this.state.name}</strong></h1>
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
                <HotelMap price={this.state.prix} name ={this.state.name} street={this.state.adresse} pos={this.state.pos}></HotelMap>
              </div>
              <div>
                <ImageGallery items={this.state.images} />
              </div>
              <div>
              {this.state.commodités.length > 0 &&
                this.state.commodités.map((commodities, index) => {
                  switch (commodities){
                    case "wifi": return <span class="material-icons"> {commodities}</span>;
                    case "swimming pool" : return <span class="material-icons">{commodities}</span>;
                    case "breakfast included" : return <span class="material-icons">{commodities}</span>;
                    case "animals" : return<span class="material-icons">{commodities}</span>;
                    case "dry cleaning" : return <span class="material-icons">{commodities}</span>;
                    case "conditioning" : return <span class="material-icons">{commodities}</span>
                    case " family" : return<span class="material-icons">family_restroom{commodities}</span>;
                    case " bar" : return<span class="material-icons">bar{commodities}</span>;
                    case "disabled access " : return<span class="material-icons">{commodities}</span>;
                    case "non smoking" : return<span class="material-icons">{commodities}</span>;
                    case "multilingual staff" : return<span class="material-icons">{commodities}</span>;
                    case "dry cleaning" : return<span class="material-icons">{commodities}</span>;
                    case "disabled access" : return<span class="material-icons">{commodities}</span>;
                    case "gym" : return<span class="material-icons">{commodities}</span>;
                    case "restaurant" : return<span class="material-icons">{commodities}</span>;
                    case "rom service" : return<span class="material-icons">{commodities}</span>;
                    case "spa" : return<span class="material-icons">{commodities}</span>;
                    case "conciergerie" : return<span class="material-icons">{commodities}</span>;
                    case "shuttle" : return<span class="material-icons">{commodities}</span>;
                    case "breakfast included" : return<span class="material-icons">{commodities}</span>;
                    case "air conditioning" : return<span class="material-icons">{commodities}</span>;
                    case "minibar" : return<span class="material-icons">{commodities}</span>;
                   default:
                    
                    
                }
                })}
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

