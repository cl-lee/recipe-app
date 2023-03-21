
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import 'bulma/css/bulma.min.css';
import SearchPage from "./Components/SearchPage";
import "./App.css";

function App() {
  return (<>
  <Home/>
  {/* <SearchPage/> */}
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  </>

  );
}

export default App;
