import BrandMarquee from "../components/BrandMarquee";
import Card from "../components/card";
import CategoryCard from "../components/CategoryCard";
import Hero from "../components/Hero";
import "../styles/groceries.css";
import brandLogos from "../utils/brandLogos";
import categoryData from "../utils/categoryData";
import heroData from "../utils/heroData";
import beverageIcon from "../assets/categories/beverage.png";
import groceryIcon from "../assets/categories/grocery.png";
import homeIcon from "../assets/categories/home.png";

const groceryFeatures = [
  {
    image: groceryIcon,
    title: "Pantry Essentials",
    description: "Rice, pulses, flours, oils, and staples packed to your label and specification.",
  },
  {
    image: beverageIcon,
    title: "Snacks & Beverages",
    description: "Juices, ready-to-drink teas, biscuits, chocolates, and on-the-go nibble packs.",
  },
  {
    image: homeIcon,
    title: "Everyday Convenience",
    description: "Canned goods, sauces, breakfast mixes, and instant meals for quick turnaround.",
  },
];

const Groceries = () => {
  const groceryCategory = categoryData.find((cat) => cat.title === "Groceries");

  return (
    <>
      <Hero data={heroData.groceries} />

      <section className="groceries-intro">
        <p>
          We source trusted grocery lines from leading Indian manufacturers and global brands,
          consolidating containers that arrive shelf-ready with compliant labeling, sturdy packaging,
          and dependable lead times.
        </p>
      </section>

      <section className="groceries-bulk animate-fade-up">
        <div className="groceries-bulk__text">
          <h2>Grocery Products & Bulk Orders</h2>
          <p>
            At Khushal Enterprises, we offer a wide range of high-quality grocery products designed to meet both
            daily household needs and large-scale bulk requirements. Our focus is on freshness, affordability,
            and reliable supply.
          </p>
        </div>

        <div className="groceries-bulk__cards">
          <div className="groceries-bulk__card hover-lift">
            <h3>🥦 Our Grocery Products</h3>
            <p>We provide carefully sourced grocery items, including:</p>
            <ul>
              <li>Fresh fruits and vegetables</li>
              <li>Rice, wheat, pulses, and grains</li>
              <li>Cooking oils, spices, and condiments</li>
              <li>Packaged and branded food items</li>
              <li>Daily essentials and household groceries</li>
            </ul>
            <p className="note">Every product goes through strict quality checks to ensure freshness, hygiene, and value for money.</p>
          </div>

          <div className="groceries-bulk__card hover-lift">
            <h3>📦 Bulk Order Solutions</h3>
            <p>We specialize in bulk grocery supply for:</p>
            <ul>
              <li>Restaurants & hotels</li>
              <li>Cafes & food chains</li>
              <li>Hostels & PGs</li>
              <li>Offices & corporate canteens</li>
              <li>Event organizers & retailers</li>
            </ul>
            <h4>Why choose us for bulk orders?</h4>
            <ul className="bullet-grid">
              <li>Competitive wholesale pricing</li>
              <li>Consistent quality and quantity</li>
              <li>Custom order packaging</li>
              <li>Timely and reliable delivery</li>
              <li>Dedicated support for large orders</li>
            </ul>
          </div>
        </div>

        <div className="groceries-bulk__cta hover-lift">
          <h3>🤝 Trusted Supply Partner</h3>
          <p>
            Whether you need groceries for your home or bulk supplies for your business, Khushal Enterprises is your
            trusted partner for quality groceries at the best prices.
          </p>
          <a href="/Contact" className="groceries-bulk__button glow-button">Contact us for bulk inquiries</a>
        </div>
      </section>

      <section className="groceries-system animate-fade-up">
        <div className="groceries-system__text">
          <h2>My Super Store – Smart Shopping, Seamless Management</h2>
          <p>
            A modern digital platform built for performance, usability, and scale. It simplifies product management and
            streamlines customer orders so store owners and shoppers both enjoy a smooth experience.
          </p>
        </div>

        <div className="groceries-system__grid">
          <div className="groceries-system__card hover-lift">
            <h3>🛒 Product Management</h3>
            <p>Everything you need, perfectly organized with real-time control.</p>
            <ul>
              <li>Easy product add, update, and removal</li>
              <li>Organized categories for quick browsing</li>
              <li>Real-time stock availability</li>
              <li>Detailed product info with pricing and images</li>
              <li>Secure, efficient database management</li>
            </ul>
            <p>Customers always see accurate products while you keep full inventory control.</p>
          </div>

          <div className="groceries-system__card hover-lift">
            <h3>📦 Order Management</h3>
            <p>Fast, reliable, and transparent from checkout to delivery.</p>
            <ul>
              <li>Quick and secure order placement</li>
              <li>Real-time order status tracking</li>
              <li>Automated order history for customers</li>
              <li>Admin dashboard for monitoring</li>
              <li>Error handling for invalid or failed orders</li>
            </ul>
            <p>A reliable ordering experience that boosts trust and efficiency.</p>
          </div>
        </div>

        <div className="groceries-system__cta hover-lift">
          <h3>Why My Super Store?</h3>
          <p>Designed for modern retail workflows with a user-friendly interface, secure scalable architecture, and efficient data design.</p>
          <a href="/Contact" className="groceries-system__button glow-button">Talk to us about My Super Store</a>
        </div>
      </section>

      <section className="groceries-fruits animate-fade-up">
        <div className="groceries-fruits__text">
          <h2>Processed Fruits – Freshness Preserved, Quality Guaranteed</h2>
          <p>
            Premium processed fruits made from carefully selected, farm-fresh lots. Methods that retain natural taste and
            nutrition, delivering convenience without compromising health for households and businesses.
          </p>
        </div>

        <div className="groceries-fruits__grid">
          <div className="groceries-fruits__card hover-lift">
            <h3>🥭 Our Product Range</h3>
            <p>Hygienically processed fruit products, ready for retail or bulk:</p>
            <ul className="groceries-fruits__list">
              <li>Dried Fruits – mango, apple, banana, pineapple, papaya</li>
              <li>Frozen Fruits – berries, mixed fruits, seasonal lots</li>
              <li>Fruit Pulp & Purees – mango, guava, strawberry</li>
              <li>Canned Fruits – peaches, pineapple slices, fruit cocktail</li>
              <li>Fruit-Based Products – jams, preserves, concentrates</li>
            </ul>
            <p>All products are FSSAI compliant, free from harmful preservatives, and packed in food-grade materials.</p>
          </div>

          <div className="groceries-fruits__card hover-lift">
            <h3>🛒 Order Process (Simple & Fast)</h3>
            <p>Clear steps from browse to delivery:</p>
            <ol>
              <li>Browse products and select items</li>
              <li>Choose quantity and packaging (retail or bulk)</li>
              <li>Add to cart and review</li>
              <li>Place order with secure checkout</li>
              <li>Get fast, reliable doorstep delivery</li>
            </ol>
            <p>For bulk or business orders, contact us for customized pricing.</p>
          </div>

          <div className="groceries-fruits__card hover-lift">
            <h3>⭐ Why Choose My Super Store?</h3>
            <ul className="groceries-fruits__list">
              <li>Premium quality products</li>
              <li>Affordable pricing</li>
              <li>Hygienic processing and packaging</li>
              <li>Reliable supply chain</li>
              <li>Customer satisfaction guaranteed</li>
            </ul>
            <h4>📦 Perfect For</h4>
            <ul className="groceries-fruits__list">
              <li>Home consumption</li>
              <li>Restaurants and cafes</li>
              <li>Hotels and catering services</li>
              <li>Retail and wholesale buyers</li>
            </ul>
          </div>
        </div>

        <div className="groceries-fruits__cta hover-lift">
          <h3>Ready to stock processed fruits?</h3>
          <p>Lock in fresh-tasting, compliant, and well-packed processed fruits for retail or bulk supply.</p>
          <a href="/Contact" className="groceries-fruits__button glow-button">Contact us for processed fruits</a>
        </div>
      </section>

      <section className="groceries-grid">
        {groceryFeatures.map((item, index) => (
          <Card key={index} {...item} variant="vertical" className="grocery-card" />
        ))}
      </section>

      {groceryCategory && (
        <section className="groceries-category">
          <h2>What We Ship</h2>
          <div className="groceries-category-card">
            <CategoryCard {...groceryCategory} />
          </div>
        </section>
      )}

      <section className="groceries-brands">
        <h2>Brands We Export</h2>
        <BrandMarquee logos={brandLogos} />
      </section>
    </>
  );
};

export default Groceries;
