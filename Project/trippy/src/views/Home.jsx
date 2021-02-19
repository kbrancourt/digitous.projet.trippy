import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import CityCard from "../components/CityCard";
import {getHomeData, config} from "../utils/Api";

class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }

  componentDidMount(){
    getHomeData().then((res) => {
      this.setState({
        cities: res,
      });
    });
}
  
  render(){
    return(
           <div className="container citiesCards">
              <div className="card-grid">
                {this.state.cities.map((ville, index) => {
                return(
                  <CityCard className={`card img${index+1}`} name={ville.name} source={`${config.host}${ville.source}`} slug={ville.slug}></CityCard>
                )
              })}
            </div>
           </div>
    )
  }
}

export default Home;
