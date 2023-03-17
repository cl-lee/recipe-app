import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">Page 1</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
            <li>
              <Link to="/page3">Page 3</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/page1">
            <h1>Page 1</h1>
          </Route>
          <Route path="/page2">
            <h1>Page 2</h1>
          </Route>
          <Route path="/page3">
            <h1>Page 3</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
