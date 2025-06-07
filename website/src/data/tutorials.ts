export interface TutorialContent {
  id: string;
  title: string;
  sections: TutorialSection[];
  resources: ResourceLink[];
}

export interface TutorialSection {
  title: string;
  content: string;
  equations?: string[];
}

export interface ResourceLink {
  title: string;
  url: string;
  description: string;
}

export const tutorials: Record<string, TutorialContent> = {
  'hodgkin-huxley': {
    id: 'hodgkin-huxley',
    title: 'Hodgkin-Huxley Model',
    sections: [
      {
        title: 'Introduction',
        content: `The Hodgkin-Huxley model, developed by Alan Hodgkin and Andrew Huxley in 1952, is a mathematical model that describes how action potentials in neurons are initiated and propagated. This groundbreaking work earned them the Nobel Prize in Physiology or Medicine in 1963.

The model treats the neuron membrane as an electrical circuit with capacitance and variable conductances for different ion channels. It captures the complex interplay between sodium and potassium channels that underlies the action potential.`,
        equations: ['C_m \\frac{dV}{dt} = -I_{Na} - I_K - I_L + I_{ext}']
      },
      {
        title: 'Membrane Equation',
        content: `The core equation describes how membrane voltage changes over time based on the balance of ionic currents. The membrane acts as a capacitor that can store charge, while ion channels provide pathways for current flow.

Each ionic current depends on the electrochemical driving force (difference between membrane potential and reversal potential) and the conductance of the respective channels.`,
        equations: [
          'I_{Na} = g_{Na} m^3 h (V - E_{Na})',
          'I_K = g_K n^4 (V - E_K)',
          'I_L = g_L (V - E_L)'
        ]
      },
      {
        title: 'Gating Variables',
        content: `The sodium and potassium conductances are not constant but depend on voltage-sensitive gating variables:

• **m**: Sodium activation (fast)
• **h**: Sodium inactivation (slow) 
• **n**: Potassium activation (slow)

Each gating variable follows first-order kinetics with voltage-dependent rate constants.`,
        equations: [
          '\\frac{dm}{dt} = \\alpha_m(V)(1-m) - \\beta_m(V)m',
          '\\frac{dh}{dt} = \\alpha_h(V)(1-h) - \\beta_h(V)h',
          '\\frac{dn}{dt} = \\alpha_n(V)(1-n) - \\beta_n(V)n'
        ]
      },
      {
        title: 'Physiological Significance',
        content: `The Hodgkin-Huxley model reveals the molecular mechanisms underlying neural excitability:

**Depolarization Phase**: Rapid sodium channel activation causes massive Na+ influx, driving membrane potential toward +40mV.

**Repolarization Phase**: Sodium channels inactivate while potassium channels activate, allowing K+ efflux to restore negative potential.

**Refractory Period**: Temporary inability to generate another action potential due to sodium channel inactivation and potassium channel activation.

This model forms the foundation for understanding more complex neural phenomena and has been extended to describe various types of neurons and ion channels.`
      }
    ],
    resources: [
      {
        title: "Original Hodgkin-Huxley Paper (1952)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1392413/",
        description: "The seminal paper that introduced the mathematical model of action potentials"
      },
      {
        title: "Hodgkin-Huxley Model - Scholarpedia",
        url: "http://www.scholarpedia.org/article/Hodgkin-Huxley_model",
        description: "Comprehensive academic overview with mathematical details and extensions"
      },
      {
        title: "Interactive Hodgkin-Huxley Tutorial",
        url: "https://www.nernstpotential.com/hodgkin-huxley-model",
        description: "Step-by-step interactive tutorial explaining the model components and dynamics"
      }
    ]
  },
  'fitzhugh-nagumo': {
    id: 'fitzhugh-nagumo',
    title: 'FitzHugh-Nagumo Model',
    sections: [
      {
        title: 'Introduction',
        content: `The FitzHugh-Nagumo model, developed by Richard FitzHugh and Jin-ichi Nagumo in the 1960s, is a simplified version of the Hodgkin-Huxley model. It reduces the four-dimensional HH system to just two variables while preserving the essential dynamics of excitable membranes.

This model is particularly valuable for understanding the general principles of excitability and has been widely used in theoretical neuroscience and mathematical biology.`,
        equations: [
          '\\frac{dv}{dt} = v - \\frac{v^3}{3} - w + I',
          '\\frac{dw}{dt} = \\frac{1}{\\tau}(v + a - bw)'
        ]
      },
      {
        title: 'Mathematical Structure',
        content: `The FitzHugh-Nagumo model consists of two coupled differential equations:

**v**: Represents the membrane potential (fast variable)
**w**: Represents a recovery variable combining inactivation and activation processes (slow variable)

The cubic nonlinearity in the v-equation creates the characteristic N-shaped nullcline that enables excitable dynamics.`,
        equations: [
          'v_{nullcline}: w = v - \\frac{v^3}{3} + I',
          'w_{nullcline}: w = \\frac{v + a}{b}'
        ]
      },
      {
        title: 'Phase Plane Analysis',
        content: `The FitzHugh-Nagumo model is ideal for phase plane analysis due to its two-dimensional nature. The dynamics can be understood by examining the nullclines and their intersections:

**Stable Fixed Point**: When I < threshold, there's a single stable equilibrium point where the system rests.

**Limit Cycle**: When I > threshold, the fixed point becomes unstable, and a stable limit cycle emerges, corresponding to repetitive spiking.

**Excitability**: For intermediate stimulus strengths, a brief perturbation can trigger a large excursion in phase space before returning to rest.`
      },
      {
        title: 'Applications',
        content: `The FitzHugh-Nagumo model has found applications across multiple fields:

**Theoretical Neuroscience**: Understanding basic principles of neural excitability and oscillations.

**Cardiac Electrophysiology**: Modeling cardiac action potentials and arrhythmias.

**Pattern Formation**: Studying wave propagation in excitable media.

**Biochemical Networks**: Analyzing oscillations in enzyme systems and cell signaling.

Its mathematical tractability makes it an excellent tool for gaining intuition about nonlinear dynamics in biological systems.`
      }
    ],
    resources: [
      {
        title: "FitzHugh-Nagumo Model - Scholarpedia",
        url: "http://www.scholarpedia.org/article/FitzHugh-Nagumo_model",
        description: "Detailed mathematical analysis and biological interpretation of the model"
      },
      {
        title: "Phase Plane Analysis Tutorial",
        url: "https://mathinsight.org/equilibrium_introduction",
        description: "Mathematical introduction to phase plane analysis and dynamical systems"
      },
      {
        title: "Excitable Media and Pattern Formation",
        url: "https://www.nature.com/articles/35065745",
        description: "Nature review on excitable media dynamics and applications in biology"
      }
    ]
  },
  'integrate-fire': {
    id: 'integrate-fire',
    title: 'Integrate-and-Fire Model',
    sections: [
      {
        title: 'Introduction',
        content: `The Integrate-and-Fire (IF) model is one of the oldest and most widely used models in computational neuroscience. First introduced by Louis Lapicque in 1907, it captures the essential feature of neural computation: the integration of inputs over time leading to spike generation.

Despite its simplicity, the IF model has been instrumental in understanding neural coding, network dynamics, and information processing in the brain.`,
        equations: ['\\tau_m \\frac{dV}{dt} = -(V - V_{rest}) + R_m I(t)']
      },
      {
        title: 'Basic Mechanism',
        content: `The integrate-and-fire model treats the neuron as a leaky integrator:

**Integration**: Incoming currents charge the membrane capacitance, causing the voltage to rise toward a threshold.

**Fire**: When voltage reaches threshold, a spike is generated and voltage is reset.

**Leak**: In the absence of input, voltage decays exponentially back to resting potential with time constant τm = RmCm.`,
        equations: [
          'V(t) = V_{rest} + (V_0 - V_{rest})e^{-t/\\tau_m} + \\frac{R_m I}{\\tau_m} \\int_0^t e^{-(t-s)/\\tau_m} ds',
          '\\text{if } V(t) \\geq V_{threshold} \\text{, then } V(t) \\leftarrow V_{reset}'
        ]
      },
      {
        title: 'Extensions and Variants',
        content: `Several extensions of the basic IF model have been developed:

**Leaky Integrate-and-Fire (LIF)**: Includes membrane capacitance and resistance (implemented here).

**Quadratic Integrate-and-Fire**: Uses a quadratic term to better capture the approach to threshold.

**Exponential Integrate-and-Fire**: Includes an exponential term modeling sodium channel activation.

**Adaptive Models**: Include spike-triggered adaptation currents.

Each variant adds biological realism while maintaining computational efficiency.`
      },
      {
        title: 'Computational Advantages',
        content: `The integrate-and-fire model offers several computational advantages:

**Efficiency**: Simple differential equation allows fast simulation of large networks.

**Analytical Tractability**: Many properties can be calculated analytically, including firing rates and spike timing statistics.

**Parameter Interpretability**: Model parameters have clear biological interpretations.

**Network Studies**: Ideal for studying population dynamics and network effects.

These features make IF models the workhorse of large-scale neural network simulations and theoretical studies of neural computation.`
      }
    ],
    resources: [
      {
        title: "Integrate-and-Fire Model - Scholarpedia",
        url: "http://www.scholarpedia.org/article/Integrate-and-fire",
        description: "Comprehensive overview of integrate-and-fire models and their variants"
      },
      {
        title: "Theoretical Neuroscience by Dayan & Abbott",
        url: "https://mitpress.mit.edu/9780262541855/theoretical-neuroscience/",
        description: "Classic textbook covering integrate-and-fire models and computational neuroscience"
      },
      {
        title: "Neural Dynamics - Cambridge Course",
        url: "https://neuronaldynamics.epfl.ch/online/Ch5.S1.html",
        description: "Online course chapter on leaky integrate-and-fire neurons with interactive examples"
      }
    ]
  },
  'morris-lecar': {
    id: 'morris-lecar',
    title: 'Morris-Lecar Model',
    sections: [
      {
        title: 'Introduction',
        content: `The Morris-Lecar model, developed by Catherine Morris and Harold Lecar in 1981, is a two-dimensional reduction of the Hodgkin-Huxley model that focuses on calcium and potassium dynamics. Originally developed to describe the electrical behavior of the barnacle giant muscle fiber, it has become a fundamental model for understanding excitable membrane dynamics.

This model is particularly valuable for studying the role of calcium channels in neuronal excitability and has been widely used to understand different types of neural oscillations and bifurcations.`,
        equations: [
          'C \\frac{dV}{dt} = -g_{Ca} m_{\\infty}(V)(V - E_{Ca}) - g_K w(V - E_K) - g_L(V - E_L) + I',
          '\\frac{dw}{dt} = \\phi \\frac{w_{\\infty}(V) - w}{\\tau_w(V)}'
        ]
      },
      {
        title: 'Steady-State Functions',
        content: `The Morris-Lecar model uses steady-state activation functions for calcium and potassium channels:

**Calcium Activation**: The calcium current activates instantaneously, so we use the steady-state activation function m∞(V).

**Potassium Gating**: The potassium current has a gating variable w that evolves according to its own kinetics.

These functions are typically sigmoidal and depend on half-activation voltages and slopes.`,
        equations: [
          'm_{\\infty}(V) = \\frac{1}{2}[1 + \\tanh(\\frac{V - V_1}{V_2})]',
          'w_{\\infty}(V) = \\frac{1}{2}[1 + \\tanh(\\frac{V - V_3}{V_4})]',
          '\\tau_w(V) = \\frac{1}{\\cosh(\\frac{V - V_3}{2V_4})}'
        ]
      },
      {
        title: 'Dynamical Behavior',
        content: `The Morris-Lecar model exhibits rich dynamical behavior depending on parameter values:

**Type I Excitability**: Continuous frequency-current relationship, bifurcation through saddle-node on invariant circle.

**Type II Excitability**: Discontinuous frequency-current relationship, bifurcation through Hopf bifurcation.

**Oscillatory Regimes**: The model can exhibit sustained oscillations, bursting, and chaotic dynamics.

**Bistability**: Under certain conditions, both stable fixed points and limit cycles can coexist.

The model's two-dimensional nature makes it ideal for phase plane analysis and understanding the geometric structure of neural dynamics.`
      },
      {
        title: 'Biological Significance',
        content: `The Morris-Lecar model captures several important aspects of neuronal physiology:

**Calcium Dynamics**: Models the role of voltage-gated calcium channels in action potential generation and cellular excitability.

**Potassium Rectification**: Describes delayed rectifier potassium currents that contribute to repolarization and adaptation.

**Membrane Resonance**: Can exhibit subthreshold oscillations and resonance phenomena important for neural coding.

**Clinical Relevance**: Variations of the model have been used to study epilepsy, cardiac arrhythmias, and other excitability disorders.

The model serves as a bridge between the complexity of the Hodgkin-Huxley model and the simplicity of the FitzHugh-Nagumo model, providing biological realism while maintaining mathematical tractability.`
      }
    ],
    resources: [
      {
        title: "Original Morris-Lecar Paper (1981)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1327511/",
        description: "The original paper describing the Morris-Lecar model for barnacle muscle fiber"
      },
      {
        title: "Morris-Lecar Model - Scholarpedia",
        url: "http://www.scholarpedia.org/article/Morris-Lecar_model",
        description: "Detailed mathematical analysis and parameter studies of the Morris-Lecar model"
      },
      {
        title: "Calcium Channels and Neural Excitability",
        url: "https://www.nature.com/articles/nrn2059",
        description: "Nature Reviews Neuroscience article on calcium channels in neuronal function"
      }
    ]
  }
};