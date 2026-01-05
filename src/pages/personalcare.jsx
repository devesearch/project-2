import BrandMarquee from "../components/BrandMarquee";
import Card from "../components/card";
import CategoryCard from "../components/CategoryCard";
import Hero from "../components/Hero";
import "../styles/personalCare.css";
import brandLogos from "../utils/brandLogos";
import categoryData from "../utils/categoryData";
import heroData from "../utils/heroData";
import personalIcon from "../assets/categories/personal.png";
import homeIcon from "../assets/categories/home.png";
import beverageIcon from "../assets/categories/beverage.png";

const personalHighlights = [
  {
    image: personalIcon,
    title: "Skin & Hair Essentials",
    description: "Moisturizers, shampoos, conditioners, serums, and body care tailored to climate and skin types.",
  },
  {
    image: homeIcon,
    title: "Hygiene Staples",
    description: "Soaps, sanitizers, wipes, deodorants, razors, and feminine care with compliant labeling.",
  },
  {
    image: beverageIcon,
    title: "Health & Baby Care",
    description: "Baby lotions, powders, bath, oral care, and wellness SKUs ready for retail or pharmacy shelves.",
  },
];

const PersonalCare = () => {
  const personalCategory = categoryData.find((cat) => cat.title === "Personal Care");

  return (
    <>
      <Hero data={heroData.personalCare} />

      <section className="personal-intro">
        <p>
          We assemble personal care assortments that meet regulatory and shelf standards—durable packaging, clear
          multilingual labeling, and dependable lead times. From everyday hygiene to premium care, we tailor mixes for
          supermarkets, pharmacies, and e-commerce.
        </p>
      </section>

      <section className="personal-bulk animate-fade-up">
        <div className="personal-bulk__text">
          <h2>Personal Care – Khushal Enterprises</h2>
          <p>
            Our Personal Care section is designed to meet daily hygiene, grooming, and wellness needs with trusted brands and
            quality products. Personal care is not a luxury—it is a necessity for a healthy, confident lifestyle.
          </p>
        </div>

        <div className="personal-bulk__cards">
          <div className="personal-bulk__card hover-lift">
            <h3>🌿 Our Personal Care Products</h3>
            <p>We offer a wide range of carefully selected personal care items, including:</p>
            <ul>
              <li>Skin Care – Soaps, face washes, creams, moisturizers, sunscreens</li>
              <li>Hair Care – Shampoos, conditioners, hair oils, serums</li>
              <li>Oral Care – Toothpaste, toothbrushes, mouthwash</li>
              <li>Body Care – Body wash, lotions, deodorants</li>
              <li>Men’s & Women’s Grooming – Razors, shaving cream, grooming essentials</li>
              <li>Health & Hygiene – Sanitizers, handwash, hygiene products</li>
            </ul>
            <p className="note">All products are sourced from reliable brands, ensuring safety, freshness, and quality.</p>
          </div>

          <div className="personal-bulk__card hover-lift">
            <h3>🛒 Easy Ordering Process</h3>
            <p>Ordering personal care products is simple and hassle-free:</p>
            <ol>
              <li>Browse Products – Explore the Personal Care category</li>
              <li>Add to Cart – Select items and quantities</li>
              <li>Place Order – Confirm with secure checkout</li>
              <li>Fast Delivery – Quick, safe delivery to your doorstep</li>
            </ol>
          </div>

          <div className="personal-bulk__card hover-lift">
            <h3>⭐ Why Choose Khushal Enterprises?</h3>
            <ul className="bullet-grid">
              <li>Wide variety of personal care products</li>
              <li>Affordable pricing and regular offers</li>
              <li>User-friendly ordering system</li>
              <li>Secure payments and reliable delivery</li>
              <li>Customer-focused service</li>
            </ul>
          </div>
        </div>

        <div className="personal-bulk__cta hover-lift">
          <h3>Ready to stock up?</h3>
          <p>
            Keep your shelves ready with trusted personal care essentials. Order today for convenience, quality, and quick
            fulfillment.
          </p>
          <a href="/Contact" className="personal-bulk__button glow-button">Contact us for personal care orders</a>
        </div>
      </section>

      <section className="personal-grid">
        {personalHighlights.map((item, index) => (
          <Card key={index} {...item} variant="vertical" className="personal-card" />
        ))}
      </section>

      {personalCategory && (
        <section className="personal-category">
          <h2>What We Ship</h2>
          <div className="personal-category-card">
            <CategoryCard {...personalCategory} />
          </div>
        </section>
      )}

      <section className="personal-brands">
        <h2>Brands We Export</h2>
        <BrandMarquee logos={brandLogos} />
      </section>
    </>
  );
};

export default PersonalCare;
