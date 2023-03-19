import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            My App
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="/#"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/page1" className="navbar-item">
              Page 1
            </Link>
            <Link to="/page2" className="navbar-item">
              Page 2
            </Link>
            <Link to="/page3" className="navbar-item">
              Page 3
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/page1" element={<h1>Page 1</h1>} />
        <Route path="/page2" element={<h1>Page 2</h1>} />
        <Route path="/page3" element={<h1>Page 3</h1>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
