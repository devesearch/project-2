import BrandMarquee from "../components/BrandMarquee";
import Card from "../components/card";
import Hero from "../components/Hero";
import "../styles/agro.css";
import brandLogos from "../utils/brandLogos";
import heroData from "../utils/heroData";
import groceryIcon from "../assets/categories/grocery.png";
import beverageIcon from "../assets/categories/beverage.png";
import homeIcon from "../assets/categories/home.png";

const agroHighlights = [
  {
    image: groceryIcon,
    title: "Grains & Pulses",
    description: "Rice, wheat, lentils, chickpeas, and millets sourced from audited mills and processors.",
  },
  {
    image: beverageIcon,
    title: "Spices & Condiments",
    description: "Turmeric, cumin, coriander, pepper, and blended seasonings packed to your label specs.",
  },
  {
    image: homeIcon,
    title: "Oilseeds & Staples",
    description: "Sesame, groundnut, mustard, sugar, and flours consolidated for swift port clearances.",
  },
];

const AgroCommodities = () => {
  return (
    <>
      <Hero data={heroData.agro} />

      <section className="agro-intro">
        <p>
          We aggregate agro commodities directly from trusted farmer groups and certified processors, ensuring
          moisture control, grading, fumigation, and export documentation align with your destination standards.
          Custom bagging, private labels, and mixed-container loads are available to match your buying plan.
        </p>
      </section>

      <section className="agro-bulk animate-fade-up">
        <div className="agro-bulk__text">
          <h2>Agro Commodities – Khushal Enterprises</h2>
          <p>
            Quality farm products, trusted supply, and seamless orders—sourced directly from farmers and certified
            suppliers with transparent handling, storage, and documentation.
          </p>
        </div>

        <div className="agro-bulk__cards">
          <div className="agro-bulk__card hover-lift">
            <h3>🌾 Our Products</h3>
            <p>Agro commodities selected to meet quality and industry standards:</p>
            <ul>
              <li>Grains & Cereals – rice (basmati, non-basmati), wheat, maize, barley</li>
              <li>Pulses & Legumes – lentils (masoor, moong, toor), chickpeas, kidney beans</li>
              <li>Oilseeds & Spices – mustard seeds, groundnuts, sesame seeds, whole & processed spices</li>
              <li>Fresh Agro Produce – seasonal vegetables, fruits, farm-fresh lots (as available)</li>
            </ul>
            <p className="agro-note">All products pass quality checks, proper storage, and hygienic packaging.</p>
          </div>

          <div className="agro-bulk__card hover-lift">
            <h3>🛒 Order Process</h3>
            <p>Simple, fast, and reliable from catalog to delivery:</p>
            <ol>
              <li>Browse products with specs and availability</li>
              <li>Select quantity, packaging, and delivery preferences</li>
              <li>Get instant confirmation with pricing, schedule, and invoice</li>
              <li>Receive safe, timely delivery with tracked logistics</li>
            </ol>
          </div>

          <div className="agro-bulk__card hover-lift">
            <h3>⭐ Why Choose Khushal?</h3>
            <ul className="agro-bullet-grid">
              <li>Direct sourcing from farmers</li>
              <li>Competitive pricing and clear terms</li>
              <li>Quality assurance and lab checks</li>
              <li>Supports bulk and retail orders</li>
              <li>Transparent order tracking</li>
              <li>Customer-first service</li>
            </ul>
          </div>
        </div>

        <div className="agro-bulk__cta hover-lift">
          <h3>Bulk & Business Orders</h3>
          <p>
            Wholesalers, retailers, hotels, food processors, and exporters can secure customized pricing, steady supply,
            and dedicated support. Tell us your specs and incoterms—we will tailor the mix.
          </p>
          <a href="/Contact" className="agro-bulk__button glow-button">Contact us for agro supply</a>
        </div>
      </section>

      <section className="agro-grid">
        {agroHighlights.map((item, index) => (
          <Card key={index} {...item} variant="vertical" className="agro-card" />
        ))}
      </section>

      <section className="agro-brands">
        <h2>Brands & Partners We Ship</h2>
        <BrandMarquee logos={brandLogos} />
      </section>
    </>
  );
};

export default AgroCommodities;
