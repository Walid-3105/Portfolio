import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";
import VideoSection from "../components/VideoSection";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Services />
      <VideoSection />
      <Testimonials />
      <BlogSection />
    </div>
  );
};

export default Home;
