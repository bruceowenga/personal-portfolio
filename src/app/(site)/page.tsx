import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import Ventures from "@/components/Ventures";
import OpenSourceContributions from "@/components/OpenSourceContributions";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import LatestArticles from "@/components/LatestArticles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Force dynamic rendering since components need database access
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <StatsBar />
      <FeaturedProjects />
      <Experience />
      <TechnicalExpertise />
      <Ventures />
      <OpenSourceContributions />
      <About />
      <Testimonials />
      <LatestArticles />
      <Contact />
      <Footer />
    </div>
  );
}
