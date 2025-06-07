import React, { useState, useEffect } from 'react';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { TutorialPanel } from './components/TutorialPanel';
import { ParameterPanel } from './components/ParameterPanel';
import { PlotPanel } from './components/PlotPanel';
import { AlgorithmType, ActionPotentialParams, SimulationResult } from './types';
import { algorithms } from './data/algorithms';
import { simulateHodgkinHuxley, simulateFitzHughNagumo, simulateIntegrateFire, simulateMorrisLecar } from './utils/simulators';

function AppContent() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmType>('hodgkin-huxley');
  const [parameters, setParameters] = useState<ActionPotentialParams>(
    algorithms[0].defaultParams
  );
  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  // Update parameters when algorithm changes
  useEffect(() => {
    const algorithm = algorithms.find(a => a.id === selectedAlgorithm);
    if (algorithm) {
      setParameters(algorithm.defaultParams);
    }
  }, [selectedAlgorithm]);

  // Run simulation when parameters change
  useEffect(() => {
    const runSimulation = async () => {
      setIsSimulating(true);
      
      // Add a small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 100));
      
      try {
        let result: SimulationResult;
        
        switch (selectedAlgorithm) {
          case 'hodgkin-huxley':
            result = simulateHodgkinHuxley(parameters as any);
            break;
          case 'fitzhugh-nagumo':
            result = simulateFitzHughNagumo(parameters as any);
            break;
          case 'integrate-fire':
            result = simulateIntegrateFire(parameters as any);
            break;
          case 'morris-lecar':
            result = simulateMorrisLecar(parameters as any);
            break;
          default:
            throw new Error('Unknown algorithm');
        }
        
        setSimulationResult(result);
      } catch (error) {
        console.error('Simulation error:', error);
        setSimulationResult(null);
      } finally {
        setIsSimulating(false);
      }
    };

    runSimulation();
  }, [selectedAlgorithm, parameters]);

  const handleParameterChange = (key: string, value: number) => {
    setParameters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleReset = () => {
    const algorithm = algorithms.find(a => a.id === selectedAlgorithm);
    if (algorithm) {
      setParameters(algorithm.defaultParams);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header 
        selectedAlgorithm={selectedAlgorithm}
        onAlgorithmChange={setSelectedAlgorithm}
      />
      
      <div className="flex-1 overflow-hidden">
        {/* Desktop Layout */}
        <div className="hidden lg:block h-full">
          <PanelGroup direction="horizontal">
            {/* Tutorial Panel */}
            <Panel defaultSize={30} minSize={25} maxSize={50}>
              <TutorialPanel selectedAlgorithm={selectedAlgorithm} />
            </Panel>
            
            <PanelResizeHandle className="w-2 bg-gray-200 dark:bg-gray-700 hover:bg-blue-300 dark:hover:bg-blue-600 transition-colors duration-200" />
            
            {/* Simulation Panel */}
            <Panel defaultSize={70} minSize={50}>
              <PanelGroup direction="vertical">
                {/* Parameters Panel */}
                <Panel defaultSize={40} minSize={30} maxSize={60}>
                  <ParameterPanel
                    selectedAlgorithm={selectedAlgorithm}
                    parameters={parameters}
                    onParameterChange={handleParameterChange}
                    onReset={handleReset}
                  />
                </Panel>
                
                <PanelResizeHandle className="h-2 bg-gray-200 dark:bg-gray-700 hover:bg-blue-300 dark:hover:bg-blue-600 transition-colors duration-200" />
                
                {/* Plot Panel */}
                <Panel defaultSize={60} minSize={40}>
                  <PlotPanel
                    simulationResult={simulationResult}
                    isSimulating={isSimulating}
                  />
                </Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden h-full overflow-y-auto custom-scrollbar">
          <div className="space-y-4 p-4">
            {/* Parameters Panel */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <ParameterPanel
                selectedAlgorithm={selectedAlgorithm}
                parameters={parameters}
                onParameterChange={handleParameterChange}
                onReset={handleReset}
              />
            </div>

            {/* Plot Panel */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg h-96">
              <PlotPanel
                simulationResult={simulationResult}
                isSimulating={isSimulating}
              />
            </div>

            {/* Tutorial Panel */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <TutorialPanel selectedAlgorithm={selectedAlgorithm} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;