import React from 'react';
import { ArrowLeft, Settings, Play, Pause } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Simulator: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <header className="border-b border-gray-700/50 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </button>
              <div className="w-px h-6 bg-gray-700" />
              <h1 className="text-xl font-semibold text-white">Action Potential Simulator</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                <Play className="w-4 h-4" />
                <span>Start</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Simulator Interface</h2>
          <p className="text-gray-400 mb-8">
            This is where your existing simulator would be integrated. The landing page now properly routes to this simulator page.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
              <h3 className="font-semibold text-white mb-2">Model Selection</h3>
              <p className="text-gray-400 text-sm">Choose from available mathematical models</p>
            </div>
            <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
              <h3 className="font-semibold text-white mb-2">Parameter Controls</h3>
              <p className="text-gray-400 text-sm">Adjust model parameters in real-time</p>
            </div>
            <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
              <h3 className="font-semibold text-white mb-2">Visualization</h3>
              <p className="text-gray-400 text-sm">Interactive plots and phase portraits</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Simulator;