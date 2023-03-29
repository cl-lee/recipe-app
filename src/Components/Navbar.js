import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <div>
      {/* NAVIGATION BAR */}
      <nav id="nav-bar">
        {/* Logo */}
        <img id="logo" src="./logo-1.png" alt="Logo" />
        {/* Home button */}
        <div id="button-container">
          <Link to="/">
            <button id="home-button" className="button is-responsive is-rounded">Home</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
