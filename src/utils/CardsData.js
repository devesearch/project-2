import card1 from "../assets/images/card-1.png";
import card2 from "../assets/images/card-2.png";
import card3 from "../assets/images/card-3.png";
import single from "../assets/images/card-4.png";
import exportus from "../assets/images/export.png";
import mission from "../assets/images/mission.png";
import whowe from "../assets/images/whowe.png";

const phone = import.meta.env.VITE_PHONE_NUMBER;

const cardsData = {
  row: [
    {
      image: card1,
      title: "100% Organic Product",
      description: "Natural, Pure, Healthy – Straight from the Source.",
    },
    {
      image: card2,
      title: "100% Certified for Quality",
      description: "Tested, Trusted, and Guaranteed for Every Use.",
    },
    {
      image: card3,
      title: "Pure Goodness",
      description: "Fresh, Safe, and Reliable – Every Single Time",
    },
  ],
  single: {
    image: single,
    title: "About us Khushal Enterprises – Brand in Bulk",
    description:
      "At Khushal Enterprises, we export high-demand FMCG goods globally, aiming to become a top FMCG exporter in India by expanding our product range with leading brands. We help FMCG producers grow internationally at competitive wholesale prices. Our expert team ensures smooth and efficient results with quick and tailored trade solutions. Trust Khushal Enterprises for reliable and efficient global FMCG exports.",
    buttonText: "Learn More",
    buttonLink: "/About",
  },
  textOnly: {
    title: "Everyday Essentials, Delivered with Care.",
    description:
      "Khushal Enterprises – Trusted for exporting quality products worldwide with efficient solutions, freshness, and reliable service.",
  },
  textOnly2: {
    title: "Khushal Enterprises – Your Trusted Partner in FMCG Exports",
    description:
      "Khushal Enterprises stands as your primary supporter for exporting Fast-Moving Consumer Goods (FMCG). As a specialized company we export high-demand FMCG to global markets. Our mission focuses on linking premier brand offerings with global purchasing entities so both international clients and manufacturers obtain steady access to vital products. Our extensive product line with competitive wholesale pricing and effective export solutions enables FMCG producers to establish worldwide markets by giving businesses top-tier products at budget-friendly costs. We have trade solutions which perfectly suit every stage of your supply chain from product retailers to distributors and wholesalers alike.",
    buttonText: "Order in bulk - Call Now",
    buttonLink: `tel:${phone}`,
  },
  textOnly3: {
    title: "Growing Together with Khushal Enterprises",
    description:
      "Our policy at Khushal Enterprises centers on developing enduring alliances between our clients. The company facilitates global expansion for producers and suppliers through efficient trade solutions that connect them to worldwide markets. We serve wholesalers and distributors needing bulk purchases of low-cost goods, supermarkets and retail chains requiring continuous availability of high-quality products, and online sellers operating in e-commerce platforms who need brand-name products. At Khushal Enterprises you can establish partnerships to advance your business by acquiring globally known products of the highest quality through our trusted platform.",
  },
  aboutsingle: {
    image: single,
    title: "About us Khushal Enterprises – Brand in Bulk",
    description:
      "Khushal Enterprises focuses on supplying high-demand FMCG products to international markets through structured planning and reliable execution. Our goal is to grow as a trusted Indian FMCG export company by expanding our product range with leading brands.We work closely with FMCG manufacturers seeking global reach by offering efficient wholesale export solutions. Our experienced team manages inquiries accurately, ensuring smooth and timely trade operations.",
  },
  ourmission: {
    image: mission,
    title: "Our Mission",
    description:
      "Khushal Enterprises exports high-demand FMCG products to international markets through a structured, efficient, and market-driven approach. We aim to strengthen our position as a trusted Indian FMCG exporter by continuously expanding our portfolio with well-known and reliable brands. As an independent organization, we help FMCG manufacturers achieve international growth through competitive wholesale export solutions. Our skilled global trade team handles inquiries with professionalism and dedication, ensuring smooth coordination, timely execution, and dependable results for our clients.",
  },
  WhoWeAre: {
    image: whowe,
    title: "Who We Are",
    description:
      "Khushal Enterprises is committed to supplying quality FMCG products in bulk to business customers across international markets. We operate as a wholesale exporter dealing in a wide range of products, including groceries, beverages, personal care items, home care supplies, and processed foods. The company was established to simplify bulk procurement by offering cost-effective solutions for businesses requiring flexible order quantities. Supported by a strong supply chain network and reliable global partnerships, Khushal Enterprises delivers trusted brands at competitive prices with efficient and timely international delivery.",
  },
  Export: {
    image: exportus,
    title: "Export Experience",
    description:
      "Exporting FMCG products requires strict quality control, regulatory compliance, and efficient logistics management. At Khushal Enterprises, we ensure proper packaging, accurate labeling, and full adherence to international safety standards. Essential export documentation is carefully managed to enable smooth customs clearance, while specialized handling is arranged for temperature-sensitive goods. By working with trusted logistics partners, we ensure safe, timely delivery to global markets.Global Quality. Delivered with Care.",
  },
  TopBrands:{
    title: "Top Global Brands",
    description:
      "Khushal Enterprises supplies a wide range of trusted, internationally recognized FMCG products to global buyers. Partnering with us gives you access to high-quality brands, efficient export processes, competitive pricing, and prompt delivery. Our experienced team ensures reliable handling at every stage, supporting smooth trade operations and helping your business expand confidently in international markets.",
    buttonText: "call",
    buttonLink: `tel:${phone}`,
  }
};

export default cardsData;