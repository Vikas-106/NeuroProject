import { Algorithm, HodgkinHuxleyParams, FitzHughNagumoParams, IntegrateFireParams, MorrisLecarParams } from '../types';

export const algorithms: Algorithm[] = [
  {
    id: 'hodgkin-huxley',
    name: 'Hodgkin-Huxley Model',
    description: 'The classic biophysical model describing ionic mechanisms underlying action potentials',
    category: 'Biophysical',
    defaultParams: {
      timeStep: 0.01,
      duration: 50,
      stimulusCurrent: 10,
      stimulusStart: 10,
      stimulusDuration: 1,
      membraneCapacitance: 1,
      sodiumConductance: 120,
      potassiumConductance: 36,
      leakConductance: 0.3,
      sodiumReversal: 50,
      potassiumReversal: -77,
      leakReversal: -54.4
    } as HodgkinHuxleyParams
  },
  {
    id: 'fitzhugh-nagumo',
    name: 'FitzHugh-Nagumo Model',
    description: 'Simplified two-variable model capturing essential dynamics of excitable membranes',
    category: 'Phenomenological',
    defaultParams: {
      timeStep: 0.1,
      duration: 100,
      stimulusCurrent: 0.5,
      stimulusStart: 20,
      stimulusDuration: 5,
      a: 0.7,
      b: 0.8,
      tau: 12.5,
      threshold: -0.1
    } as FitzHughNagumoParams
  },
  {
    id: 'integrate-fire',
    name: 'Integrate-and-Fire Model',
    description: 'Simple yet powerful model focusing on membrane integration and spike generation',
    category: 'Abstract',
    defaultParams: {
      timeStep: 0.1,
      duration: 100,
      stimulusCurrent: 1.5,
      stimulusStart: 20,
      stimulusDuration: 10,
      membraneResistance: 10,
      membraneCapacitance: 10,
      thresholdVoltage: -55,
      restingPotential: -70,
      resetPotential: -80
    } as IntegrateFireParams
  },
  {
    id: 'morris-lecar',
    name: 'Morris-Lecar Model',
    description: 'Two-variable model describing calcium and potassium dynamics in excitable membranes',
    category: 'Biophysical',
    defaultParams: {
      timeStep: 0.01,
      duration: 100,
      stimulusCurrent: 80,
      stimulusStart: 20,
      stimulusDuration: 5,
      membraneCapacitance: 20,
      calciumConductance: 4.4,
      potassiumConductance: 8,
      leakConductance: 2,
      calciumReversal: 120,
      potassiumReversal: -84,
      leakReversal: -60,
      v1: -1.2,
      v2: 18,
      v3: 2,
      v4: 30,
      phi: 0.04
    } as MorrisLecarParams
  }
];