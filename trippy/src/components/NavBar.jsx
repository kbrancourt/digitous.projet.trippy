import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

class NavBar extends React.Component{
  render(){
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid">
    <a className="navbar-brand" href="#">Trippy KHS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Hôtels</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Hôtels Page</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      );
  }
  
}

export default NavBar;
