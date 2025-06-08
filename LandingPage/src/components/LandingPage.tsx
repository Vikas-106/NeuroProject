import React from 'react';
import HeroSection from './HeroSection';
import ActionPotentialExplanation from './ActionPotentialExplanation';
import ModelsSection from './ModelsSection';
import CallToAction from './CallToAction';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white">
      <HeroSection />
      <ActionPotentialExplanation />
      <ModelsSection />
      <CallToAction />
    </div>
  );
};

export default LandingPage;