import React from 'react';

const ProblemStatement = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            The Preparedness Gap in Indian Educational Institutions
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <p className="text-lg text-gray-700 mb-4">
              In India, schools and colleges are often unprepared for natural disasters such as earthquakes, floods, and fires. 
              While emergency guidelines exist on paper, there is a lack of structured disaster management education integrated 
              into the curriculum.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Institutions lack digital tools to simulate disaster scenarios or conduct virtual drills to train students and 
              staff on safety protocols. Furthermore, there's a gap in localized awareness—many students are unaware of how 
              to react during disasters specific to their region.
            </p>
            <p className="text-lg text-gray-700">
              Manual drills, where they occur, are infrequent and often poorly coordinated, failing to instill practical preparedness.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center text-gray-500">
              Infographic showing lack of preparedness
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Low Awareness</h3>
            <p className="text-gray-700">
              NDMA reports show low awareness levels in schools despite India's high disaster vulnerability index.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Lack of Tools</h3>
            <p className="text-gray-700">
              Educational institutions lack digital platforms for interactive disaster education and virtual drills.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Inadequate Training</h3>
            <p className="text-gray-700">
              Infrequent manual drills fail to instill practical preparedness in students and staff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;