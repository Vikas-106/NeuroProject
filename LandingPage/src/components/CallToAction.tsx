import React from 'react';
import { ArrowRight, Play, BookOpen } from 'lucide-react';

const CallToAction: React.FC = () => {
  const handleStartSimulating = () => {
    window.location.href = 'https://neuro-project.vercel.app/';
  };

  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-3xl" />
        
        <div className="relative bg-gray-800/40 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Play className="w-10 h-10 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-ping opacity-20" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Put your knowledge into practice with our interactive simulator. Experiment with different models, 
            adjust parameters, and see how action potentials behave in real-time.
          </p>

          <button
            onClick={handleStartSimulating}
            className="group relative bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 mx-auto text-lg"
          >
            <span>Start Simulating</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-700/50">
            <div className="flex flex-col items-center text-center">
              <BookOpen className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-lg font-semibold text-white mb-1">Educational</div>
              <div className="text-sm text-gray-400">Perfect for students and researchers</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Play className="w-8 h-8 text-green-400 mb-2" />
              <div className="text-lg font-semibold text-white mb-1">Interactive</div>
              <div className="text-sm text-gray-400">Real-time parameter adjustment</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div className="text-lg font-semibold text-white mb-1">Models</div>
              <div className="text-sm text-gray-400">From simple to complex</div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm">Free • No Registration Required • Open Source</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
