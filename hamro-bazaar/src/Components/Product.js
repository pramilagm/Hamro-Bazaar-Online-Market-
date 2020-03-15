import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-lg-4 my-9">
        <div className="card ">
          <ProductConsumer>
            {val => (
              <div
                className="img-container p-5"
                onClick={() => val.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    val.addTocart(id);
                    val.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      in inCart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="font-italic text-orange mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all ls linear;
    margin: 25px;
    width: 350px;
    height: 380px;
  }

  .card-footer {
    font-size: 1.3rem;
    background: transparent;
    border-top: transparent;
    transition: all ls linear;
    padding: 10px;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--mainOrange);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear !important;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    cursor: pointer;
  }
`;
