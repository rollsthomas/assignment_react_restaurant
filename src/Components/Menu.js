import React, { Component } from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import Images from "./Static";

const Menu = createReactClass({
  protoTypes: {
    items: PropTypes.array.isRequired
  },

  render() {
    const test = this.props.items[0].img;
    console.log("CHICKEN", test);
    return (
      <ul className="col-sm-10">
        <li key={0}>
          <h2>{this.props.items[0].name}</h2>
          <div className="menu-item">
            <img src={Images.chicken_salad} />
            <p>{this.props.items[0].info}</p>
          </div>
        </li>
        <li key={1}>
          <h2>{this.props.items[1].name}</h2>
          <div className="menu-item">
            <img src={Images.rice_pilaf} />
            <p>{this.props.items[1].info}</p>
          </div>
        </li>
        <li key={3}>
          <h2>{this.props.items[3].name}</h2>
          <div className="menu-item">
            <img src={Images.shrimp_rice} />
            <p>{this.props.items[3].info}</p>
          </div>
        </li>
        <li key={4}>
          <h2>{this.props.items[4].name}</h2>
          <div className="menu-item">
            <img src={Images.spaghetti} />
            <p>{this.props.items[4].info}</p>
          </div>
        </li>
        <li key={5}>
          <h2>{this.props.items[5].name}</h2>
          <div className="menu-item">
            <img src={Images.chicken2} />
            <p>{this.props.items[5].info}</p>
          </div>
        </li>
      </ul>
    );
  }
});

export default Menu;
/****************************
 {
          this.props.items.map(
            function(item){
              return(
                
              )
            },
          )
        }
*****************************/
