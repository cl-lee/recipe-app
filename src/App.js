import "./App.css";
import Home from "../src/Components/Home";
import MainPicture from "../src/Components/MainPicture";
import Option1 from "../src/Components/Option1";
import Option2 from "../src/Components/Option2";
import Option3 from "../src/Components/Option3";
import Recipe from "../src/Components/Recipe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router basename="cl-lee/recipe-app">
      <div>
        <Routes>
          <Route path="search-results" element={<Recipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
