import logo from "../assets/images/logo.svg";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP FOOTER */}
      <div className="footer-top">
        <div className="footer-container">

          {/* LOGO + ABOUT */}
          <div className="footer-col footer-about">
            <img src={logo} alt="Khushal Enterprises" className="footer-logo" />
            <p>
              Your Trusted Partner in Global Trade. Khushal Enterprises is a dynamic and forward thinking export company with a
              global footprint.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/About">About Us</a></li>
              <li><a href="/Brands">Brands</a></li>
              <li><a href="/Contact">Contact Us</a></li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="/Agro">Agro Commodities</a></li>
              <li><a href="/Starch">Starch</a></li>
              <li><a href="/ProcessedFruits">Processed Fruits Products</a></li>
              <li><a href="/Groceries">Groceries</a></li>
              <li><a href="/PersonalCare">Personal Care</a></li>
              <li><a href="/Beverage">Beverage</a></li>
              <li><a href="/HomeCare">Home Care</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <ul className="footer-contact">
              <li>📍 Sonipat, Haryana</li>
              <a href="tel:+917988514386"><li>📞 +91 7988514386</li></a>
              <a href="mailto:info@bulkbuddy.in"><li>✉️ info@bulkbuddy.in</li></a>
            </ul>

            <div className="footer-social">
              <span>📷</span>
              <span>📘</span>
              <span>💬</span>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>Copyright © 2025 Khushal Enterprises</p>
        <p>Designed By Devesearch</p>
      </div>

    </footer>
  );
};

export default Footer;
