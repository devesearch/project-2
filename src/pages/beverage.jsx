import BrandMarquee from "../components/BrandMarquee";
import Card from "../components/card";
import CategoryCard from "../components/CategoryCard";
import Hero from "../components/Hero";
import "../styles/beverage.css";
import brandLogos from "../utils/brandLogos";
import categoryData from "../utils/categoryData";
import heroData from "../utils/heroData";
import beverageIcon from "../assets/categories/beverage.png";
import personalIcon from "../assets/categories/personal.png";
import homeIcon from "../assets/categories/home.png";

const beverageHighlights = [
  {
    image: beverageIcon,
    title: "Ready-to-Drink Classics",
    description: "Juices, carbonated drinks, iced teas, and energy beverages packed for retail and horeca.",
  },
  {
    image: personalIcon,
    title: "Wellness & Functional",
    description: "Infused waters, vitamin mixes, protein shakes, and electrolyte blends for health-focused shelves.",
  },
  {
    image: homeIcon,
    title: "Mixes & Concentrates",
    description: "Coffee, tea, malt beverages, chocolate mixes, and syrups for cafes and in-home use.",
  },
];

const Beverage = () => {
  const beverageCategory = categoryData.find((cat) => cat.title === "Beverages");

  return (
    <>
      <Hero data={heroData.beverage} />

      <section className="beverage-intro">
        <p>
          We curate beverage portfolios that travel well and land compliant: sealed freshness, sturdy cartons,
          and multilingual labeling ready for customs and store checks. From hydration staples to indulgent sips,
          we tailor assortments to your channel and climate needs.
        </p>
      </section>

      <section className="beverage-bulk animate-fade-up">
        <div className="beverage-bulk__text">
          <h2>Beverage Section – Khushal Enterprises</h2>
          <p>
            Refreshment for every moment. We offer a wide variety of drinks to suit every taste and occasion—from everyday
            hydration to premium refreshments—with quality, freshness, and great value in every sip.
          </p>
        </div>

        <div className="beverage-bulk__cards">
          <div className="beverage-bulk__card hover-lift">
            <h3>🍹 Our Beverage Products</h3>
            <p>We provide a carefully selected range of beverages, including:</p>
            <ul>
              <li>Soft Drinks – Popular carbonated drinks from trusted brands</li>
              <li>Fruit Juices – Fresh, nutritious, and packed with natural flavors</li>
              <li>Energy Drinks – Boost your energy anytime, anywhere</li>
              <li>Tea & Coffee – Classic and instant options for daily refreshment</li>
              <li>Packaged Drinking Water – Pure, safe, and reliable hydration</li>
              <li>Health & Wellness Drinks – Low-sugar, herbal, and nutrition-based beverages</li>
            </ul>
            <p className="note">All products are stored and handled under proper conditions to maintain taste and safety.</p>
          </div>

          <div className="beverage-bulk__card hover-lift">
            <h3>🛒 Easy Ordering Process</h3>
            <p>Ordering beverages is simple and fast:</p>
            <ol>
              <li>Browse available beverage products</li>
              <li>Select quantity and add items to cart</li>
              <li>Review your order details</li>
              <li>Place your order with secure checkout</li>
            </ol>
            <p className="note">We ensure quick processing, accurate billing, and on-time delivery.</p>
          </div>

          <div className="beverage-bulk__card hover-lift">
            <h3>✅ Why Choose Our Beverage Store?</h3>
            <ul className="bullet-grid">
              <li>Wide variety of brands and options</li>
              <li>Affordable prices and combo offers</li>
              <li>Fresh stock with verified quality</li>
              <li>User-friendly ordering system</li>
              <li>Reliable customer support</li>
            </ul>
          </div>
        </div>

        <div className="beverage-bulk__cta hover-lift">
          <h3>📦 Order Now</h3>
          <p>
            Stay refreshed with our beverage collection. Place your order today and enjoy convenience, quality, and freshness
            delivered to your doorstep.
          </p>
          <a href="/Contact" className="beverage-bulk__button glow-button">Contact us for orders</a>
        </div>
      </section>

      <section className="beverage-grid">
        {beverageHighlights.map((item, index) => (
          <Card key={index} {...item} variant="vertical" className="beverage-card" />
        ))}
      </section>

      {beverageCategory && (
        <section className="beverage-category">
          <h2>What We Ship</h2>
          <div className="beverage-category-card">
            <CategoryCard {...beverageCategory} />
          </div>
        </section>
      )}

      <section className="beverage-brands">
        <h2>Brands We Export</h2>
        <BrandMarquee logos={brandLogos} />
      </section>
    </>
  );
};

export default Beverage;
