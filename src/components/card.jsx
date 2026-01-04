import "../styles/card.css";

const Card = ({ image, title, description, variant,  className, buttonText, buttonLink, }) => {
  return (
    <div className={`card card--${variant} ${className} animate-fade-up hover-lift`}>
     {image && <img src={image} alt={title} />}
      <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>

        {/* OPTIONAL BUTTON */}
        {buttonText && (
          <a href={buttonLink || "#"} className="card-btn">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
