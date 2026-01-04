import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp
} from "react-icons/fa";

import "../styles/contactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Get in Touch with Bulk Buddy</h2>
          <p className="contact-subtitle">
            Your Global Export Partner – Reach Out Today!
          </p>

          <div className="contact-item">
            <span className="contact-icon"><FaMapMarkerAlt /></span>
            <div>
              <h4>Address</h4>
              <p>Sonipat, Haryana</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><FaPhoneAlt /></span>
            <div>
              <h4>Phone Numbers</h4>
              <p>+91 7988514386</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><FaEnvelope /></span>
            <div>
              <h4>Email</h4>
              <p>info@bulkbuddy.in</p>
            </div>
          </div>

          <div className="contact-socials">
            <span className="instagram"><FaInstagram /></span>
            <span className="facebook"><FaFacebookF /></span>
            <span className="whatsapp"><FaWhatsapp /></span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h2>Send Your Inquiry Now</h2>
          <span className="form-underline"></span>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email Id" />
            <input type="tel" placeholder="Phone No." />
            <textarea placeholder="Message" rows="4"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
