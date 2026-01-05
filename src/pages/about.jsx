import Card from "../components/card";
import CtaBanner from "../components/ctaBanner";
import Hero from "../components/Hero";
import "../styles/about.css";
import cardsData from "../utils/CardsData";
import { ctaHome } from "../utils/ctaData";
import heroData from "../utils/heroData";
import servicesData from "../utils/servicesData";

const About = () => {
    return(
        <>
            <Hero data={heroData.simpleImage} />

            {/* single card */}
            <section className="home-section">
                <div className="about-card-single-wrapper">
                <Card
                    {...cardsData.aboutsingle}
                    variant="horizontal"
                    className="about-card-single"
                />
                </div>
            </section>

            <CtaBanner text={ctaHome.text} phone={ctaHome.phone} />

            <Hero data={heroData.imageback} />

            {/* card-horizontal */}
            <section className="home-section">
                <div className="about-card-single-wrapper">
                <Card
                    {...cardsData.ourmission}
                    variant="image-right"
                    className="about-card-single"
                />
                </div>

                <div className="about-card-single-wrapper">
                <Card
                    {...cardsData.WhoWeAre}
                    variant="horizontal"
                    className="about-card-single"
                />
                </div>

                <div className="about-card-single-wrapper">
                <Card
                    {...cardsData.Export}
                    variant="image-right"
                    className="about-card-single"
                />
                </div>
            </section>

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
export default About;