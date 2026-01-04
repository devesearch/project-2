import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp
} from "react-icons/fa";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import "../styles/contactSection.css";

const phone = import.meta.env.VITE_PHONE_NUMBER;
const email = import.meta.env.VITE_EMAIL_ADDRESS;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const shardetails = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // ❌ Empty check
    if (!name || !email || !phone || !message) {
      alert("All fields are required.");
      return;
    }

    // ❌ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // ❌ Phone validation (digits only, 10–15)
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    // ✅ Send only if all validations pass
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name,
        email,
        phone,
        message,
        to_email: email,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    })
    .catch((error) => {
      console.error("Email error:", error);
      alert("Failed to send message");
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left animate-fade-up">
          <h2>Get in Touch with Khushal Enterprises</h2>
          <p className="contact-subtitle">
            Your Global Export Partner – Reach Out Today!
          </p>

          <div className="contact-item">
            <span className="contact-icon"><FaMapMarkerAlt /></span>
            <div>
              <h4>Address</h4>
              <p>Rohini, Delhi</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><FaPhoneAlt /></span>
            <div>
              <h4>Phone Numbers</h4>
              <p>{phone}</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><FaEnvelope /></span>
            <div>
              <h4>Email</h4>
              <p>{email}</p>
            </div>
          </div>

          <div className="contact-socials">
            <span className="instagram"><FaInstagram /></span>
            <span className="facebook"><FaFacebookF /></span>
            <span className="whatsapp"><FaWhatsapp /></span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right animate-fade-up animate-delay-1">
          <h2>Send Your Inquiry Now</h2>
          <span className="form-underline"></span>

          <form className="contact-form" onSubmit={shardetails}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />

            <input
              type="email"
              placeholder="Your Email Id"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <input
              type="tel"
              placeholder="Phone No."
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value.replace(/\D/g, "") // digits only
                })
              }
              required
            />

            <textarea
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />

            <button type="submit" className="glow-button hover-lift">
              SUBMIT
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
