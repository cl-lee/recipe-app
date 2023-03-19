import ResultCarousel from "./ResultCarousel";
import "./styles/Recipe.css";
import { Link } from "react-router-dom";
import dishImage from "./assets/dish1.png";

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
            src={dishImage}
            alt="A healthy salad dish"
          />
        </header>
        {/* RECIPE CARD (ResultCarousel) */}
        <ResultCarousel></ResultCarousel>
      </main>

      {/* EDIT SEARCH BUTTON (goes back to search page)*/}
      <footer id="recipe-page-footer">
        <div className="content has-text-centered">
          {/* <button className="button is-rounded is-medium is-responsive">
            <Link to="search-page">Edit Search</Link>
          </button> */}
        </div>
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
