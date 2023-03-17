import ResultCarousel from "./ResultCarousel";
import sampleData from "./temp.json";

function Recipe() {
  return (
    <div>
      {/* NAVIGATION BAR */}
      <nav className="navbar is-black">
        <div className="navbar-brand">
          {/* Logo */}
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo-white.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          {/* Home button */}
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* PAGE TITLE */}
      <h1 class="title">What you can make</h1>

      {/* RECIPE CARD (ResultCarousel) */}
      <ResultCarousel></ResultCarousel>

      {/* EDIT SEARCH BUTTON */}
      {/* goes back to last page with saved results */}
      {/* make button bigger */}
      <button class="button is-responsive">Default</button>
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