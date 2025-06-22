export const TestimonialSection = () => {
  return (
    <section className="py-16 px-6">
      <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">What Our Customers Say</h3>
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <p className="italic">
            "GaragePro saved me so much time. It's clean, secure, and so easy to use."
          </p>
          <p className="mt-4 text-yellow-400 font-semibold">- Maria G.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <p className="italic">
            "As a local business owner, I appreciate the reliable parking for my staff and clients."
          </p>
          <p className="mt-4 text-yellow-400 font-semibold">- James L.</p>
        </div>
      </div>
    </section>
  );
};
