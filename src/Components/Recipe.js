import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import "./styles/Recipe.css";
import { Link } from "react-router-dom";
import imageOne from "./assets/dish.png";
import imageTwo from "./assets/groceries.png";

export default function Recipe() {
  const [hits, setHits] = useState([]);

  // Run fetch request on mount
  useEffect(() => {
    // retrieve query terms from localstorage
    //const ingredientsList = 'eggs, bacon, potato, avocado, beans';
    const ingredientsList = JSON.parse(localStorage.getItem("test")).toString();
    // replace spacing and commas in ingredientsList with %20 and %2C respectively
    const searchQueryComma = ingredientsList.replaceAll(",", "%2C");
    const searchQuerySpace = searchQueryComma.replaceAll(" ", "%20");
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuerySpace}&app_id=75b02161&app_key=753511efadcc7174b03a8b7232bc5bc1`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setHits(json.hits);
      });
  }, []);

  return (
    <section class="hero is-fullheight m-0 p-0">
      {/* <!-- Hero head: essential component for Bulma fullheight hero --> */}
      <div id="carousel-hero-head m-0 p-0" class="hero-head">
        <Navbar />
      </div>

      {/* <!-- Bulma hero-body --> */}
      <div class="hero-body m-0 p-0">
        <div id="recipe-results">
          {/* Page title */}
          <h1 id="recipe-page-title">What you can make</h1>

          {/* decorative image one */}
          <img
            id="decorative-image-one"
            src={imageOne}
            alt="A healthy salad dish"
          />
          {/* decorative image two */}
          <img
            id="decorative-image-two"
            src={imageTwo}
            alt="Fresh grocery items"
          />

          {/* Display recipes here */}
          {/* <!--~First row of recipe cards~--> */}
          <div className="columns is-desktop mx-5">
            {/* <!-- Spacing --> */}
            <div className="column is-0-mobile is-1 p-0"></div>
            {/* <!-- PLACEHOLDER CARD, TO BE REPLACED WITH ACTUAL RECIPE CARD --> */}
            {hits.slice(0, 2).map((item, index) => (
              <div
                className="column is-4-desktop m-2 p-5"
                key={index + "-recipe"}
              >
                <div className="card" id="recipe-card">
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-128x128">
                          <img
                            src={item.recipe.image}
                            alt={item.recipe.label}
                            id="recipe-image-box"
                            loading="lazy"
                          />
                        </figure>
                      </div>
                      <div className="media-content is-hidden-mobile">
                        <p className="title is-5 has-text-white">
                          {item.recipe.label}
                        </p>
                        <ul>
                          {item.recipe.ingredientLines.map(
                            (ingredient, index) => (
                              <li ley={index + ingredient}>{ingredient}</li>
                            )
                          )}
                        </ul>
                        <p className="is-size-7 is-size-5-fullhd">
                          <a
                            href={item.recipe.shareAs}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            @{item.recipe.source}
                          </a>
                        </p>
                      </div>
                    </div>
                    {/* recipe card layout on smaller screen sizes */}
                    <div className="content is-hidden-tablet">
                      <p className="title is-5 has-text-white">
                        {item.recipe.label}
                      </p>
                      <ul>
                        {item.recipe.ingredientLines.map(
                          (ingredient, index) => (
                            <li ley={index + ingredient}>{ingredient}</li>
                          )
                        )}
                      </ul>
                      <p className="is-size-7 is-size-5-fullhd">
                        <a
                          href={item.recipe.shareAs}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @{item.recipe.source}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <!-- Spacing --> */}
            <div className="column is-0-mobile is-3 p-0"></div>
          </div>

          {/* <!--~Second row of recipe cards~--> */}
          <div className="columns is-desktop mx-5">
            {/* <!-- Spacing --> */}
            <div className="column is-0-mobile is-3 p-0"></div>

            {/* <!-- PLACEHOLDER CARD, TO BE REPLACED WITH ACTUAL RECIPE CARD --> */}
            {hits.slice(2, 4).map((item, index) => (
              <div
                className="column is-4-desktop m-2 p-5"
                key={index + "-recipe"}
              >
                <div className="card" id="recipe-card">
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-128x128">
                          <img
                            src={item.recipe.image}
                            alt={item.recipe.label}
                            id="recipe-image-box"
                            loading="lazy"
                          />
                        </figure>
                      </div>
                      <div className="media-content is-hidden-mobile">
                        <p className="title is-5 has-text-white">
                          {item.recipe.label}
                        </p>
                        <ul>
                          {item.recipe.ingredientLines.map(
                            (ingredient, index) => (
                              <li ley={index + ingredient}>{ingredient}</li>
                            )
                          )}
                        </ul>
                        <p className="is-size-7 is-size-5-fullhd">
                          <a
                            href={item.recipe.shareAs}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            @{item.recipe.source}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="content is-hidden-tablet">
                      <p className="title is-5 has-text-white">
                        {item.recipe.label}
                      </p>
                      <ul>
                        {item.recipe.ingredientLines.map(
                          (ingredient, index) => (
                            <li ley={index + ingredient}>{ingredient}</li>
                          )
                        )}
                      </ul>
                      <p className="is-size-7 is-size-5-fullhd">
                        <a
                          href={item.recipe.shareAs}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @{item.recipe.source}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <!-- Spacing --> */}
            <div className="column is-0-mobile is-1 p-0"></div>
          </div>
        </div>
      </div>
      {/* <!-- Hero footer: essential component for Bulma fullheight hero --> */}
      <div class="hero-foot pb-4">
        {/* Edit search button */}
        <div className="buttons is-centered">
          <Link to="/search">
            <button
              id="edit-search-button"
              className="button is-rounded is-large is-responsive"
            >
              Edit Search
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
