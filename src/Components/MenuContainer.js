import React, { Component } from "react";
import createReactClass from "create-react-class";
import MenuItems from "./MenuItems";
import Menu from "./Menu";
import PropTypes from "prop-types";
/****************************
Menu component container
*****************************/

const MenuContainer = createReactClass({
  render() {
    return (
      <section id="menu">
        <h1>Menu</h1>
        <Menu items={MenuItems} />
      </section>
    );
  }
});

export default MenuContainer;
