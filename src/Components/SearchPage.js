import SearchForm from "./SearchForm/SearchForm";
import Navbar from "./Navbar";

export default function SearchPage() {
    return (
      <>
      <Navbar/>
      <SearchForm/>
      <div id="veggies"></div>
      {/* <img id="veggies" src="./veggies.png" alt="vegetable basket"/> */}
      <div id="styling">
        <p id="text-find-recipes">find recipes</p>
        <p id="text-healthy">eat healthy</p>
        <p id="text-vegetarian">vegetarian</p>
        <p id="text-cook">what to cook</p>
        
      </div>
      </>
    );
  }








