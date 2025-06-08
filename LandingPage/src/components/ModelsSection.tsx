import React from 'react';
import { Brain, Activity, Zap, Cpu } from 'lucide-react';

const ModelsSection: React.FC = () => {
  const models = [
    {
      name: 'Hodgkin-Huxley Model',
      description: 'Biophysically detailed model simulating real squid axon behavior using ion channel dynamics.',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      complexity: 'High',
      equation: 'C(dV/dt) = -gNa·m³·h·(V-ENa) - gK·n⁴·(V-EK) - gL·(V-EL) + I',
      features: [
        'Four coupled differential equations',
        'Voltage-gated Na+ and K+ channels',
        'Temperature-dependent kinetics',
        'Biophysically accurate'
      ]
    },
    {
      name: 'FitzHugh-Nagumo Model',
      description: 'A simplified 2D model capturing excitability and recovery phases with minimal complexity.',
      icon: Activity,
      color: 'from-green-500 to-emerald-500',
      complexity: 'Medium',
      equation: 'dv/dt = v - v³/3 - w + I, dw/dt = ε(v + a - bw)',
      features: [
        'Two-variable system',
        'Fast-slow dynamics',
        'Phase plane analysis',
        'Oscillatory behavior'
      ]
    },
    {
      name: 'Morris-Lecar Model',
      description: 'A hybrid model combining simplicity and realism, modeling barnacle muscle fibers.',
      icon: Zap,
      color: 'from-purple-500 to-violet-500',
      complexity: 'Medium',
      equation: 'C(dV/dt) = -gCa·m∞(V)·(V-ECa) - gK·w·(V-EK) - gL·(V-EL) + I',
      features: [
        'Calcium and potassium currents',
        'Type I/II excitability',
        'Bifurcation analysis',
        'Reduced complexity'
      ]
    },
    {
      name: 'Leaky Integrate-and-Fire (LIF) Model',
      description: 'A basic threshold-based model used in spiking neural networks.',
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      complexity: 'Low',
      equation: 'τ(dV/dt) = -(V-Vrest) + R·I, if V ≥ Vth then V → Vreset',
      features: [
        'Simple threshold mechanism',
        'Synaptic integration',
        'Refractory period',
        'Computational efficiency'
      ]
    }
  ];

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Models Included in This Simulator
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Explore different mathematical approaches to modeling action potentials, from detailed biophysical 
          models to simplified abstractions used in computational neuroscience.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {models.map((model, index) => {
          const IconComponent = model.icon;
          return (
            <div
              key={model.name}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${model.color} rounded-xl flex items-center justify-center`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  model.complexity === 'High' ? 'bg-red-900/30 text-red-400 border border-red-700/30' :
                  model.complexity === 'Medium' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-700/30' :
                  'bg-green-900/30 text-green-400 border border-green-700/30'
                }`}>
                  {model.complexity} Complexity
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {model.name}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {model.description}
              </p>

              <div className="bg-gray-900/50 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Mathematical Form:</h4>
                <code className="text-xs text-blue-400 font-mono break-all">
                  {model.equation}
                </code>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {model.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${model.color} rounded-full`} />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r ${model.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 inline-block">
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-blue-400">Interactive Features:</span> Real-time parameter adjustment and visualization
          </p>
          <p className="text-gray-400 text-sm">
            Compare models side-by-side • Analyze phase portraits • Export simulation data
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;