import React from 'react';
import { TrendingUp, Minus, TrendingDown, RotateCcw } from 'lucide-react';

const ActionPotentialDiagram: React.FC = () => {
  const phases = [
    {
      name: 'Resting State',
      voltage: '-70mV',
      description: 'Neuron at rest with stable membrane potential',
      icon: Minus,
      color: 'from-gray-500 to-gray-600',
      position: '10%'
    },
    {
      name: 'Depolarization',
      voltage: '+30mV',
      description: 'Sodium channels open, rapid voltage increase',
      icon: TrendingUp,
      color: 'from-red-500 to-orange-500',
      position: '35%'
    },
    {
      name: 'Repolarization',
      voltage: '-70mV',
      description: 'Potassium channels open, voltage decreases',
      icon: TrendingDown,
      color: 'from-blue-500 to-cyan-500',
      position: '60%'
    },
    {
      name: 'Hyperpolarization',
      voltage: '-90mV',
      description: 'Brief undershoot below resting potential',
      icon: RotateCcw,
      color: 'from-purple-500 to-indigo-500',
      position: '85%'
    }
  ];

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Action Potential Phases
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Understanding the four key phases of neuronal electrical activity
        </p>
      </div>

      <div className="relative">
        {/* Voltage curve visualization */}
        <div className="relative h-64 mb-12 bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              <defs>
                <linearGradient id="voltageGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6B7280" />
                  <stop offset="25%" stopColor="#EF4444" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="75%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#6B7280" />
                </linearGradient>
              </defs>
              
              {/* Voltage curve */}
              <path
                d="M 40 120 L 100 120 L 140 40 L 180 120 L 220 140 L 360 120"
                stroke="url(#voltageGradient)"
                strokeWidth="4"
                fill="none"
                className="drop-shadow-lg"
              />
              
              {/* Voltage markers */}
              <text x="10" y="45" fill="#9CA3AF" fontSize="12">+30mV</text>
              <text x="10" y="125" fill="#9CA3AF" fontSize="12">-70mV</text>
              <text x="10" y="145" fill="#9CA3AF" fontSize="12">-90mV</text>
              
              {/* Threshold line */}
              <line x1="40" y1="100" x2="360" y2="100" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />
              <text x="280" y="95" fill="#F59E0B" fontSize="12">Threshold</text>
            </svg>
          </div>
        </div>

        {/* Phase cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <div
                key={phase.name}
                className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${phase.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{phase.name}</h3>
                  <div className="text-2xl font-bold text-blue-400 mb-3">{phase.voltage}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{phase.description}</p>
                </div>

                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActionPotentialDiagram;