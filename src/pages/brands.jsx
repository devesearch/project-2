import BrandMarquee from "../components/BrandMarquee";
import Card from "../components/card";
import Hero from "../components/Hero";
import "../styles/brands.css";
import logos from "../utils/brandLogos";
import servicelogos from "../utils/brands";
import cardsData from "../utils/CardsData";
import heroData from "../utils/heroData";
import servicesData from "../utils/servicesData";

const Brands = () => {
    return(
        <>
        <Hero data={heroData.BrandsImage} />

        {/* text-only card */}
        <section className="home-section">
            <div className="home-card-text-only2">
            <Card
            {...cardsData.TopBrands}
            variant="vertical"
            className="home-card-text2"
            />
        </div>
        </section>
      
        <section className="brands-section">
            <div className="brands-grid">
                {logos.map((logo, index) => (
                <Card
                    key={index}
                    image={logo}
                    variant="vertical"
                    className="brands-card"
                />
                ))}
            </div>
        </section>

        <h3 className="statement">Khushal Enterprises is an authorized exporter of multiple well-established FMCG brands, including Pillsbury, Unilever, Banjaras, Ching’s Secret, Fruity, Marico, Pigeon, and more. We specialize in distributing branded products efficiently across diverse international markets.</h3>

        <BrandMarquee logos={servicelogos} />

        {/* our services grid */}

            <h1 className="heading">Our Services</h1>

            <section className="services-section">
            <div className="services-grid">
                {servicesData.map((item, index) => (
                <Card
                    key={index}
                    {...item}
                    variant="vertical"
                    className={`service-card ${index === 0 ? "service-card--featured" : ""}`}
                />
                ))}
            </div>
            </section>
        </>
);
}
export default Brands
