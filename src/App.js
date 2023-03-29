import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import SearchPage from "./Components/SearchPage";
import Recipe from './Components/Recipe.js';

function App() {
  return (
    <BrowserRouter>
      <div id="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes as needed */}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search-results" element={<Recipe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
