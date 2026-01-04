import logo from "../assets/images/logo.svg";
import "../styles/Navbar.css";

const Navbar = () => {
  return (

  <header>
    <div className="top-bar">Global Reach, Trusted Supply - Your FMCG Export Partner!
      <text classname="top-text">Email:kushalenterprises@gmail.com</text>
    </div>
    <nav className="navbar">
      
      <div className="navbar-logo">
        <img src={logo} alt="MyCompany logo" />
      </div>

     
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/About">About Us</a></li>

        {/* FMCG Dropdown */}
        <li className="dropdown">
          <span className="dropdown-title">FMCG v</span>
          <ul className="dropdown-menu">
            <li><a href="/services#home-care">GROCERIES</a></li>
            <li><a href="/services#personal-care">BEVERAGE</a></li>
            <li><a href="/services#groceries">PERSONAL CARE</a></li>
            <li><a href="/services#beverages">HOME CARE</a></li>
          </ul>
        </li>

        {/* PRODUCTS Dropdown */}
        <li className="dropdown">
          <span className="dropdown-title">Products v</span>
          <ul className="dropdown-menu">
            <li><a href="/services#agro">AGRO COMMODITIES</a></li>
            <li><a href="/services#processed">STARCH</a></li>
            <li><a href="/services#starch">PROCESSED FRUIT PRODUCTS</a></li>
          </ul>
        </li>

        <li><a href="/Brands">Brands</a></li>
        <li><a href="/Contact">Contact Us</a></li>
      </ul>

      
      <div className="navbar-action">
        <button className="nav-btn">DOWNLOAD BROCHURE</button>
      </div>
    </nav>
  </header>
  );
};

export default Navbar;
