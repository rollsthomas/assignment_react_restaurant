import React, { Component } from "react";
import createReactClass from "create-react-class";
import Nav from "./NavbarBasic";
import PropTypes from "prop-types";

/****************************
Create Header Component and insert Navbar from below
*****************************/

var navItems = ["home", "reservations", "menu"];

const Header = createReactClass({
  propTypes: {
    title: PropTypes.array.isRequired
  },
  render() {
    return (
      <header className="text-white" id="home">
        <h1 className="heading-title">{this.props.title}</h1>
        <Nav items={navItems} />
      </header>
    );
  }
});

export default Header;
