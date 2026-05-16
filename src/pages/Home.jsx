import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories/>
      <WhyChooseUs/>
      <FeaturedProducts />
    </>
  );
};

export default Home;