import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Recipe from './Components/Recipe.js';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <BrowserRouter basename='cl-lee/recipe-app'>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes as needed */}
          <Route path="/search-results" element={<Recipe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
