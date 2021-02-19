import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "../App.css";
import StarsRating from "stars-rating";
import HotelMap from "../components/HotelMap";
import ImageGallery from "react-image-gallery";
import Caroussel from "../components/Caroussel";

class HotelsPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idPage: props.match.params.id || "602aa65ce3f82c1c64aebfb5",
      hotelInfos: [],
      stars: 0,
      prix: 0,
      name: [],
      commodités: [],
      find: false,
      pos: [],
      images: [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
      ],
      adresse: "",
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3002/api/hotels/${this.state.idPage}`)
      .then((response) => response.json())
      .then((hotel) => {
        this.setState({
          hotelInfos: hotel.result,
          stars: hotel.result.stars,
          prix: hotel.result.price,
          name: hotel.result.name,
          adresse: hotel.result.address,
          commodités: [...hotel.result.commodities],
          find: hotel.success,
          pos: [hotel.result.location.lat, hotel.result.location.lon],
          images: hotel.result.pictures.map((img) => {
            return { original: img, thumbnail: img };
          }),
        });
        // console.log(this.state.commodités.length)
        console.log("imgs", this.state.images);
      });
  }

  render() {
    if (this.state.find && this.state.pos.length >= 1) {
      return (
        <div className=" mt-5">
          <div className="hotelInfo">
            <h1>
              <strong>{this.state.name}</strong>
            </h1>
            <h1>
              {" "}
              {(this.state.stars === null && " pas de note") || (
                <StarsRating
                  className="stars"
                  value={this.state.stars}
                  edit={false}
                  count={5}
                  size={35}
                  color2={"#ffd700"}
                />
              )}
            </h1>
            <h1>
              <strong>{this.state.prix} €</strong>
            </h1>
          </div>
          <div>
            <HotelMap
              price={this.state.prix}
              name={this.state.name}
              street={this.state.adresse}
              pos={this.state.pos}
            ></HotelMap>
          </div>

          <div className="container mt-5">
            <h1 className="fw-bolder">Services</h1>
            <div className="icons">
              {this.state.commodités.length > 0 &&
                this.state.commodités.map((commodities, index) => {
                  switch (commodities) {
                    case "wifi":
                      return (
                        <div className="icon">
                          <span className="material-icons">wifi</span>
                          <br />
                          <p>Wifi gratuit</p>
                        </div>
                      );
                    case "swimming pool":
                      return (
                        <div className="icon">
                          <span className="material-icons">pool</span>
                          <br />
                          <p>Piscine</p>
                        </div>
                      );
                    case "breakfast included":
                      return (
                        <div className="icon">
                          <span className="material-icons">free_breakfast</span>
                          <br />
                          <p>Petit déjeuner gratuit</p>
                        </div>
                      );
                    case "animals":
                      return (
                        <div className="icon">
                          <span className="material-icons">pets</span>
                          <br />
                          <p>Animal(aux)</p>
                        </div>
                      );
                    case "dry cleaning":
                      return (
                        <div className="icon">
                          <span className="material-icons">dry_cleaning</span>
                          <br />
                          <p>Pressing</p>
                        </div>
                      );
                    case "family":
                      return (
                        <div className="icon">
                          <span className="material-icons">
                            family_restroom
                          </span>
                          <br />
                          <p>Chambres familiales</p>
                        </div>
                      );
                    case "bar":
                      return (
                        <div className="icon">
                          <span className="material-icons">local_bar</span>
                          <br />
                          <p>Bar</p>
                        </div>
                      );
                    case "disabled access":
                      return (
                        <div className="icon">
                          <span className="material-icons">accessible</span>
                          <br />
                          <p>Accessible aux handicapés</p>
                        </div>
                      );
                    case "non smoking":
                      return (
                        <div className="icon">
                          <span className="material-icons">smoke_free</span>
                          <br />
                          <p> Non fumeur</p>
                        </div>
                      );
                    case "multilingual staff":
                      return (
                        <div className="icon">
                          <span className="material-icons">language</span>
                          <br />
                          <p>Employés multilingues</p>
                        </div>
                      );
                    case "gym":
                      return (
                        <div className="icon">
                          <span className="material-icons">fitness_center</span>
                          <br />
                          <p>Salle de sport</p>
                        </div>
                      );
                    case "restaurant":
                      return (
                        <div className="icon">
                          <span className="material-icons">restaurant</span>
                          <br />
                          <p>Restaurant</p>
                        </div>
                      );
                    case "rom service":
                      return (
                        <div className="icon">
                          <span className="material-icons">room_service</span>
                          <br />
                          <p>Room service</p>
                        </div>
                      );
                    case "spa":
                      return (
                        <div className="icon">
                          <span className="material-icons">spa</span>
                          <br />
                          <p>spa</p>
                        </div>
                      );
                    case "shuttle":
                      return (
                        <div className="icon">
                          <span className="material-icons">
                            airport_shuttle
                          </span>
                          <br />
                          <p>Navette aéroportuaire</p>
                        </div>
                      );
                    case "air conditioning":
                      return (
                        <div className="icon">
                          <span className="material-icons">air</span>
                          <br />
                          <p>Air conditionné</p>
                        </div>
                      );
                    case "minibar":
                      return (
                        <div className="icon">
                          <span className="material-icons">coffee_maker</span>
                          <br />
                          <p> Minibar</p>
                        </div>
                      );
                    default:
                  }
                })}
            </div>
          </div>
          <div
            id="carouselExampleControls"
            className="carousel slide carou"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://media.onomohotel.com/images/cache/gd2/799x800ke/0/05/580-imagetxmmip.jpg"
                  className="d-block w-80"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://media.onomohotel.com/images/cache/gd2/799x800ke/0/05/580-imagetxmmip.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://media.onomohotel.com/images/cache/gd2/799x800ke/0/05/580-imagetxmmip.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      );
    } else {
      return <h1>Veuillez patientez</h1>;
    }
  }
}

export default HotelsPages;
