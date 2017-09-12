import React, { Component } from "react";
import createReactClass from "create-react-class";
import Nav from "./NavbarBasic";
import PropTypes from "prop-types";

/****************************
Create Header Component and insert Navbar from below
*****************************/

var navItems = ["home", "reservations", "menu"];

const Reservations = createReactClass({
  propTypes: {
    title: PropTypes.string.isRequired
  },

  render() {
    return (
      <section className="reservations" id="reservations">
        <form className="row justify-content-center" action="" method="">
          <legend>Reservations</legend>
          <div className="form-group  col-sm-12 col-md-4">
            <div className="reservation-personal-input">
              <label className="col-form-label" htmlFor="name">
                Name:
              </label>
              <input className="form-control" type="text" name="name" />
              <br />
              <label className="col-form-label" htmlFor="email">
                Email:
              </label>
              <input className="form-control" type="email" />
              <br />
              <label className="col-form-label" htmlFor="number">
                Phone:
              </label>
              <input
                className="form-control"
                type="tel"
                placeholder="1-(555)-555-5555"
              />
            </div>
          </div>
          <div className="form-group  col-sm-12 col-md-4">
            <div className="reservation-time-input">
              <label className="col-form-label" htmlFor="date">
                Date:
              </label>
              <input className="form-control" type="date" name="date" />
              <br />
              <label className="col-form-label" htmlFor="time">
                Time:
              </label>
              <input className="form-control" type="time" name="time" />
              <br />
              <label className="col-form-label" htmlFor="party">
                Number in party:
              </label>
              <input className="form-control" type="number" name="party" />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary col-sm-6"
            id="reserve-btn"
          >
            Make Reservation
          </button>
        </form>
      </section>
    );
  }
});

export default Reservations;
