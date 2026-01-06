import about from "../assets/hero/about-image.jpeg";
import aboutsecond from "../assets/hero/about-second.jpeg";
import contactu from "../assets/hero/contacu.png";
import agroImg from "../assets/images/AgroCommodities.png";
import beverageImg from "../assets/images/Beverage.png";
import graph from "../assets/images/graphs.png";
import groceriesImg from "../assets/images/Groceries.png";
import homeCareImg from "../assets/images/HomeCare.png";
import personalCareImg from "../assets/images/PersonalCare.png";
import processedFruitsImg from "../assets/images/ProcessedFruits.jpeg";
import starchImg from "../assets/images/Starch.jpeg";

const phone = import.meta.env.VITE_PHONE_NUMBER;
const email = import.meta.env.VITE_EMAIL_ADDRESS;

const heroData = {
  
  simpleImage: {
    type: "image",
    image: about,
    height: "90vh",
  },
  imageback: {
    type: "overlay",
    title: "Global Reach, Trusted Delivery.",
    subtitle:
      "Khushal Enterprises delivers high-demand FMCG goods worldwide, aiming to be India’s top exporter. We offer competitive pricing, expert handling, and fast, reliable trade solutions.",
    buttonText: "Request a Quote",
    buttonLink: "/Contact",
    image: aboutsecond,
    height: "100vh",
  },
  BrandsImage: {
    type: "image",
    image: graph,
    height: "130vh",
  },
  groceries: {
    type: "overlay",
    title: "Groceries, Ready for Global Shelves",
    subtitle:
      "Staples, snacks, and packaged essentials sourced with care and shipped with speed for your markets.",
    buttonText: "Request Catalog",
    buttonLink: "/Contact",
    image: groceriesImg,
    height: "90vh",
  },
  beverage: {
    type: "overlay",
    title: "Beverages to Refresh Every Aisle",
    subtitle:
      "From bottled water to functional drinks, we assemble beverage lines tailored to your market needs.",
    buttonText: "Talk to Us",
    buttonLink: `tel:${phone}`,
    image: beverageImg,
    height: "90vh",
  },
  personalCare: {
    type: "overlay",
    title: "Personal Care for Every Routine",
    subtitle:
      "Skin, hair, baby, and hygiene essentials sourced from trusted brands, packed to your market specs.",
    buttonText: "Plan Your Assortment",
    buttonLink: "/Contact",
    image: personalCareImg,
    height: "90vh",
  },
  homeCare: {
    type: "overlay",
    title: "Home Care Built for Daily Use",
    subtitle:
      "Cleaners, detergents, air care, and utilities bundled for modern households and horeca needs.",
    buttonText: "Book a Call",
    buttonLink: `tel:${phone}`,
    image: homeCareImg,
    height: "90vh",
  },
  agro: {
    type: "overlay",
    title: "Agro Commodities, Sourced at Scale",
    subtitle:
      "Grains, pulses, spices, and staples procured from trusted growers with export-ready documentation.",
    buttonText: "Request Catalogue",
    buttonLink: `mailto:${email}`,
    image: agroImg,
    height: "90vh",
  },
  starch: {
    type: "overlay",
    title: "Starches for Food and Industry",
    subtitle:
      "Native and modified starches curated for bakery, confectionery, paper, and textile applications.",
    buttonText: "Request Specs",
    buttonLink: "/Contact",
    image: starchImg,
    height: "90vh",
  },
  processedFruit: {
    type: "overlay",
    title: "Processed Fruit Products, Ready to Ship",
    subtitle:
      "Purees, concentrates, canned fruits, and ready-to-serve packs sourced from certified processors.",
    buttonText: "Request Samples",
    buttonLink: "/Contact",
    image: processedFruitsImg,
    height: "90vh",
  },
  contact: {
    type: "overlay",
    title: "Contact Us",
    subtitle:
      "",
    buttonText: "Contact Us",
    buttonLink: `mailto:${email}`,
    image: contactu,
    height: "100vh",
  },
};

export default heroData;
