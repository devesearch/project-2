import "../styles/ctaBanner.css";

const CtaBanner = ({ text, phone }) => {
  return (
    <section className="cta-banner animate-fade-up">
      <div className="cta-content">
        <h3>{text}</h3>
        <a href={`tel:${phone}`} className="cta-button glow-button hover-lift">
          📞 {phone}
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
