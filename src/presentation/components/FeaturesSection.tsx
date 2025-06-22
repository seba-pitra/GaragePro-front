export const FeaturesSection = () => {
  return (
    <section className="bg-gray-800 py-16 px-6 text-center">
      <h3 className="text-2xl sm:text-3xl font-bold mb-10">Why Choose GaragePro?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div>
          <h4 className="text-xl font-semibold mb-2">Prime Location</h4>
          <p className="text-gray-300">
            We're located downtown so you're never far from where you need to be.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">24/7 Security</h4>
          <p className="text-gray-300">
            Your vehicle is safe with our around-the-clock surveillance and on-site staff.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Easy Booking</h4>
          <p className="text-gray-300">
            Reserve a parking spot anytime through our web app in just a few clicks.
          </p>
        </div>
      </div>
    </section>
  );
};
