export interface ActionPotentialParams {
  timeStep: number;
  duration: number;
  stimulusCurrent: number;
  stimulusStart: number;
  stimulusDuration: number;
}

export interface HodgkinHuxleyParams extends ActionPotentialParams {
  membraneCapacitance: number;
  sodiumConductance: number;
  potassiumConductance: number;
  leakConductance: number;
  sodiumReversal: number;
  potassiumReversal: number;
  leakReversal: number;
}

export interface FitzHughNagumoParams extends ActionPotentialParams {
  a: number;
  b: number;
  tau: number;
  threshold: number;
}

export interface IntegrateFireParams extends ActionPotentialParams {
  membraneResistance: number;
  membraneCapacitance: number;
  thresholdVoltage: number;
  restingPotential: number;
  resetPotential: number;
}

export interface MorrisLecarParams extends ActionPotentialParams {
  membraneCapacitance: number;
  calciumConductance: number;
  potassiumConductance: number;
  leakConductance: number;
  calciumReversal: number;
  potassiumReversal: number;
  leakReversal: number;
  v1: number;
  v2: number;
  v3: number;
  v4: number;
  phi: number;
}

export type AlgorithmType = 'hodgkin-huxley' | 'fitzhugh-nagumo' | 'integrate-fire' | 'morris-lecar';

export interface SimulationResult {
  time: number[];
  voltage: number[];
  current?: number[];
  gatingVariables?: {
    m?: number[];
    h?: number[];
    n?: number[];
    w?: number[];
  };
}

export interface Algorithm {
  id: AlgorithmType;
  name: string;
  description: string;
  defaultParams: ActionPotentialParams;
  category: string;
}