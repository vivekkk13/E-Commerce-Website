import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand nav-heading ">
            <srong>E</srong>-Commerce
          </a>

          <ul class="navbar-nav  mb-2 mb-lg-0 ml-auto">
            <li class="nav-item ">
              <a class="nav-link active" onClick={() => navigate("/Home")}>
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" onClick={() => navigate("/About")}>
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" onClick={() => navigate("/Products")}>
                Products
              </a>
            </li>
            <li class="nav-item">
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
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
          </ul>
        </div>
      </nav>
    </>
  );
};
