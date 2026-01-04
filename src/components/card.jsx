import "../styles/card.css";

const Card = ({ image, title, description, variant,  className }) => {
  return (
    <div className={`card card--${variant} ${className}`}>
     {image && <img src={image} alt={title} />}
      <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
