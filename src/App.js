// import logo from './logo.svg';
import './App.css';
import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import ConditionalLayout from './components/ConditionalLayout';
import PageTracker from './components/PageTracker';
import useScrollTracking from './hooks/useScrollTracking';

import { initializeAutoTracking } from './utils/autoTracking';
import LanguageRouter from './components/LanguageRouter';
// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const Personajes3DPage = lazy(() => import('./pages/Personajes3DPage'));
const LMSPricing = lazy(() => import('./pages/LMSPricing'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const PortfolioDetails = lazy(() => import('./components/PortfolioDetails'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage'));
const XRAIProficiencyChallenge = lazy(() => import('./components/G-01-AIProficiency'));

// Loading component
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

// import ScrollComponent from "./components/ScrollComponent";

function App() {
  // Initialize scroll tracking
  useScrollTracking();

  // Remove preloader when component mounts and initialize tracking
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    let preloaderTimer;
    
    if (preloader) {
      // Add a small delay to ensure page is fully loaded
      preloaderTimer = setTimeout(() => {
        preloader.style.display = 'none';
      }, 1000); // 1 second delay
    }

    // Initialize automatic tracking for elements without React handlers
    const cleanupTracking = initializeAutoTracking();

    return () => {
      if (preloaderTimer) {
        clearTimeout(preloaderTimer);
      }
      if (cleanupTracking) {
        cleanupTracking();
      }
    };
  }, []);


  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <PageTracker />
          <ConditionalLayout>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path=":lang/*" element={<LanguageRouter />} />
                <Route path="/" element={<Navigate to="/es/" replace />} />
              </Routes>
            </Suspense>
          </ConditionalLayout>

          {/* <!-- Preloader --> */}
          <div id="preloader"></div>

        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
