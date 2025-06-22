import { Link } from 'react-router-dom';
import { Button } from './Button';

export const CallToActionSection = () => {
  return (
    <section className="bg-yellow-400 text-black py-16 px-6 text-center">
      <h3 className="text-2xl sm:text-3xl font-bold mb-6">Ready to reserve your spot?</h3>
      <Link to="/reserve">
        <Button className="bg-black text-white hover:bg-gray-800 text-base sm:text-lg px-6 py-3">
          Get Started
        </Button>
      </Link>
    </section>
  );
};
