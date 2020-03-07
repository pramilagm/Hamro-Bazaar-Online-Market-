import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <Link to="/">
          <img
            src="https://cdn0.iconfinder.com/data/icons/londomak-round/64/Landmark_Round_X_pagoda_china_buddha_landmark_building_temple-128.png"
            alt="navbar brand"
            className="navbar-brand"
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button>
            <i className="fa fa-cart-plus" />
            My cart
          </button>
        </Link>
      </nav>
    );
  }
};
export default Navbar;
