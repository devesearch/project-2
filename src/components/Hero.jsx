import "../styles/hero.css";

const Hero = ({ data }) => {
  const { type, title, subtitle, buttonText, buttonLink, image, height } = data;

  return (
    <section
      className={`hero hero--${type} animate-fade-up`}
      style={{
        height: height || "80vh",
        backgroundImage: image && type !== "split"
          ? `url(${image})`
          : "none",
      }}
    >
      {/* OVERLAY & TEXT HERO */}
      {(type === "overlay" || type === "text") && (
        <div className="hero-content animate-fade-up">
          {title && <h1>{title}</h1>}
          {subtitle && <p>{subtitle}</p>}
          {buttonText && (
            <a href={buttonLink} className="hero-btn glow-button">
              {buttonText}
            </a>
          )}
        </div>
      )}

      {/* SPLIT HERO */}
      {type === "split" && (
        <div className="hero-split animate-fade-up">
          <div className="hero-text">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <div className="hero-image">
            <img src={image} alt={title} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
