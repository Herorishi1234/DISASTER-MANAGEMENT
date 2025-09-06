import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Since implementing this platform, our students are much more confident in emergency situations. The virtual drills have been particularly effective in preparing them for real-life scenarios.",
      author: "Dr. Priya Sharma",
      position: "Principal, Green Valley Public School",
      institution: "Kerala"
    },
    {
      quote: "The gamified approach to disaster education has significantly improved student engagement. What used to be a boring topic is now one of the most popular modules among our students.",
      author: "Rajesh Kumar",
      position: "Head of Department, Science",
      institution: "Delhi Public School"
    },
    {
      quote: "As a parent, I feel much more at ease knowing that my child's school is using such a comprehensive platform for disaster preparedness. The real-time communication feature is a game-changer.",
      author: "Anita Desai",
      position: "Parent",
      institution: "Mumbai"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What Educational Leaders Say
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from institutions that have transformed their disaster preparedness approach
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-amber-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 text-lg italic mb-6">"{testimonial.quote}"</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-blue-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.position}</p>
                <p className="text-gray-600">{testimonial.institution}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-16 flex items-center justify-center text-gray-500">
            Institution Logo
          </div>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-16 flex items-center justify-center text-gray-500">
            Institution Logo
          </div>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-16 flex items-center justify-center text-gray-500">
            Institution Logo
          </div>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-16 flex items-center justify-center text-gray-500">
            Institution Logo
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;