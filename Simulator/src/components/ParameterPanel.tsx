import React from 'react';
import { Settings, Info, RotateCcw } from 'lucide-react';
import { AlgorithmType, ActionPotentialParams } from '../types';
import { algorithms } from '../data/algorithms';

interface ParameterPanelProps {
  selectedAlgorithm: AlgorithmType;
  parameters: ActionPotentialParams;
  onParameterChange: (key: string, value: number) => void;
  onReset: () => void;
}

export const ParameterPanel: React.FC<ParameterPanelProps> = ({
  selectedAlgorithm,
  parameters,
  onParameterChange,
  onReset
}) => {
  const algorithm = algorithms.find(a => a.id === selectedAlgorithm);

  const parameterGroups = {
    'hodgkin-huxley': [
      {
        title: 'Simulation Parameters',
        params: [
          { key: 'timeStep', label: 'Time Step (ms)', min: 0.001, max: 0.1, step: 0.001 },
          { key: 'duration', label: 'Duration (ms)', min: 10, max: 200, step: 1 },
        ]
      },
      {
        title: 'Stimulus Parameters',
        params: [
          { key: 'stimulusCurrent', label: 'Current (μA/cm²)', min: 0, max: 50, step: 0.1 },
          { key: 'stimulusStart', label: 'Start Time (ms)', min: 0, max: 100, step: 0.1 },
          { key: 'stimulusDuration', label: 'Duration (ms)', min: 0.1, max: 20, step: 0.1 },
        ]
      },
      {
        title: 'Membrane Properties',
        params: [
          { key: 'membraneCapacitance', label: 'Capacitance (μF/cm²)', min: 0.1, max: 10, step: 0.1 },
          { key: 'sodiumConductance', label: 'gNa (mS/cm²)', min: 1, max: 300, step: 1 },
          { key: 'potassiumConductance', label: 'gK (mS/cm²)', min: 1, max: 100, step: 1 },
          { key: 'leakConductance', label: 'gL (mS/cm²)', min: 0.01, max: 5, step: 0.01 },
        ]
      },
      {
        title: 'Reversal Potentials',
        params: [
          { key: 'sodiumReversal', label: 'ENa (mV)', min: 30, max: 70, step: 1 },
          { key: 'potassiumReversal', label: 'EK (mV)', min: -100, max: -50, step: 1 },
          { key: 'leakReversal', label: 'EL (mV)', min: -80, max: -40, step: 0.1 },
        ]
      }
    ],
    'fitzhugh-nagumo': [
      {
        title: 'Simulation Parameters',
        params: [
          { key: 'timeStep', label: 'Time Step', min: 0.01, max: 1, step: 0.01 },
          { key: 'duration', label: 'Duration', min: 10, max: 300, step: 1 },
        ]
      },
      {
        title: 'Stimulus Parameters',
        params: [
          { key: 'stimulusCurrent', label: 'Current', min: 0, max: 2, step: 0.01 },
          { key: 'stimulusStart', label: 'Start Time', min: 0, max: 100, step: 1 },
          { key: 'stimulusDuration', label: 'Duration', min: 1, max: 50, step: 1 },
        ]
      },
      {
        title: 'Model Parameters',
        params: [
          { key: 'a', label: 'Parameter a', min: 0.1, max: 2, step: 0.01 },
          { key: 'b', label: 'Parameter b', min: 0.1, max: 2, step: 0.01 },
          { key: 'tau', label: 'Time constant τ', min: 1, max: 50, step: 0.1 },
        ]
      }
    ],
    'integrate-fire': [
      {
        title: 'Simulation Parameters',
        params: [
          { key: 'timeStep', label: 'Time Step (ms)', min: 0.01, max: 1, step: 0.01 },
          { key: 'duration', label: 'Duration (ms)', min: 10, max: 300, step: 1 },
        ]
      },
      {
        title: 'Stimulus Parameters',
        params: [
          { key: 'stimulusCurrent', label: 'Current (nA)', min: 0, max: 5, step: 0.01 },
          { key: 'stimulusStart', label: 'Start Time (ms)', min: 0, max: 100, step: 1 },
          { key: 'stimulusDuration', label: 'Duration (ms)', min: 1, max: 100, step: 1 },
        ]
      },
      {
        title: 'Membrane Properties',
        params: [
          { key: 'membraneResistance', label: 'Resistance (MΩ)', min: 1, max: 100, step: 1 },
          { key: 'membraneCapacitance', label: 'Capacitance (pF)', min: 1, max: 100, step: 1 },
          { key: 'thresholdVoltage', label: 'Threshold (mV)', min: -70, max: -40, step: 1 },
          { key: 'restingPotential', label: 'Rest Potential (mV)', min: -90, max: -60, step: 1 },
          { key: 'resetPotential', label: 'Reset Potential (mV)', min: -90, max: -60, step: 1 },
        ]
      }
    ],
    'morris-lecar': [
      {
        title: 'Simulation Parameters',
        params: [
          { key: 'timeStep', label: 'Time Step (ms)', min: 0.001, max: 0.1, step: 0.001 },
          { key: 'duration', label: 'Duration (ms)', min: 10, max: 300, step: 1 },
        ]
      },
      {
        title: 'Stimulus Parameters',
        params: [
          { key: 'stimulusCurrent', label: 'Current (μA/cm²)', min: 0, max: 200, step: 1 },
          { key: 'stimulusStart', label: 'Start Time (ms)', min: 0, max: 100, step: 1 },
          { key: 'stimulusDuration', label: 'Duration (ms)', min: 1, max: 50, step: 1 },
        ]
      },
      {
        title: 'Membrane Properties',
        params: [
          { key: 'membraneCapacitance', label: 'Capacitance (μF/cm²)', min: 1, max: 50, step: 1 },
          { key: 'calciumConductance', label: 'gCa (mS/cm²)', min: 0.1, max: 20, step: 0.1 },
          { key: 'potassiumConductance', label: 'gK (mS/cm²)', min: 0.1, max: 20, step: 0.1 },
          { key: 'leakConductance', label: 'gL (mS/cm²)', min: 0.1, max: 10, step: 0.1 },
        ]
      },
      {
        title: 'Reversal Potentials',
        params: [
          { key: 'calciumReversal', label: 'ECa (mV)', min: 80, max: 150, step: 1 },
          { key: 'potassiumReversal', label: 'EK (mV)', min: -100, max: -60, step: 1 },
          { key: 'leakReversal', label: 'EL (mV)', min: -80, max: -40, step: 1 },
        ]
      },
      {
        title: 'Gating Parameters',
        params: [
          { key: 'v1', label: 'V₁ (mV)', min: -20, max: 20, step: 0.1 },
          { key: 'v2', label: 'V₂ (mV)', min: 5, max: 30, step: 0.1 },
          { key: 'v3', label: 'V₃ (mV)', min: -20, max: 20, step: 0.1 },
          { key: 'v4', label: 'V₄ (mV)', min: 5, max: 50, step: 0.1 },
          { key: 'phi', label: 'φ (rate factor)', min: 0.01, max: 0.2, step: 0.001 },
        ]
      }
    ]
  };

  const groups = parameterGroups[selectedAlgorithm] || [];

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex-shrink-0 p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Parameters
            </h2>
          </div>
          <button
            onClick={onReset}
            className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>
        {algorithm && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {algorithm.description}
          </p>
        )}
      </div>

      {/* Parameters */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
        {groups.map((group, groupIndex) => (
          <div key={groupIndex} className="animate-fade-in" style={{ animationDelay: `${groupIndex * 0.1}s` }}>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              {group.title}
            </h3>
            <div className="space-y-3">
              {group.params.map((param) => (
                <div key={param.key} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-700 dark:text-gray-300">
                      {param.label}
                    </label>
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
                      {(parameters as any)[param.key]?.toFixed(param.step < 0.01 ? 3 : param.step < 0.1 ? 2 : 1)}
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min={param.min}
                      max={param.max}
                      step={param.step}
                      value={(parameters as any)[param.key] || 0}
                      onChange={(e) => onParameterChange(param.key, parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};