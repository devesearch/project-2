import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import brochure from "../assets/brands/brochure.pdf";
import logo from "../assets/images/logo.jpeg";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const email = import.meta.env.VITE_EMAIL_ADDRESS;

  return (
    <header>
      {/* TOP BAR */}
      <div className="top-bar">
        Global Reach, Trusted Supply – Your FMCG Export Partner!
        <span className="top-text">
          <FaEnvelope />
          <a href={`mailto:${email}`} className="plain-link">
            {email}
          </a>
        </span>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        {/* LOGO */}
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Khushal Enterprises Logo" />
          </Link>
        </div>

        {/* TOGGLE BUTTON */}
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* LINKS */}
        <div className={`navbar-links-container ${open ? "open" : ""}`}>
          <ul className="navbar-links">
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>

            <li>
              <Link to="/about" onClick={closeMenu}>About Us</Link>
            </li>

            {/* FMCG DROPDOWN */}
            <li className="dropdown">
              <span className="dropdown-title">FMCG</span>
              <ul className="dropdown-menu">
                <li><Link to="/groceries" onClick={closeMenu}>Groceries</Link></li>
                <li><Link to="/beverage" onClick={closeMenu}>Beverage</Link></li>
                <li><Link to="/personalcare" onClick={closeMenu}>Personal Care</Link></li>
                <li><Link to="/homecare" onClick={closeMenu}>Home Care</Link></li>
              </ul>
            </li>

            {/* PRODUCTS DROPDOWN */}
            <li className="dropdown">
              <span className="dropdown-title">Products</span>
              <ul className="dropdown-menu">
                <li><Link to="/agro" onClick={closeMenu}>Agro Commodities</Link></li>
                <li><Link to="/starch" onClick={closeMenu}>Starch</Link></li>
                <li>
                  <Link to="/processedfruits" onClick={closeMenu}>
                    Processed Fruit Products
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/brands" onClick={closeMenu}>Brands</Link>
            </li>

            <li>
              <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
            </li>
          </ul>

          {/* ACTION BUTTON */}
          <div className="navbar-action">
            <a href={brochure} target="_blank" rel="noreferrer">
              <button
                className="nav-btn glow-button hover-lift"
                onClick={closeMenu}
              >
                DOWNLOAD BROCHURE
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`nav-overlay ${open ? "show" : ""}`}
        onClick={closeMenu}
      ></div>
    </header>
  );
};

export default Navbar;