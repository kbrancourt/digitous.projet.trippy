import React from 'react';
import {BrowserRouter, Switch, Route, Link, useParams} from 'react-router-dom';
import '../App.css';
import StarsRating from "stars-rating";
import HotelMap from "../components/HotelMap"
import ImageGallery from 'react-image-gallery';
import Caroussel from '../components/Caroussel';


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
      images:[
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        }],
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
        images : hotel.result.pictures.map((img) => {
          return {original: img, thumbnail:img}
        })
      })
      // console.log(this.state.commodités.length)
      console.log("imgs",this.state.images)
    })
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
              {this.state.commodités.length > 0 &&
                this.state.commodités.map((commodities, index) => {
                  switch (commodities){
                    case "wifi": return <p><span className="material-icons">wifi</span> Wifi gratuit</p>;
                    case "swimming pool" : return <p><span className="material-icons">pool</span> Piscine</p>;
                    case "breakfast included" : return <p><span className="material-icons">free_breakfast</span> Petit déjeuner gratuit</p>;
                    case "animals" : return<p><span className="material-icons">pets</span> Animal(aux)</p>;
                    case "dry cleaning" : return <p><span className="material-icons">dry_cleaning</span> Nettoyage à sec</p>;
                    case "family" : return <p><span className="material-icons">family_restroom</span> Famille nombreuse</p>;
                    case "bar" : return <p><span className="material-icons">local_bar</span> Bar</p>
                    case "disabled access" : return<p><span className="material-icons">accessible</span> Accessible aux handicapés</p>;
                    case "non smoking" : return<p><span className="material-icons">smoke_free</span> Non fumeur</p>;
                    case "multilingual staff" : return<p><span className="material-icons">language</span> Employé multilingue</p>;
                    case "gym" : return<p><span className="material-icons">fitness_center</span> Salle de sport</p>;
                    case "restaurant" : return<p><span className="material-icons">restaurant</span> Restaurant</p>;
                    case "rom service" : return<p><span className="material-icons">room_service</span> Room service</p>;
                    case "spa" : return<p><span className="material-icons">spa</span> spa</p>;
                    case "shuttle" : return<p><span className="material-icons">airport_shuttle</span> Navette</p>;
                    case "air conditioning" : return<p><span className="material-icons">air</span> Air conditionné</p>;
                    case "minibar" : return<p><span className="material-icons">coffee_maker</span> Minibar</p>;
                   default:
                }
                })}
              </div>
              {/* <div>
                <Caroussel img={this.state.images}></Caroussel>
              </div> */}
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

