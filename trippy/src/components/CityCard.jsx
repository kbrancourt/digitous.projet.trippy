import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import '../App.css';

class CityCard extends React.Component{
  const = this.props

  render(){
    return (
        <div>
          {this.state.cities.map((villes) => {
          return( 
            <div>
              <h1>{villes.name} {villes.slug}</h1>
              <img src={`http://localhost:3002${villes.source}`} alt="tkt"/>
            </div>
          )
      })}
        </div>
      );
  }
  
}

export default CityCard;
