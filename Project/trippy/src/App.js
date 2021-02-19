import React from "react";
import {BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Hotels from "./views/Hotels";
import HotelsPages from "./views/HotelsPages";
import Error from "./views/Error";
import NavBar from "./components/NavBar";
import CityCard from "./components/CityCard";
import "./App.css";
import Header from "./components/Header"


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <main className="container-fluid">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/hotels/:city" component={Hotels}></Route>
          <Route path="/hotel/:id" component={HotelsPages}></Route>
          <Route path="*" component={Error}></Route>
        </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
