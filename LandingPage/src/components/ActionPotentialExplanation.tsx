import React from 'react';
import { Zap, ArrowRight, Minus, Plus } from 'lucide-react';

const ActionPotentialExplanation: React.FC = () => {
  const phases = [
    {
      title: 'Resting Membrane Potential',
      voltage: '-70mV',
      description: 'The neuron maintains a stable negative charge inside relative to outside, primarily due to the sodium-potassium pump and selective permeability.',
      icon: Minus,
      color: 'from-gray-500 to-gray-600',
      details: ['Na+/K+ pump active', 'Membrane selectively permeable', 'Stable at -70mV']
    },
    {
      title: 'Depolarization (Na+ Influx)',
      voltage: '+30mV',
      description: 'Voltage-gated sodium channels open rapidly, allowing Na+ ions to rush into the cell, making the inside positive.',
      icon: Plus,
      color: 'from-red-500 to-orange-500',
      details: ['Na+ channels open', 'Rapid voltage increase', 'All-or-nothing event']
    },
    {
      title: 'Repolarization (K+ Efflux)',
      voltage: '-70mV',
      description: 'Sodium channels close and potassium channels open, allowing K+ to flow out and restore the negative membrane potential.',
      icon: ArrowRight,
      color: 'from-blue-500 to-cyan-500',
      details: ['Na+ channels close', 'K+ channels open', 'Voltage decreases']
    },
    {
      title: 'Return to Resting State',
      voltage: '-70mV',
      description: 'The sodium-potassium pump restores the original ion distribution, and the neuron returns to its resting state.',
      icon: Minus,
      color: 'from-purple-500 to-indigo-500',
      details: ['Brief hyperpolarization', 'Pump restores balance', 'Ready for next signal']
    }
  ];

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center space-x-3 mb-4">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What is an Action Potential?
          </h2>
        </div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          An action potential is a rapid, temporary change in electrical voltage across a neuron's membrane. 
          This electrical signal allows neurons to communicate over long distances in the nervous system.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-6">The Biological Process</h3>
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">
              Action potentials are fundamental to nervous system function. They represent the primary mechanism 
              by which electrical information travels along nerve fibers, enabling everything from reflexes to 
              complex cognitive processes.
            </p>
            <p className="leading-relaxed">
              The process involves the coordinated opening and closing of voltage-gated ion channels, 
              creating a wave of electrical activity that propagates along the axon without losing strength.
            </p>
            <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-700/30">
              <h4 className="font-semibold text-blue-400 mb-2">Key Characteristics:</h4>
              <ul className="space-y-1 text-sm">
                <li>• All-or-nothing response</li>
                <li>• Self-propagating signal</li>
                <li>• Refractory period prevents backward propagation</li>
                <li>• Speed varies with axon diameter and myelination</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-6">Ion Channel Dynamics</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center border border-red-500/30">
                <Plus className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h4 className="font-semibold text-red-400 mb-1">Sodium Channels (Na+)</h4>
                <p className="text-gray-300 text-sm">Voltage-gated channels that open at threshold (-55mV), causing rapid depolarization</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                <Minus className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-1">Potassium Channels (K+)</h4>
                <p className="text-gray-300 text-sm">Open during repolarization, allowing K+ efflux to restore negative potential</p>
              </div>
            </div>

            <div className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-700/30">
              <h4 className="font-semibold text-yellow-400 mb-2">Threshold Concept:</h4>
              <p className="text-gray-300 text-sm">
                The membrane must reach approximately -55mV to trigger an action potential. 
                Below this threshold, the stimulus will not generate a propagating signal.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((phase, index) => {
          const IconComponent = phase.icon;
          return (
            <div
              key={phase.title}
              className="group bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${phase.color} rounded-lg flex items-center justify-center mb-4`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">{phase.title}</h3>
              <div className="text-xl font-bold text-blue-400 mb-3">{phase.voltage}</div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{phase.description}</p>
              
              <div className="space-y-1">
                {phase.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${phase.color} rounded-full`} />
                    <span className="text-gray-400 text-xs">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ActionPotentialExplanation;