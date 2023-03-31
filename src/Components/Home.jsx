import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

export default function Home() {
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
      {/* <!-- Hero head: essential component for Bulma fullheight hero --> */}
      <div id="carousel-hero-head m-0 p-0" class="hero-head"></div>

      {/* <!-- Bulma hero-body --> */}
      <div class="hero-body m-0 p-0">
        <div
          id="home-page-columns"
          class="columns is-tablet is-flex-row-reverse m-0 p-0"
        >
          <div id="carousel-column" class="column is-tablet-half m-0 p-0">
            <div id="carousel-container">
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
          <div id="logo-column" class="column is-tablet-half m-0 p-0">
            <img id="main-logo" src="./logo-1.png" alt="Meal-Mate logo" />
            <h1 id="title">Meal Mate</h1>
            <h2 id="subtitle">Cook with what you have: discover delicious recipes with the ingredients you already have at home. Say goodbye to meal planning headaches and the frustration of not knowing what to do with what's in your fridge. </h2>
            <div id="start-button-container" class="buttons is-centered">
              <NavLink to="/search">
                <button className="button is-primary" id="start">GET STARTED</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero footer: essential component for Bulma fullheight hero --> */}
      <div class="hero-foot"></div>
    </section>
  );
}