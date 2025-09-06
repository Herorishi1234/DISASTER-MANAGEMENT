import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-white text-blue-900 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold">DisasterReady</h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li> {/* Links to HeroSection.jsx */}
            <li><a href="#features" className="hover:text-amber-400 transition-colors">Features</a></li> {/* Links to SolutionFeatures.jsx */}
            <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li> {/* Links to ProblemStatement.jsx */}
            <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li> {/* Links to Footer.jsx */}
          </ul>
        </nav>
        
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">Login</button>
          <button className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold px-4 py-2 rounded-md transition-colors">Sign Up</button>
        </div>
        
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;