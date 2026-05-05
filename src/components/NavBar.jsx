import { useState } from "react";
import SearchBar from "./SearchBar";

export default function NavBar({ onSearch }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">MusicDash</h1>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#artists">Artists</a></li>
          <li><a href="#songs">Songs</a></li>
          <li><a href="#favorites">Favorites</a></li>
        </ul>

        <div className="nav-search">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
}
