import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto">
      <HeroSection />
      <About />
      <Services />
    </div>
  );
};

export default Home;
