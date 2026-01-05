import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
import "../styles/footer.css";

const phone = import.meta.env.VITE_PHONE_NUMBER;
const email = import.meta.env.VITE_EMAIL_ADDRESS;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <img src={logo} alt="Khushal Enterprises Logo" className="footer-logo" />
          <p>
            Khushal Enterprises is a trusted FMCG trading and distribution
            partner delivering quality products with reliable global supply.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* FMCG */}
        <div className="footer-links">
          <h4>FMCG</h4>
          <Link to="/groceries">Groceries</Link>
          <Link to="/beverage">Beverage</Link>
          <Link to="/personalcare">Personal Care</Link>
          <Link to="/homecare">Home Care</Link>
        </div>

        {/* PRODUCTS */}
        <div className="footer-links">
          <h4>Products</h4>
          <Link to="/agro">Agro Commodities</Link>
          <Link to="/starch">Starch</Link>
          <Link to="/processedfruits">Processed Fruits</Link>
        </div>

        {/* GET IN TOUCH */}
        <div className="footer-contact">
          <h4>Get in Touch</h4>

          <p><FaMapMarkerAlt /> Rohini, Delhi, India</p>

          <p>
            <FaPhoneAlt />{" "}
            <a href={`tel:${phone}`}>{phone}</a>
          </p>

          <p>
            <FaEnvelope />{" "}
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Khushal Enterprises. All rights reserved.</p>

        <p className="footer-disclaimer">
          All brand names and trademarks belong to their respective owners and
          are used strictly for identification purposes.
        </p>

        <div className="footer-legal-links">
          <Link to="/privacypolicy">Privacy Policy</Link> |{" "}
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;