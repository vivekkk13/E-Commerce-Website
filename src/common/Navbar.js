import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ProductlistContext } from "../App";

export const Navbar = () => {
  const navigate = useNavigate();
  const { productlist, setproductList, cartlength, setCartLength } =
    useContext(ProductlistContext);
  const handleHome = () => {
    navigate("/home");
  };
  const handleAbout = () => {
    navigate("/about");
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand nav-heading ">
            <srong>E</srong>-Commerce
          </a>

          <ul class="navbar-nav  mb-2 mb-lg-0 ml-auto position-relative">
            <li class="nav-item link_hover">
              <a class="nav-link active" onClick={handleHome}>
                Home
              </a>
            </li>
            <li class="nav-item link_hover">
              <a class="nav-link active" onClick={handleAbout}>
                About
              </a>
            </li>
            <li class="nav-item link_hover">
              <a class="nav-link active" onClick={() => navigate("/Products")}>
                Products
              </a>
            </li>
            <li class="nav-item link_hover">
              <a class="nav-link active" onClick={() => navigate("/Contact")}>
                Contact
              </a>
            </li>
            <button
              className="btn btn-secondary"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log In
            </button>
            <span className="cart-icon">
              <i
                className="fa fa-shopping-cart cart_hover"
                aria-hidden="true"
                onClick={() => {
                  navigate("/cart");
                }}
              ></i>
              <small className="add_cart"> {cartlength.length}</small>
            </span>
          </ul>
        </div>
      </nav>
    </>
  );
};
