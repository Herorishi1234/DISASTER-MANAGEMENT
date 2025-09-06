import React, { useState } from 'react';

const StakeholderBenefits = () => {
  const [activeTab, setActiveTab] = useState('students');
  
  const stakeholders = {
    students: {
      title: "For Students",
      description: "Learn and practice safety protocols through interactive modules and gamified experiences.",
      benefits: [
        "Engaging disaster education modules",
        "Virtual drills to practice emergency responses",
        "Quizzes and challenges to reinforce learning",
        "Real-time alerts during actual emergencies"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    teachers: {
      title: "For Teachers",
      description: "Conduct drills and monitor student progress with comprehensive tools.",
      benefits: [
        "Easy-to-use drill scheduling system",
        "Progress tracking for each student",
        "Customizable educational content",
        "Real-time communication during emergencies"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    admins: {
      title: "For Administrators",
      description: "Track institutional readiness and compliance with disaster preparedness standards.",
      benefits: [
        "Institution-wide preparedness dashboard",
        "Drill participation and performance analytics",
        "Resource allocation planning tools",
        "Compliance reporting features"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    parents: {
      title: "For Parents",
      description: "Stay informed and involved in your child's disaster preparedness education.",
      benefits: [
        "Real-time emergency notifications",
        "Access to educational resources",
        "Progress reports on preparedness training",
        "Communication channels with schools"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Built for Everyone Involved
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our platform addresses the needs of all stakeholders in the educational ecosystem
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-wrap justify-center mb-8 border-b">
          {Object.keys(stakeholders).map((stakeholder) => (
            <button
              key={stakeholder}
              className={`py-4 px-6 font-semibold text-lg transition-colors ${
                activeTab === stakeholder
                  ? 'text-blue-900 border-b-2 border-amber-500'
                  : 'text-gray-600 hover:text-blue-900'
              }`}
              onClick={() => setActiveTab(stakeholder)}
            >
              {stakeholders[stakeholder].title}
            </button>
          ))}
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8 md:p-12 shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              {stakeholders[activeTab].icon}
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {stakeholders[activeTab].title}
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                {stakeholders[activeTab].description}
              </p>
              <ul className="space-y-3">
                {stakeholders[activeTab].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeholderBenefits;