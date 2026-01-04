const WhyFeature = ({ title, text }) => (
  <div className="why-feature animate-fade-up hover-lift">
    <div className="why-icon">✓</div>
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </div>
);

export default WhyFeature;
