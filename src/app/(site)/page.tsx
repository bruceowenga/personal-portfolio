import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import About from "@/components/About";
import LatestArticles from "@/components/LatestArticles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Force dynamic rendering since components need database access
export const dynamic = 'force-dynamic';

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
