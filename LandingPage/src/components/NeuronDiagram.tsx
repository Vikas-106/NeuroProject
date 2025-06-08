import React, { useState, useEffect } from 'react';

const NeuronDiagram: React.FC = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const phases = [
    { name: 'Resting', voltage: '-70mV', color: '#6B7280', yPosition: 90 },
    { name: 'Threshold', voltage: '-55mV', color: '#F59E0B', yPosition: 75 },
    { name: 'Depolarization', voltage: '+30mV', color: '#EF4444', yPosition: 30 },
    { name: 'Repolarization', voltage: '-70mV', color: '#3B82F6', yPosition: 90 },
    { name: 'Hyperpolarization', voltage: '-90mV', color: '#8B5CF6', yPosition: 110 }
  ];

  // More accurate action potential curve coordinates
  const getActionPotentialPath = () => {
    return "M 20 90 L 60 90 L 80 75 L 100 30 L 120 50 L 140 90 L 160 110 L 200 95 L 280 90";
  };

  // Calculate current position on the curve based on phase
  const getCurrentPosition = () => {
    const positions = [
      { x: 60, y: 90 },   // Resting
      { x: 80, y: 75 },   // Threshold
      { x: 100, y: 30 },  // Depolarization peak
      { x: 140, y: 90 },  // Repolarization
      { x: 160, y: 110 }  // Hyperpolarization
    ];
    return positions[animationPhase];
  };

  const currentPos = getCurrentPosition();

  return (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Neuron Illustration */}
        <div className="relative">
          <svg viewBox="0 0 400 300" className="w-full h-auto">
            {/* Dendrites */}
            <g stroke="#9CA3AF" strokeWidth="2" fill="none">
              <path d="M 50 120 Q 30 100 20 80" />
              <path d="M 50 120 Q 30 140 20 160" />
              <path d="M 50 140 Q 30 160 15 180" />
              <path d="M 50 100 Q 30 80 15 60" />
            </g>
            
            {/* Cell Body */}
            <circle cx="80" cy="120" r="35" fill="#374151" stroke="#6B7280" strokeWidth="2" />
            <text x="80" y="125" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontWeight="bold">
              Cell Body
            </text>
            
            {/* Axon */}
            <rect x="115" y="110" width="200" height="20" fill="#4B5563" stroke="#6B7280" strokeWidth="2" rx="10" />
            
            {/* Axon terminals */}
            <g stroke="#9CA3AF" strokeWidth="2" fill="none">
              <path d="M 315 120 Q 335 100 345 80" />
              <path d="M 315 120 Q 335 140 345 160" />
              <path d="M 315 120 Q 340 120 360 120" />
            </g>
            
            {/* Ion channels and flow animation - only during appropriate phases */}
            {(animationPhase === 2 || animationPhase === 3) && (
              <g>
                {/* Na+ ions flowing in during depolarization */}
                {animationPhase === 2 && (
                  <>
                    <circle cx={150 + (animationPhase * 20)} cy="105" r="3" fill="#EF4444">
                      <animate attributeName="cy" values="105;115;105" dur="1s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={180 + (animationPhase * 15)} cy="105" r="3" fill="#EF4444">
                      <animate attributeName="cy" values="105;115;105" dur="1s" begin="0.3s" repeatCount="indefinite" />
                    </circle>
                    <text x="140" y="95" fill="#EF4444" fontSize="10">Na+</text>
                  </>
                )}
                
                {/* K+ ions flowing out during repolarization */}
                {animationPhase === 3 && (
                  <>
                    <circle cx={200 - (animationPhase * 10)} cy="125" r="3" fill="#3B82F6">
                      <animate attributeName="cy" values="125;135;125" dur="1s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={230 - (animationPhase * 12)} cy="125" r="3" fill="#3B82F6">
                      <animate attributeName="cy" values="125;135;125" dur="1s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                    <text x="190" y="145" fill="#3B82F6" fontSize="10">K+</text>
                  </>
                )}
              </g>
            )}
            
            {/* Action potential wave propagation */}
            <path
              d={`M 115 120 Q ${140 + animationPhase * 40} ${phases[animationPhase]?.yPosition || 120} ${180 + animationPhase * 30} 120`}
              stroke={phases[animationPhase]?.color || '#6B7280'}
              strokeWidth="3"
              fill="none"
              opacity={animationPhase > 0 ? 1 : 0.3}
            />
          </svg>
        </div>

        {/* Action Potential Graph */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-4">Action Potential Phases</h3>
          
          <div className="bg-gray-900/50 rounded-2xl p-6">
            <svg viewBox="0 0 300 150" className="w-full h-32">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="30" height="15" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 15" fill="none" stroke="#374151" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="300" height="150" fill="url(#grid)" />
              
              {/* More accurate voltage curve */}
              <path
                d={getActionPotentialPath()}
                stroke={phases[animationPhase]?.color || '#6B7280'}
                strokeWidth="3"
                fill="none"
                className="transition-all duration-500"
              />
              
              {/* Threshold line */}
              <line x1="20" y1="75" x2="280" y2="75" stroke="#F59E0B" strokeWidth="1" strokeDasharray="5,5" />
              <text x="285" y="75" fill="#F59E0B" fontSize="10">Threshold</text>
              
              {/* Voltage labels */}
              <text x="5" y="35" fill="#9CA3AF" fontSize="10">+30mV</text>
              <text x="5" y="80" fill="#F59E0B" fontSize="10">-55mV</text>
              <text x="5" y="95" fill="#9CA3AF" fontSize="10">-70mV</text>
              <text x="5" y="115" fill="#9CA3AF" fontSize="10">-90mV</text>
              
              {/* Current phase indicator - positioned accurately on curve */}
              <circle 
                cx={currentPos.x} 
                cy={currentPos.y} 
                r="4" 
                fill={phases[animationPhase]?.color || '#6B7280'}
                className="transition-all duration-500"
              >
                <animate attributeName="r" values="4;6;4" dur="1s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Current Phase:</span>
              <div className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full transition-colors duration-500"
                  style={{ backgroundColor: phases[animationPhase]?.color || '#6B7280' }}
                />
                <span className="font-semibold text-white">{phases[animationPhase]?.name}</span>
                <span className="text-sm text-gray-400">{phases[animationPhase]?.voltage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuronDiagram;