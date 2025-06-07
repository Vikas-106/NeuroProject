import { 
  SimulationResult, 
  HodgkinHuxleyParams, 
  FitzHughNagumoParams, 
  IntegrateFireParams,
  MorrisLecarParams 
} from '../types';

export function simulateHodgkinHuxley(params: HodgkinHuxleyParams): SimulationResult {
  const {
    timeStep: dt,
    duration,
    stimulusCurrent,
    stimulusStart,
    stimulusDuration,
    membraneCapacitance: Cm,
    sodiumConductance: gNa,
    potassiumConductance: gK,
    leakConductance: gL,
    sodiumReversal: ENa,
    potassiumReversal: EK,
    leakReversal: EL
  } = params;

  const numSteps = Math.floor(duration / dt);
  const time = Array(numSteps).fill(0).map((_, i) => i * dt);
  const voltage = new Array(numSteps);
  const current = new Array(numSteps);
  const m = new Array(numSteps);
  const h = new Array(numSteps);
  const n = new Array(numSteps);

  // Initial conditions
  let V = -65; // mV
  let m_val = 0.05;
  let h_val = 0.6;
  let n_val = 0.32;

  // Rate constants functions
  const alpha_m = (V: number) => 0.1 * (V + 40) / (1 - Math.exp(-(V + 40) / 10));
  const beta_m = (V: number) => 4 * Math.exp(-(V + 65) / 18);
  const alpha_h = (V: number) => 0.07 * Math.exp(-(V + 65) / 20);
  const beta_h = (V: number) => 1 / (1 + Math.exp(-(V + 35) / 10));
  const alpha_n = (V: number) => 0.01 * (V + 55) / (1 - Math.exp(-(V + 55) / 10));
  const beta_n = (V: number) => 0.125 * Math.exp(-(V + 65) / 80);

  for (let i = 0; i < numSteps; i++) {
    const t = time[i];
    
    // External current
    const I_ext = (t >= stimulusStart && t <= stimulusStart + stimulusDuration) ? stimulusCurrent : 0;
    
    // Ionic currents
    const I_Na = gNa * Math.pow(m_val, 3) * h_val * (V - ENa);
    const I_K = gK * Math.pow(n_val, 4) * (V - EK);
    const I_L = gL * (V - EL);
    
    // Store values
    voltage[i] = V;
    current[i] = I_ext;
    m[i] = m_val;
    h[i] = h_val;
    n[i] = n_val;
    
    if (i < numSteps - 1) {
      // Update gating variables
      const am = alpha_m(V);
      const bm = beta_m(V);
      const ah = alpha_h(V);
      const bh = beta_h(V);
      const an = alpha_n(V);
      const bn = beta_n(V);
      
      m_val += dt * (am * (1 - m_val) - bm * m_val);
      h_val += dt * (ah * (1 - h_val) - bh * h_val);
      n_val += dt * (an * (1 - n_val) - bn * n_val);
      
      // Update voltage
      const dVdt = (-I_Na - I_K - I_L + I_ext) / Cm;
      V += dt * dVdt;
    }
  }

  return {
    time,
    voltage,
    current,
    gatingVariables: { m, h, n }
  };
}

export function simulateFitzHughNagumo(params: FitzHughNagumoParams): SimulationResult {
  const {
    timeStep: dt,
    duration,
    stimulusCurrent,
    stimulusStart,
    stimulusDuration,
    a,
    b,
    tau
  } = params;

  const numSteps = Math.floor(duration / dt);
  const time = Array(numSteps).fill(0).map((_, i) => i * dt);
  const voltage = new Array(numSteps);
  const current = new Array(numSteps);
  const w = new Array(numSteps);

  // Initial conditions
  let v = -1;
  let w_val = -0.5;

  for (let i = 0; i < numSteps; i++) {
    const t = time[i];
    
    // External current
    const I_ext = (t >= stimulusStart && t <= stimulusStart + stimulusDuration) ? stimulusCurrent : 0;
    
    // Store values
    voltage[i] = v * 100 - 70; // Scale and shift for mV
    current[i] = I_ext;
    w[i] = w_val;
    
    if (i < numSteps - 1) {
      // Update variables
      const dvdt = v - (v * v * v) / 3 - w_val + I_ext;
      const dwdt = (v + a - b * w_val) / tau;
      
      v += dt * dvdt;
      w_val += dt * dwdt;
    }
  }

  return {
    time,
    voltage,
    current,
    gatingVariables: { w }
  };
}

