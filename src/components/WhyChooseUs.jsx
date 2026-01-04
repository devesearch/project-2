import whyImage from "../assets/images/full.jpeg";
import WhyFeature from "../components/whyfeature";
import "../styles/whyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* LEFT CONTENT */}
        <div className="why-left">
          <span className="why-line"></span>

          <h2>Why Choose Bulk Buddy?</h2>

          <p className="why-desc">
            At Bulk Buddy, we focus on delivering quality products at competitive
            prices with efficient service and trusted global partnerships.
          </p>

          <div className="why-features">
            <WhyFeature
              title="Trusted Partner"
              text="Reliable name in global FMCG exports."
            />
            <WhyFeature
              title="Competitive Pricing"
              text="Best value with wholesale rates."
            />
            <WhyFeature
              title="High-Quality Products"
              text="Delivering the best from top brands."
            />
            <WhyFeature
              title="Efficient Solutions"
              text="Fast, smooth, and hassle-free export process."
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="why-right">
          <img src={whyImage} alt="Why Choose Us" />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
