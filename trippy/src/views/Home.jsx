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

  componentDidMount() {
    Api.getHomeData().then((res) => {
      this.setState({
        cities: res,
      });
    });
  }

  render(){
    console.log(this.state.cities)
    return (
      <div>
        <CityCard></CityCard>
      </div>
    )
  }
}

export default Home;
