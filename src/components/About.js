import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "./DashboardLayout";
import img1 from "../assets/images/img1.jpg";
import { Footer } from "../common/Footer";

export const About = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <>
        <section className="home-section">
          <div className="container">
            <div className="home-wrapper">
              <div className="home-content">
                <p>
                  welcome to <h2> E-Commerce Website</h2>
                </p>
                <small>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </small>
                <div>
                  <button
                    type="button"
                    class="btn btn-secondary btn-home"
                    onClick={() => navigate("/products")}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="img-Home">
                <img src={img1} className="img-height" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </DashboardLayout>
  );
};
