import "../styles/card.css";

const Card = ({
  image,
  title,
  description,
  variant,
  className,
  buttonText,
  buttonLink,
}) => {


  const imageAnimation =
    variant === "horizontal"
      ? "fade-right"
      : variant === "image-right"
      ? "fade-left"
      : "fade-up";

  const textAnimation =
    variant === "horizontal"
      ? "fade-left"
      : variant === "image-right"
      ? "fade-right"
      : "fade-up";

  return (
    <div className={`card card--${variant} ${className}`}>
      {image && (
        <img
          src={image}
          alt={title}
          data-aos={imageAnimation}
        />
      )}

      <div
        className="card-text"
        data-aos={textAnimation}
      >
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}

        {buttonText && buttonLink && (
          <a href={buttonLink} className="card-btn">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;