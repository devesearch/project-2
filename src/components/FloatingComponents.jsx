import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "../styles/floatingComponents.css";


const phone = import.meta.env.VITE_PHONE_NUMBER;
const message = encodeURIComponent(
  import.meta.env.VITE_WHATSAPP_MESSAGE
);

const FloatingActions = () => {
  return (
    <>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fab fab-left"
        aria-label="WhatsApp"
      >
       <FaWhatsapp />
      </a>

      {/* Call */}
      <a href={`tel:+${phone}`}
         className="fab fab-right"
         aria-label="Call"
        >
        <FaPhoneAlt />
      </a>
    </>
  );
};

export default FloatingActions;
