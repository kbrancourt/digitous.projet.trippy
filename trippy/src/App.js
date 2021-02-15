import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import NavBar from './components/NavBar';

class App extends React.Component{
  render(){
    return (
        <NavBar/>
      );
  }
  
}

export default App;
