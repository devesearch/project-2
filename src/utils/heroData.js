import graph from "../assets/brands/graphs.png";
import about from "../assets/hero/about-image.jpeg";
import aboutsecond from "../assets/hero/about-second.jpeg";

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
      "Bulk Buddy delivers high-demand FMCG goods worldwide, aiming to be India’s top exporter. We offer competitive pricing, expert handling, and fast, reliable trade solutions.",
    buttonText: "Request a Quote",
    buttonLink: "",
    image: aboutsecond,
    height: "100vh",
  },
  BrandsImage: {
    type: "image",
    image: graph,
    height: "130vh",
  },
  contact: {
    type: "overlay",
    title: "Contact Us",
    subtitle:
      "",
    buttonText: "Contact Us",
    buttonLink: "",
    image: aboutsecond,
    height: "100vh",
  },
};

export default heroData;