export function simulateIntegrateFire(params: IntegrateFireParams): SimulationResult {
  const {
    timeStep: dt,
    duration,
    stimulusCurrent,
    stimulusStart,
    stimulusDuration,
    membraneResistance: Rm,
    membraneCapacitance: Cm,
    thresholdVoltage: Vth,
    restingPotential: Vrest,
    resetPotential: Vreset
  } = params;

  const numSteps = Math.floor(duration / dt);
  const time = Array(numSteps).fill(0).map((_, i) => i * dt);
  const voltage = new Array(numSteps);
  const current = new Array(numSteps);

  const tau = Rm * Cm; // Membrane time constant
  let V = Vrest;

  for (let i = 0; i < numSteps; i++) {
    const t = time[i];
    
    // External current
    const I_ext = (t >= stimulusStart && t <= stimulusStart + stimulusDuration) ? stimulusCurrent : 0;
    
    // Store values
    voltage[i] = V;
    current[i] = I_ext;
    
    if (i < numSteps - 1) {
      // Update voltage
      const dVdt = (-(V - Vrest) + Rm * I_ext) / tau;
      V += dt * dVdt;
      
      // Check for spike
      if (V >= Vth) {
        V = Vreset;
      }
    }
  }

  return {
    time,
    voltage,
    current
  };
}

export function simulateMorrisLecar(params: MorrisLecarParams): SimulationResult {
  const {
    timeStep: dt,
    duration,
    stimulusCurrent,
    stimulusStart,
    stimulusDuration,
    membraneCapacitance: C,
    calciumConductance: gCa,
    potassiumConductance: gK,
    leakConductance: gL,
    calciumReversal: ECa,
    potassiumReversal: EK,
    leakReversal: EL,
    v1,
    v2,
    v3,
    v4,
    phi
  } = params;

  const numSteps = Math.floor(duration / dt);
  const time = Array(numSteps).fill(0).map((_, i) => i * dt);
  const voltage = new Array(numSteps);
  const current = new Array(numSteps);
  const w = new Array(numSteps);

  // Initial conditions
  let V = -60; // mV
  let w_val = 0.014;

  // Steady-state functions
  const m_inf = (V: number) => 0.5 * (1 + Math.tanh((V - v1) / v2));
  const w_inf = (V: number) => 0.5 * (1 + Math.tanh((V - v3) / v4));
  const tau_w = (V: number) => 1 / Math.cosh((V - v3) / (2 * v4));

  for (let i = 0; i < numSteps; i++) {
    const t = time[i];
    
    // External current
    const I_ext = (t >= stimulusStart && t <= stimulusStart + stimulusDuration) ? stimulusCurrent : 0;
    
    // Ionic currents
    const I_Ca = gCa * m_inf(V) * (V - ECa);
    const I_K = gK * w_val * (V - EK);
    const I_L = gL * (V - EL);
    
    // Store values
    voltage[i] = V;
    current[i] = I_ext;
    w[i] = w_val;
    
    if (i < numSteps - 1) {
      // Update variables
      const dVdt = (-I_Ca - I_K - I_L + I_ext) / C;
      const dwdt = phi * (w_inf(V) - w_val) / tau_w(V);
      
      V += dt * dVdt;
      w_val += dt * dwdt;
    }
  }

  return {
    time,
    voltage,
    current,
    gatingVariables: { w }
  };
}