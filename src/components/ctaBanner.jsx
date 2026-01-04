import "../styles/ctaBanner.css";

const CtaBanner = ({ text, phone }) => {
  return (
    <section className="cta-banner">
      <div className="cta-content">
        <h3>{text}</h3>
        <a href={`tel:${phone}`} className="cta-button">
          📞 {phone}
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
