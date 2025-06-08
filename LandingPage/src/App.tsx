import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Simulator from './components/Simulator';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/simulator" element={<Simulator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;