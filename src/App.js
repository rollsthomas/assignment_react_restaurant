import React, { Component } from "react";
import { Navbar, Jumbotron, Button, Display } from "react-bootstrap";
import "./css/main.css";
import Header from "./Components/NavbarBasicContainer";
import Reservations from "./Components/ReservationsContainer";
import Menu from "./Components/MenuContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="heading-container">
          <Header title="We Sell Food" />
        </div>
        <Reservations />
        <Menu />
      </div>
    );
  }
}

export default App;
