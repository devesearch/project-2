import BrandMarquee from "../components/BrandMarquee";
import Card from "../components/card";
import Carousel from "../components/carousel";
import CategoryCard from "../components/CategoryCard";
import WhyChooseUs from "../components/WhyChooseUs";
import "../styles/home.css";
import brandLogos from "../utils/brandLogos";
import cardsData from "../utils/CardsData";
import images from "../utils/carousel";
import categoryData from "../utils/categoryData";



const Home = () => {

  return (
  <>
      <Carousel images={images} />

      {/*Row Cards */}
      <section className="home-section">
        <div className="home-card-row">
          {cardsData.row.map((item, index) => (
            <Card
              key={index}
              {...item}
              variant="vertical"
              className="home-card"
            />
          ))}
        </div>
      </section>

      <BrandMarquee logos={brandLogos} />

      {/* single card */}
      <section className="home-section">
        <div className="home-card-single-wrapper">
          <Card
            {...cardsData.single}
            variant="horizontal"
            className="home-card-single"
          />
        </div>
      </section>

      {/* text-only card */}
      <section className="home-section">
        <div className="home-card-text-only">
        <Card
          {...cardsData.textOnly}
          variant="vertical"
          className="home-card-text"
        />
      </div>
      </section>

      {/* CategoryCard */}

      <div className="category-grid">
        {categoryData.map((cat, index) => (
          <CategoryCard key={index} {...cat} />
        ))}
      </div>

      {/* text-only card */}
      <section className="home-section">
        <div className="home-card-text-only2">
        <Card
          {...cardsData.textOnly2}
          variant="vertical"
          className="home-card-text2"
        />
      </div>
      </section>

      <WhyChooseUs />

      {/* text-only card2 */}
      <section className="home-section">
        <div className="home-card-text-only2">
        <Card
          {...cardsData.textOnly3}
          variant="vertical"
          className="home-card-text2"
        />
      </div>
      </section>
    </>
);
}

export default Home;
