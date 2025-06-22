import garageImg from '@/assets/garagepro.png';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-8 py-16 lg:py-20 flex-grow animate-fade-in gap-12 lg:gap-24">
      <div className="max-w-xl text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Your Trusted Parking Solution in Town
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8">
          GaragePro is your local go-to for secure, fast, and convenient parking. Located in the
          heart of the city, we make finding a spot stress-free.
        </p>
        <Link to="/reserve">
          <Button className="text-base sm:text-lg px-6 py-3">Book a Spot</Button>
        </Link>
      </div>
      <div className="flex justify-center lg:justify-end w-full max-w-md">
        <img
          src={garageImg}
          alt="Parking illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>
    </section>
  );
};
