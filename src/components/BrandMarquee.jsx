import "../styles/brandMarquee.css";

const BrandMarquee = ({ logos }) => {
  return (
    <div className="marquee animate-fade-up">
      <div className="marquee-track">
        {logos.concat(logos).map((logo, index) => (
          <div className="marquee-item hover-lift" key={index}>
            <img src={logo} alt="brand logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
