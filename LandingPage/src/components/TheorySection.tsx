import React from 'react';
import { BookOpen, Zap, ArrowRight, Activity } from 'lucide-react';

const TheorySection: React.FC = () => {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center space-x-3 mb-4">
          <BookOpen className="w-8 h-8 text-blue-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Understanding Action Potentials
          </h2>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          The science behind neuronal communication and electrical signaling
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Activity className="w-6 h-6 text-green-400 mr-3" />
              What Are Action Potentials?
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Action potentials are rapid, temporary changes in the electrical membrane potential of excitable cells, 
              particularly neurons and muscle cells. They represent the fundamental mechanism by which electrical 
              signals are transmitted along nerve fibers, enabling communication throughout the nervous system.
            </p>
            <p className="text-gray-300 leading-relaxed">
              These electrical impulses are "all-or-nothing" events that propagate along the axon without degradation, 
              ensuring reliable signal transmission over long distances within the body.
            </p>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Zap className="w-6 h-6 text-yellow-400 mr-3" />
              Biological Importance
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Action potentials are essential for virtually all nervous system functions including sensory perception, 
              motor control, cognitive processes, and autonomic regulation. They enable rapid communication between 
              different parts of the nervous system and form the basis for neural computation and information processing.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
            <h3 className="text-2xl font-bold text-white mb-6">Key Components</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-400">Sodium Channels (Na⁺)</h4>
                  <p className="text-gray-300 text-sm">Voltage-gated channels that open during depolarization, allowing rapid sodium influx</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-400">Potassium Channels (K⁺)</h4>
                  <p className="text-gray-300 text-sm">Channels that open during repolarization, allowing potassium efflux to restore resting potential</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-400">Threshold Voltage (~-55mV)</h4>
                  <p className="text-gray-300 text-sm">Critical membrane potential that triggers the all-or-nothing action potential</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-purple-400">Axon Propagation</h4>
                  <p className="text-gray-300 text-sm">Self-reinforcing wave of depolarization that travels along the nerve fiber</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-white">Signal Propagation</h4>
                <p className="text-gray-400 text-sm">Up to 120 m/s in myelinated fibers</p>
              </div>
              <ArrowRight className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheorySection;