import React from "react";
import NavBar from "./NavBar";
import "../App.css";
import Filter from "./Filter";

class Header extends React.Component {
  
  render() {
    return (
      <header>
        <NavBar></NavBar>
        <div className="row accueil-title">
          <div className="col-xs-11 col-sm-7">
            <h1>Bienvenue</h1>
            <div className="accueil-title-contenu">
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque, auctor sit amet
                aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam
                id dui posuere{" "}
              </p>
              <button>Cliquez</button>
            </div>
          </div>
        </div>
        <Filter></Filter>
      </header>

    );
  }
}

export default Header;
