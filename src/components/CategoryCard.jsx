import "../styles/categoryCard.css";

const CategoryCard = ({ title, icon, items, bgColor }) => {
  return (
    <div className="category-card" style={{ backgroundColor: bgColor }}>
      <img src={icon} alt={title} className="category-icon" />

      <h3>{title}</h3>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span className="arrow">››</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCard;
