import React from 'react';
import { Brain, Zap, ArrowRight } from 'lucide-react';
import NeuronDiagram from './NeuronDiagram';

const HeroSection: React.FC = () => {
  const handleStartSimulating = () => {
    window.location.href = 'https://neuro-project.vercel.app/';
  };

  return (
    <section className="relative px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Brain className="w-10 h-10 text-blue-400" />
            <Zap className="w-8 h-8 text-yellow-400" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Explore the World of
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Action Potentials
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Understand how neurons fire, learn the underlying biophysics, and simulate 
            real neural behavior using different mathematical models.
          </p>

          <button
            onClick={handleStartSimulating}
            className="group relative bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 mx-auto text-lg mb-12"
          >
            <span>Start Simulating</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="max-w-5xl mx-auto">
          <NeuronDiagram />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
