import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ProblemStatement from './ProblemStatement';
import SolutionFeatures from './SolutionFeatures';
import StakeholderBenefits from './StakeholderBenefits';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      <Header />
      <main>
        <HeroSection />
        <ProblemStatement />
        <SolutionFeatures />
        <StakeholderBenefits />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;