import { NavLink } from "react-router-dom";
import "./styles/Navbar.css"

export default function Navbar() {
  return (
    <div>
      {/* NAVIGATION BAR */}
      <nav id="nav-bar">
        {/* Logo */}
        <img
          id="logo"
          src="https://bulma.io/images/placeholders/128x128.png"
          alt="Logo"
        />
        {/* Home button */}
        <NavLink to="/">
        <button id="home-button">Home</button>
        </NavLink>
      </nav>
    </div>
  );
}
