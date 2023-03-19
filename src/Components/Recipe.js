import ResultCarousel from "./ResultCarousel";
import "./styles/Recipe.css";
import { Link } from "react-router-dom";
import imageOne from "./assets/dish.png";
import imageTwo from "./assets/groceries.png"

function Recipe() {
  return (
    <div>
      {/* NAVIGATION BAR */}
      <nav id="nav-bar">
        {/* Logo */}
        <img
          id="logo"
          src="https://bulma.io/images/placeholders/128x128.png"
          alt="Logo"
        />
        {/* Home button */}
        {/* <button id="home-button"><Link to="/">Home</Link></button> */}
      </nav>
      <main id="recipe-page-main">
        {/* decoration image 1 */}
        <header id="recipe-page-header">
          {/* PAGE TITLE */}
          <h1 id="recipe-page-title">What you can make</h1>
          <img
            id="decoration-dish"
            src={imageOne}
            alt="A healthy salad dish"
          />
        </header>
        {/* RECIPE CARD (ResultCarousel) */}
        <ResultCarousel></ResultCarousel>
      </main>

      {/* EDIT SEARCH BUTTON (goes back to search page)*/}
      <footer id="recipe-page-footer">
          {/* <button className="button is-rounded is-medium is-responsive">
            Edit Search
          </button>
        <img
            id="decoration-groceries"
            src={imageTwo}
            alt="Fresh grocery items"
          /> */}
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
