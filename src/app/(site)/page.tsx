import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import About from "@/components/About";
import LatestArticles from "@/components/LatestArticles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <FeaturedProjects />
      <Experience />
      <TechnicalExpertise />
      <About />
      <LatestArticles />
      <Contact />
      <Footer />
    </div>
  );
}
