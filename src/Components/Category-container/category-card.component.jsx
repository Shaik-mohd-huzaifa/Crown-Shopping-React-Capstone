import "./category-card.component.style.scss";

const CategoryCard = ({ title, src }) => (
  <div className="category-container">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${src})`,
      }}
    ></div>
    <div className="category-body-container">
      <h2>{title}</h2>
      <a href="https://www.google.com">Shop Now</a>
    </div>
  </div>
);

export default CategoryCard;
