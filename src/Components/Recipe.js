import { useState } from "react";
import ResultCarousel from "./ResultCarousel";
import Navbar from "./Navbar.js";
import "./styles/Recipe.css";
import { Link } from "react-router-dom";
import imageOne from "./assets/dish.png";
import imageTwo from "./assets/groceries.png";

function Recipe() {
  // for navigating between sets of recipe cards
  // const [startingIndex, setStartingIndex] = useState(0);

  return (
    <div id="recipe-results">
      {/* Page header */}
      <header id="recipe-page-header">
        <h1 id="recipe-page-title">What you can make</h1>
        <img id="decoration-dish" src={imageOne} alt="A healthy salad dish" />
      </header>

      {/* Display recipes here */}
      <main id="recipe-page-main">
        {/* Buttons for navigating between sets of recipe cards*/}
        {/* <button id="left" className="button">
          Left
        </button>
        <button id="right" className="button">
          Right
        </button> */}

        {/* <!--~First row of recipe cards~--> */}
        <div className="columns is-desktop mx-5">
          {/* <!-- Spacing --> */}
          <div className="column is-0-mobile is-1 p-0"></div>

          {/* <!-- PLACEHOLDER CARD, TO BE REPLACED WITH ACTUAL RECIPE CARD --> */}
          <div className="column is-4-desktop m-2 p-5">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content is-hidden-mobile">
                    <p className="title is-5">Placeholder</p>
                    <p className="is-size-7 is-size-5-fullhd">
                      To be replaced with actual recipe card <a>@bulmaio</a>
                    </p>
                  </div>
                </div>
                <div class="content is-hidden-tablet">
                  <p className="title is-5">Placeholder</p>
                  <p className="is-size-7 is-size-5-fullhd">
                    To be replaced with actual recipe card <a>@bulmaio</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- PLACEHOLDER CARD, TO BE REPLACED WITH ACTUAL RECIPE CARD --> */}
          <div className="column is-4-desktop m-2 p-5">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content is-hidden-mobile">
                    <p className="title is-5">Placeholder</p>
                    <p className="is-size-7 is-size-5-fullhd">
                      To be replaced with actual recipe card <a>@bulmaio</a>
                    </p>
                  </div>
                </div>
                <div class="content is-hidden-tablet">
                  <p className="title is-5">Placeholder</p>
                  <p className="is-size-7 is-size-5-fullhd">
                    To be replaced with actual recipe card <a>@bulmaio</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Spacing --> */}
          <div className="column is-0-mobile is-3 p-0"></div>
        </div>

        {/* <!--~Second row of recipe cards~--> */}
        <div className="columns is-desktop mx-5">
          {/* <!-- Spacing --> */}
          <div className="column is-0-mobile is-3 p-0"></div>
          {/* <!-- PLACEHOLDER CARD, TO BE REPLACED WITH ACTUAL RECIPE CARD --> */}
          <div className="column is-4-desktop m-2 p-5">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content is-hidden-mobile">
                    <p className="title is-5">Placeholder</p>
                    <p className="is-size-7 is-size-5-fullhd">
                      To be replaced with actual recipe card <a>@bulmaio</a>
                    </p>
                  </div>
                </div>
                <div class="content is-hidden-tablet">
                  <p className="title is-5">Placeholder</p>
                  <p className="is-size-7 is-size-5-fullhd">
                    To be replaced with actual recipe card <a>@bulmaio</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- PLACEHOLDER CARD, TO BE REPLACED WITH ACTUAL RECIPE CARD --> */}
          <div className="column is-4-desktop m-2 p-5">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-128x128">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content is-hidden-mobile">
                    <p className="title is-5">Placeholder</p>
                    <p className="is-size-7 is-size-5-fullhd">
                      To be replaced with actual recipe card <a>@bulmaio</a>
                    </p>
                  </div>
                </div>
                <div class="content is-hidden-tablet">
                  <p className="title is-5">Placeholder</p>
                  <p className="is-size-7 is-size-5-fullhd">
                    To be replaced with actual recipe card <a>@bulmaio</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Spacing --> */}
          <div className="column is-0-mobile is-1 p-0"></div>
        </div>
        {/* <ResultCarousel></ResultCarousel> */}
      </main>

      {/* Page footer*/}
      <footer id="recipe-page-footer">
        {/* Edit search button */}
        <div className="buttons is-centered">
          <button className="button is-rounded is-large is-responsive">
            Edit Search
          </button>
        </div>
        {/* decoration image 2 */}
        <img
          id="decoration-groceries"
          src={imageTwo}
          alt="Fresh grocery items"
        />
      </footer>
    </div>
  );
}

export default Recipe;

// --- pseudocode ---
// CSS:
// background-color: #F4DF20;
// add a couple of food/dishes images (see wireframe);
// card background-color: #00AF54, opacity: 0.6;
// button background-color: #B6671E;