import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import CityCard from "../components/CityCard";
import Api from "../utils/Api";

class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }

componentDidMount(){
    Api.getHomeData().then((res) => {
      this.setState({
        cities: res,
      });
    console.log(res)
    console.log(this.state.cities[1].name)
    });
}

  render(){
    return (
      <section className="hero-section my-5">
        <div className="card-grid">
        <CityCard className="card img1" ></CityCard>
        <CityCard className="card img2" ></CityCard>
        <CityCard className="card img3" ></CityCard>
        <CityCard className="card img4" ></CityCard>
        <CityCard className="card img5" ></CityCard>
      </div>
      </section>
    )
  }
}

export default Home;
