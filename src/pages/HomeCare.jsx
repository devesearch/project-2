import BrandMarquee from "../components/BrandMarquee";
import Card from "../components/card";
import CategoryCard from "../components/CategoryCard";
import Hero from "../components/Hero";
import "../styles/homeCare.css";
import brandLogos from "../utils/brandLogos";
import categoryData from "../utils/categoryData";
import heroData from "../utils/heroData";
import homeIcon from "../assets/categories/home.png";
import groceryIcon from "../assets/categories/grocery.png";
import personalIcon from "../assets/categories/personal.png";

const homeCareHighlights = [
  {
    image: homeIcon,
    title: "Surface & Fabric Care",
    description: "Detergents, dishwashers, glass cleaners, and fabric softeners packed for retail and horeca.",
  },
  {
    image: groceryIcon,
    title: "Utility & Hygiene",
    description: "Mops, wipes, sponges, disinfectants, and repellents designed for everyday upkeep.",
  },
  {
    image: personalIcon,
    title: "Air & Freshness",
    description: "Room fresheners, deodorizers, and specialty cleansers tailored to climate and preference.",
  },
];

const HomeCare = () => {
  const homeCategory = categoryData.find((cat) => cat.title === "Home Care");

  return (
    <>
      <Hero data={heroData.homeCare} />

      <section className="homecare-intro">
        <p>
          We assemble home care assortments that arrive shelf-ready: durable packaging, compliant labels, and
          category mixes tuned to local cleaning needs. From bulk horeca cartons to retail-friendly multipacks,
          we tailor SKUs for your channels.
        </p>
      </section>

      <section className="homecare-bulk animate-fade-up">
        <div className="homecare-bulk__text">
          <h2>Home Care – Khushal Enterprises</h2>
          <p>
            Keep every space fresh, safe, and ready for guests or family. We supply dependable cleaning and hygiene
            essentials with packaging optimized for retail, horeca, and facilities management.
          </p>
        </div>

        <div className="homecare-bulk__cards">
          <div className="homecare-bulk__card hover-lift">
            <h3>🧹 Our Home Care Range</h3>
            <p>Curated SKUs that cover daily upkeep and deep cleaning:</p>
            <ul>
              <li>Floor & Surface Care – floor cleaners, disinfectants, glass cleaners, multipurpose sprays</li>
              <li>Dish & Kitchen Care – dishwash liquids, bars, degreasers, oven and steel cleaners</li>
              <li>Laundry Care – detergents, fabric conditioners, stain removers</li>
              <li>Air Care & Freshness – room fresheners, deodorizers, odor neutralizers</li>
              <li>Pest & Hygiene – repellents, wipes, mops, sponges, gloves, bins</li>
            </ul>
            <p className="homecare-note">Shelf-ready packs plus horeca formats to match your channels.</p>
          </div>

          <div className="homecare-bulk__card hover-lift">
            <h3>🛒 Simple Ordering</h3>
            <p>We keep procurement predictable from cart to delivery:</p>
            <ol>
              <li>Select your items and pack sizes</li>
              <li>Confirm labeling and any local compliance needs</li>
              <li>Schedule dispatch and preferred incoterms</li>
              <li>Receive timely tracking and on-time delivery</li>
            </ol>
          </div>

          <div className="homecare-bulk__card hover-lift">
            <h3>⭐ Why Partner with Khushal?</h3>
            <ul className="homecare-bullet-grid">
              <li>Trusted household and institutional brands</li>
              <li>Balanced mixes for retail, horeca, and B2B</li>
              <li>Clear, compliant, multilingual labeling</li>
              <li>Steady inventory and reliable lead times</li>
              <li>Support on assortments and replenishment</li>
            </ul>
          </div>
        </div>

        <div className="homecare-bulk__cta hover-lift">
          <h3>Ready to refresh your shelves?</h3>
          <p>Bundle the right home care essentials with consistent supply, smart packaging, and export-ready docs.</p>
          <a href="/Contact" className="homecare-bulk__button glow-button">Contact us for home care orders</a>
        </div>
      </section>

      <section className="homecare-grid">
        {homeCareHighlights.map((item, index) => (
          <Card key={index} {...item} variant="vertical" className="homecare-card" />
        ))}
      </section>

      {homeCategory && (
        <section className="homecare-category">
          <h2>What We Ship</h2>
          <div className="homecare-category-card">
            <CategoryCard {...homeCategory} />
          </div>
        </section>
      )}

      <section className="homecare-brands">
        <h2>Brands We Export</h2>
        <BrandMarquee logos={brandLogos} />
      </section>
    </>
  );
};

export default HomeCare;
