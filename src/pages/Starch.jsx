import BrandMarquee from "../components/BrandMarquee";
import Card from "../components/card";
import Hero from "../components/Hero";
import "../styles/starch.css";
import brandLogos from "../utils/brandLogos";
import heroData from "../utils/heroData";
import groceryIcon from "../assets/categories/grocery.png";
import beverageIcon from "../assets/categories/beverage.png";
import homeIcon from "../assets/categories/home.png";

const starchHighlights = [
  {
    image: groceryIcon,
    title: "Food-Grade Starches",
    description: "Maize, potato, and tapioca starches for bakery, noodles, confectionery, and sauces.",
  },
  {
    image: beverageIcon,
    title: "Modified & Functional",
    description: "Pregel, oxidized, acetylated, and crosslinked grades tailored to viscosity and clarity needs.",
  },
  {
    image: homeIcon,
    title: "Industrial Applications",
    description: "Paper, textile, and adhesive-ready starches with moisture-controlled packing for export.",
  },
];

const Starch = () => {
  return (
    <>
      <Hero data={heroData.starch} />

      <section className="starch-intro">
        <p>
          We supply consistent starch grades with tight specs on moisture, whiteness, and granular stability. Lots
          are QC-checked, fumigated where required, and packed in export-ready bags—custom labeling and palletizing
          available to suit your distribution model.
        </p>
      </section>

      <section className="starch-grid">
        {starchHighlights.map((item, index) => (
          <Card key={index} {...item} variant="vertical" className="starch-card" />
        ))}
      </section>

      <section className="starch-brands">
        <h2>Brands & Partners We Ship</h2>
        <BrandMarquee logos={brandLogos} />
      </section>
    </>
  );
};

export default Starch;
