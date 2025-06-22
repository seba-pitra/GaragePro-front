import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { TestimonialSection } from '../components/TestimonialSection';
import { CallToActionSection } from '../components/CallToActionSection';

export default function Home() {
  return (
    <main className="mt-10 min-h-screen bg-gray-900 text-white flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <CallToActionSection />
    </main>
  );
}
