import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import FeaturedProjects from '@/components/featured-projects';
import TechSection from '@/components/sections/tech-section';
import YogaSection from '@/components/sections/yoga-section';
import ArtSection from '@/components/sections/art-section';
import JourneySection from '@/components/sections/journey-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0B0F17]">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <TechSection />
      <YogaSection />
      <ArtSection />
      <JourneySection />
      <Footer />
    </main>
  );
}
