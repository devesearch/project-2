import { useState } from "react";
import brochure from "../assets/brands/brochure.pdf";
import logo from "../assets/images/logo.jpeg";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const email = import.meta.env.VITE_EMAIL_ADDRESS;

  return (

  <header>
    <div className="top-bar">Global Reach, Trusted Supply - Your FMCG Export Partner!
      <text className="top-text"><a href={`mailto:${email}`}>{email}</a></text>
    </div>
    <nav className="navbar">
      
      <div className="navbar-logo">
        <img src={logo} alt="MyCompany logo" />
      </div>

      <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setOpen((v) => !v)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-links-container ${open ? "open" : ""}`}>
        <ul className="navbar-links">
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="/About" onClick={closeMenu}>About Us</a></li>

          {/* FMCG Dropdown */}
          <li className="dropdown">
            <span className="dropdown-title">FMCG</span>
            <ul className="dropdown-menu">
              <li><a href="/Groceries" onClick={closeMenu}>GROCERIES</a></li>
              <li><a href="/Beverage" onClick={closeMenu}>BEVERAGE</a></li>
              <li><a href="/PersonalCare" onClick={closeMenu}>PERSONAL CARE</a></li>
              <li><a href="/HomeCare" onClick={closeMenu}>HOME CARE</a></li>
            </ul>
          </li>

          {/* PRODUCTS Dropdown */}
          <li className="dropdown">
            <span className="dropdown-title">Products</span>
            <ul className="dropdown-menu">
              <li><a href="/Agro" onClick={closeMenu}>AGRO COMMODITIES</a></li>
              <li><a href="/Starch" onClick={closeMenu}>STARCH</a></li>
              <li><a href="/ProcessedFruits" onClick={closeMenu}>PROCESSED FRUIT PRODUCTS</a></li>
            </ul>
          </li>

          <li><a href="/Brands" onClick={closeMenu}>Brands</a></li>
          <li><a href="/Contact" onClick={closeMenu}>Contact Us</a></li>
        </ul>

        <div className="navbar-action">
          <a href={brochure} target="_blank" rel="noreferrer">
            <button className="nav-btn glow-button hover-lift" onClick={closeMenu}>DOWNLOAD BROCHURE</button>
          </a>
        </div>
      </div>
    </nav>
    <div className={`nav-overlay ${open ? "show" : ""}`} onClick={closeMenu}></div>
  </header>
  );
};

export default Navbar;
