import ResultCarousel from "./ResultCarousel";
import Navbar from "./Navbar.js";
import "./styles/Recipe.css";
import { Link } from "react-router-dom";
import imageOne from "./assets/dish.png";
import imageTwo from "./assets/groceries.png";

function Recipe() {
  return (
    <div id="recipe-results">
      {/* Navigation bar */}
      <Navbar></Navbar>

      {/* Page header */}
      <header id="recipe-page-header">
        <h1 id="recipe-page-title">What you can make</h1>
        <img id="decoration-dish" src={imageOne} alt="A healthy salad dish" />
      </header>

      {/* Display recipes here */}
      <main id="recipe-page-main">
        <ResultCarousel></ResultCarousel>
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
