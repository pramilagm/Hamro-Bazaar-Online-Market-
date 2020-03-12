import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import "../css/Navbar.css";
import { ButtonContainer } from "./Button";

const Navbar = props => {
  {
    return (
      <Navwrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
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
          <ButtonContainer>
            <span>
              <i className="fa fa-cart-plus" />
            </span>
            My cart
          </ButtonContainer>
        </Link>
      </Navwrapper>
    );
  }
};
const Navwrapper = styled.nav`
  .nav-link {
    color: #ffffff;
    font-size: 1.9rem;
    text-transform: capitalize;
  }
  background: #db7093;
  height: 80px;
  .navbar-brand {
    height: 85px;
    width: 105px;
  }
}
`;

export default Navbar;
