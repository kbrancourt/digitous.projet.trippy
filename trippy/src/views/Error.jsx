import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import '../App.css';

class Error extends React.Component{
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  render(){
    return (
        <h1>Error</h1>
      );
  }
  
}

export default Error;
