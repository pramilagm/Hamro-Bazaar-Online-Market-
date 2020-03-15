import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import styled from "styled-components";
const Details = () => {
  return (
    <ProductConsumer>
      {value => {
        const {
          id,
          company,
          img,
          price,
          title,
          info,
          inCart
        } = value.detailProduct;
        return (
          <div className="container py-5">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center">
                <h1>{title}</h1>
              </div>

              {/* title */}
              {/* product info */}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} alt="product" className="img-fluid" />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>Model:{title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by: <span className="text-uppercase">{company}</span>
                </h4>
                <h3 className="text-orange mt-3 mb-2">
                  <strong>
                    price : <span>$</span>
                    {price}
                  </strong>
                </h3>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product
                </p>
                <p className="text-muted lead">{info}</p>
                {/* buttons */}
                <div>
                  <Link to="/">
                    <ButtonContainer className="mr-2">
                      back to products
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addTocart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "inCart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;
