import "../styles/brandMarquee.css";

const BrandMarquee = ({ logos }) => {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {logos.concat(logos).map((logo, index) => (
          <div className="marquee-item" key={index}>
            <img src={logo} alt="brand logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
