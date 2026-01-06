import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import brochure from "../assets/brands/brochure.pdf";
import logo from "../assets/images/logo.jpeg";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeMenu = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const email = import.meta.env.VITE_EMAIL_ADDRESS;

  return (
    <header>
      <div className="top-bar">
        Global Reach, Trusted Supply – Your FMCG Export Partner!
        <span className="top-text">
          <FaEnvelope />
          <a href={`mailto:${email}`} className="plain-link">
            {email}
          </a>
        </span>
      </div>

      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Khushal Enterprises logo" />
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links-container ${open ? "open" : ""}`}>
          <ul className="navbar-links">
            <li><a href="/" onClick={closeMenu}>Home</a></li>
            <li><a href="/about" onClick={closeMenu}>About Us</a></li>

            {/* FMCG */}
            <li className="dropdown">
              <button
                className="dropdown-title"
                onClick={() => toggleDropdown("fmcg")}
              >
                FMCG
              </button>

              {openDropdown === "fmcg" && (
                <ul className="dropdown-menu">
                  <li><a href="/groceries" onClick={closeMenu}>Groceries</a></li>
                  <li><a href="/beverage" onClick={closeMenu}>Beverage</a></li>
                  <li><a href="/personalcare" onClick={closeMenu}>Personal Care</a></li>
                  <li><a href="/homecare" onClick={closeMenu}>Home Care</a></li>
                </ul>
              )}
            </li>

            {/* PRODUCTS */}
            <li className="dropdown">
              <button
                className="dropdown-title"
                onClick={() => toggleDropdown("products")}
              >
                Products
              </button>

              {openDropdown === "products" && (
                <ul className="dropdown-menu">
                  <li><a href="/agro" onClick={closeMenu}>Agro Commodities</a></li>
                  <li><a href="/starch" onClick={closeMenu}>Starch</a></li>
                  <li><a href="/processedfruits" onClick={closeMenu}>Processed Fruits</a></li>
                </ul>
              )}
            </li>

            <li><a href="/brands" onClick={closeMenu}>Brands</a></li>
            <li><a href="/contact" onClick={closeMenu}>Contact Us</a></li>
          </ul>

          <div className="navbar-action">
            <a href={brochure} target="_blank" rel="noreferrer">
              <button className="nav-btn glow-button hover-lift" onClick={closeMenu}>
                DOWNLOAD BROCHURE
              </button>
            </a>
          </div>
        </div>
      </nav>

      <div className={`nav-overlay ${open ? "show" : ""}`} onClick={closeMenu}></div>
    </header>
  );
};

export default Navbar;