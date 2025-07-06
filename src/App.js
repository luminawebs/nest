// import logo from './logo.svg';
import './App.css';
import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import ConditionalLayout from './components/ConditionalLayout';
import PageTracker from './components/PageTracker';
import useScrollTracking from './hooks/useScrollTracking';
import { initializeAutoTracking } from './utils/autoTracking';

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
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/personajes3d" element={<Personajes3DPage />} />
                <Route path="/lmspricing" element={<LMSPricing />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/portfolio/:slug" element={<PortfolioDetails />} />
                <Route path="/coming-soon" element={<ComingSoonPage />} />
                <Route path="/ai-proficiency-challenge" element={<XRAIProficiencyChallenge />} />
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
