import React, { Component } from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
/****************************
Export Nav component that ouputs navbar with items listed from given props array
*****************************/
const Nav = createReactClass({
  propTypes: {
    items: PropTypes.array.isRequired
  },

  render() {
    return (
      <nav>
        <ul>
          {this.props.items.map(
            function(item, index) {
              return (
                <li className="menu-item" key={index}>
                  <a href={"#" + item}>{item}</a>
                </li>
              );
            }.bind(this)
          )}
        </ul>
      </nav>
    );
  }
});

export default Nav;
