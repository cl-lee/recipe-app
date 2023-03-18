import ResultCarousel from "./ResultCarousel";
import sampleData from "./temp.json";
import "./Recipe.css";
import { Link } from "react-router-dom";
let searchResults = sampleData.hits;

function Recipe() {
  return (
    <div className="body">
      {/* NAVIGATION BAR */}
      <nav id="nav-bar">
        {/* Logo */}
        <img
          id="logo"
          src="https://bulma.io/images/placeholders/128x128.png"
          alt="Logo"
        />
        {/* Home button */}
        <button id="home-button">Home</button>
      </nav>
      <main>
        <header id="recipe-page-header">
          {/* PAGE TITLE */}
          <h1 id="recipe-page-title">What you can make</h1>
        </header>
        {/* RECIPE CARD (ResultCarousel) */}
        <ResultCarousel></ResultCarousel>
      </main>

      {/* EDIT SEARCH BUTTON */}
      {/* goes back to last page with saved results */}
      {/* make button bigger */}
      <footer>
        <div className="content has-text-centered">
          {/* Button routes back to search page */}
          {/* <button className="button is-rounded is-responsive">
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

// LOGIC:
// iterate fetch results, and display them as recipe cards in carousel. Render x number of pages in carousel(?)
// import fetch results
// let slicedFetchResults = fetchResults (0,4)
// {slicedFetchResults.map((recipe) => (
// <ResultCarousel key={recipe.id} {...recipe} />))}

// show four results per carousel page
// logic: start with array index 0, 1, 2, 3
// if clicked right button:
// next four items in array (index 4, 5, 6, 7)

// for loop:
// for (var i = 0; i < 4; i++) {
// console.log(numbers[i]);
// }

// map and spread?

// results = [recipe1, recipe2, recipe3, recipe4, ...]
// render results[0], results[1], results[2], results[3] per carousel page,
// setState?
