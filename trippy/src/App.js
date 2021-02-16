import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Hotels from "./views/Hotels";
import HotelsPages from "./views/HotelsPages";
import Error from "./views/Error";
import NavBar from "./components/NavBar";
import CityCard from "./components/CityCard";
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/hotels/:city" component={Hotels}></Route>
          <Route path="/hotels/:id" component={HotelsPages}></Route>
          <Route path="*" component={Error}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
