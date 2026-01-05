import "../styles/brandMarquee.css";

const BrandMarquee = ({ logos }) => {
  return (
    <div
      className="marquee"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="800"
    >
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