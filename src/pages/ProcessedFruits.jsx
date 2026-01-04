import BrandMarquee from "../components/BrandMarquee";
import Card from "../components/card";
import Hero from "../components/Hero";
import "../styles/processedFruits.css";
import brandLogos from "../utils/brandLogos";
import heroData from "../utils/heroData";
import beverageIcon from "../assets/categories/beverage.png";
import groceryIcon from "../assets/categories/grocery.png";
import personalIcon from "../assets/categories/personal.png";

const processedFruitHighlights = [
  {
    image: beverageIcon,
    title: "Juice & Nectar Bases",
    description: "Mango, guava, pineapple purees and concentrates for beverages and desserts.",
  },
  {
    image: groceryIcon,
    title: "Canned & Aseptic Packs",
    description: "Canned fruits, diced cups, and aseptic pouches with export-grade shelf life.",
  },
  {
    image: personalIcon,
    title: "Bakery & Dairy Inputs",
    description: "Fruit fillings, toppings, and flavor preps tailored for yogurts, ice creams, and bakery lines.",
  },
];

const ProcessedFruits = () => {
  return (
    <>
      <Hero data={heroData.processedFruit} />

      <section className="pf-intro">
        <p>
          We partner with certified processors to deliver consistent brix, color, and microbial specs. Lots are
          lab-tested, packed for ambient transport, and supported with documentation for swift customs clearance.
          Private label and portion-control formats available on request.
        </p>
      </section>

      <section className="pf-grid">
        {processedFruitHighlights.map((item, index) => (
          <Card key={index} {...item} variant="vertical" className="pf-card" />
        ))}
      </section>

      <section className="pf-brands">
        <h2>Brands & Partners We Ship</h2>
        <BrandMarquee logos={brandLogos} />
      </section>
    </>
  );
};

export default ProcessedFruits;
