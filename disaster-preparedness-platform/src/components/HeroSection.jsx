import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-blue-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Preparing Tomorrow's Leaders for Today's Emergencies
          </h1>
          <p className="text-xl mb-8 text-blue-200">
            Interactive disaster education and virtual drills for schools and colleges
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="bg-transparent hover:bg-blue-800 text-white font-bold py-3 px-6 border-2 border-white rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
            Abstract illustration of a safe school environment during/after a disaster drill
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;