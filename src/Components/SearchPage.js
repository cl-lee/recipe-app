import Navbar from "./Navbar";
import SearchForm from "./SearchForm/SearchForm";

export default function SearchPage() {
  return (
    <section class="hero is-fullheight m-0 p-0">
      {/* <!-- Hero head: essential component for Bulma fullheight hero --> */}
      <div id="carousel-hero-head m-0 p-0" class="hero-head">
        <Navbar />
      </div>

      {/* <!-- Bulma hero-body --> */}
      <div class="hero-body m-0 p-0">
        <SearchForm />
        <div id="veggies"></div>
        <div id="avocado" />
        {/* <img id="veggies" src="./veggies.png" alt="vegetable basket"/> */}
        <div id="styling">
          <p id="text-find-recipes">find recipes</p>
          <p id="text-healthy">eat healthy</p>
          <p id="text-vegetarian">vegetarian</p>
          <p id="text-cook">bold flavors</p>
        </div>
      </div>
      {/* <!-- Hero footer: essential component for Bulma fullheight hero --> */}
      <div class="hero-foot"></div>
    </section>
  );
}
