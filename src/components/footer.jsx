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
            <img src={logo} alt="Bulk Buddy" className="footer-logo" />
            <p>
              Your Trusted Partner in Global Trade. Bulk Buddy International
              Exports is a dynamic and forward thinking export company with a
              global footprint.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Brands</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li>Agro Commodities</li>
              <li>Starch</li>
              <li>Processed Fruits Products</li>
              <li>Groceries</li>
              <li>Personal Care</li>
              <li>Beverage</li>
              <li>Home Care</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <ul className="footer-contact">
              <li>📍 Sonipat, Haryana</li>
              <li>📞 +91 7988514386</li>
              <li>✉️ info@bulkbuddy.in</li>
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
        <p>Copyright © 2025 Bulk Buddy</p>
        <p>Designed By King of Digital Marketing</p>
      </div>

    </footer>
  );
};

export default Footer;
