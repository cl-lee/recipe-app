import React, { useState, useEffect } from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import { NavLink } from "react-router-dom";
import "./Home.css";

/* div: className="container is-fluid" */
/* id="home-page": className="is-centered " */
function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeIndex, images.length]);

  return (
    <section class="hero is-fullheight m-0 p-0">
      {/* <!-- Hero head: essential component for fullheight hero --> */}
      <div id="carousel-hero-head m-0 p-0" class="hero-head"></div>

      {/* <!-- Hero content: will be in the middle --> */}
      <div class="hero-body m-0 p-0">
        <div id="home-page-columns" class="columns is-tablet is-flex-row-reverse m-0 p-0">
          <div id="carousel" class="column is-tablet-half m-0 p-0">
            <div className="carousel">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`carousel ${index}`}
                  className={`carousel-image ${
                    index === activeIndex ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <div id="home-page-panel" class="column is-tablet-half m-0 p-0">
            <img id="logo" src="./logo-1.png" alt="Meal-Mate logo" />
            <div class="buttons">
              <NavLink to="/search">
                <button id="start-button" className="button is-primary">
                  Get Started
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero footer: essential component for fullheight hero --> */}
      <div class="hero-foot"></div>
    </section>
  );
}

export default Home;
