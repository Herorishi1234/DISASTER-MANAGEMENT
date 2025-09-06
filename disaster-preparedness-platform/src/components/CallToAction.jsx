import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start Building a Safer Campus Today
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-200">
          Join hundreds of institutions preparing for the unexpected with our comprehensive disaster preparedness platform
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold py-4 px-8 rounded-lg transition-colors text-lg">
            Register Your Institution
          </button>
          <button className="bg-transparent hover:bg-blue-800 text-white font-bold py-4 px-8 border-2 border-white rounded-lg transition-colors text-lg">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;