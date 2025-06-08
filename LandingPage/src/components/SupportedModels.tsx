import React from 'react';
import { Brain, Cpu, Zap, Activity, Target } from 'lucide-react';

const SupportedModels: React.FC = () => {
  const models = [
    {
      name: 'Hodgkin-Huxley Model',
      description: 'The gold standard biophysical model describing ionic currents in detail',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      features: ['Na⁺ and K⁺ channels', 'Biophysically accurate', 'Temperature effects'],
      complexity: 'High'
    },
    {
      name: 'FitzHugh-Nagumo Model',
      description: 'Simplified two-variable model capturing essential dynamics',
      icon: Activity,
      color: 'from-green-500 to-emerald-500',
      features: ['Fast-slow dynamics', 'Phase plane analysis', 'Oscillations'],
      complexity: 'Medium'
    },
    {
      name: 'Morris-Lecar Model',
      description: 'Two-variable model for calcium and potassium currents',
      icon: Zap,
      color: 'from-purple-500 to-violet-500',
      features: ['Ca²⁺ and K⁺ currents', 'Type I/II excitability', 'Bifurcation analysis'],
      complexity: 'Medium'
    },
    {
      name: 'Izhikevich Model',
      description: 'Efficient model reproducing various neuronal behaviors',
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      features: ['Multiple firing patterns', 'Computationally efficient', 'Bursting dynamics'],
      complexity: 'Low'
    },
    {
      name: 'Leaky Integrate-and-Fire',
      description: 'Simple threshold model for basic neuronal integration',
      icon: Target,
      color: 'from-pink-500 to-rose-500',
      features: ['Threshold mechanism', 'Synaptic integration', 'Refractory period'],
      complexity: 'Low'
    }
  ];

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Supported Mathematical Models
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore action potentials through different mathematical frameworks, from detailed biophysical models to simplified abstractions
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {models.map((model, index) => {
          const IconComponent = model.icon;
          return (
            <div
              key={model.name}
              className="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${model.color} rounded-xl flex items-center justify-center`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    model.complexity === 'High' ? 'bg-red-900/30 text-red-400 border border-red-700/30' :
                    model.complexity === 'Medium' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-700/30' :
                    'bg-green-900/30 text-green-400 border border-green-700/30'
                  }`}>
                    {model.complexity} Complexity
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {model.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {model.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                  {model.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${model.color} rounded-full`} />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${model.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 inline-block">
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-blue-400">Interactive Parameters:</span> Adjust model parameters in real-time
          </p>
          <p className="text-gray-400 text-sm">
            Compare different models side by side • Analyze phase portraits • Export simulation data
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportedModels;