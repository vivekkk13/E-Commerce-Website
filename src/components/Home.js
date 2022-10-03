import React from "react";
import { DashboardLayout } from "./DashboardLayout";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <>
        <section className="home-section">
          <div className="container">
            <div className="home-wrapper">
              <div className="home-content">
                <p>
                  welcome to <h3> Store</h3>
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

        <section className="featues">
          <div className="container">
            <div className="feature-services">
              <div className="feature-heading">
                <p>check Now</p>
                <h4>Our Feature Services</h4>
              </div>
              <div className="feature-content">
                <div className="card-iphone">
                  <div className="cards-space">
                    <img src={img2} width="100%" className="img-iphone" />
                    <div className="card-footer">
                      <small>iphone-x</small>
                      <small>$2300</small>
                    </div>
                  </div>
                </div>
                <div className="card-iphone">
                  <div className="cards-space">
                    <img src={img3} width="100%" />
                    <div className="card-footer">
                      <small>Samsung</small>
                      <small>$2000</small>
                    </div>
                  </div>
                </div>
                <div className="card-iphone">
                  <div className="cards-space">
                    <img src={img4} width="100%" />
                    <div className="card-footer">
                      <small>Apple Watch</small>
                      <small>$700</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </DashboardLayout>
  );
};

export default Home;
