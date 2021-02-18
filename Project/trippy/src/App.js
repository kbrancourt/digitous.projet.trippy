import React from "react";
import {BrowserRouter, Switch, Route, Link } from "react-router-dom";
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
        <main className="container-fluid">
          <NavBar></NavBar>
        </main>
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/hotels/:city" component={Hotels}></Route>
          <Route path="/hotel/:id" component={HotelsPages}></Route>
          <Route path="*" component={Error}></Route>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
