// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import ConditionalLayout from './components/ConditionalLayout';
import HomePage from './pages/HomePage';
import Personajes3DPage from './pages/Personajes3DPage';
import LMSPricing from './pages/LMSPricing';
import PortfolioPage from './pages/PortfolioPage';
import ResourcesPage from './pages/ResourcesPage';
import ComingSoonPage from './pages/ComingSoonPage';
import PageTracker from './components/PageTracker';
import useScrollTracking from './hooks/useScrollTracking';
import { initializeAutoTracking } from './utils/autoTracking';
import XRAIProficiencyChallenge from './components/G-01-AIProficiency';

// import ScrollComponent from "./components/ScrollComponent";

function App() {
  // Initialize scroll tracking
  useScrollTracking();

  // Remove preloader when component mounts and initialize tracking
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      // Add a small delay to ensure page is fully loaded
      const timer = setTimeout(() => {
        preloader.style.display = 'none';
      }, 1000); // 1 second delay

      return () => clearTimeout(timer);
    }

    // Initialize automatic tracking for elements without React handlers
    initializeAutoTracking();
  }, []);


  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <PageTracker />
          <ConditionalLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/personajes3d" element={<Personajes3DPage />} />
              <Route path="/lmspricing" element={<LMSPricing />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/coming-soon" element={<ComingSoonPage />} />
              <Route path="/ai-proficiency-challenge" element={<XRAIProficiencyChallenge />} />
            </Routes>
          </ConditionalLayout>

          {/* <!-- Preloader --> */}
          <div id="preloader"></div>

        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
