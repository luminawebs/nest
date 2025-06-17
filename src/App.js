// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Personajes3DPage from './pages/Personajes3DPage';
import LMSPricing from './pages/LMSPricing';
import ResourcesPage from './pages/ResourcesPage';
import FAQSection from './components/FAQSection';
import PageTracker from './components/PageTracker';
import useScrollTracking from './hooks/useScrollTracking';
import { initializeAutoTracking } from './utils/autoTracking';
import { trackButtonClick, trackContactClick, trackFormSubmission, trackPageView, trackSliderInteraction, trackContactSectionView } from './utils/analytics';
import ImpactoDemostrado from './components/ImpactoDemostrado';
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
    <Router>
      <div className="App">
        <header id="header" className="header d-flex align-items-center fixed-top">
          <div
            className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

            <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">

              <h1 className="sitename"><img src="assets/img/edunest-dark.svg" alt="" width="180" style={{ marginTop: "4px" }} /></h1>
            </a>

            <Menu />

            <a
              className="btn-getstarted"
              href="#contact"
              onClick={() => trackButtonClick('Header Contact Button', 'Navigation')}
            >
              Contacto
            </a>

          </div>
        </header>

        <PageTracker />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personajes3d" element={<Personajes3DPage />} />
          <Route path="/lmspricing" element={<LMSPricing />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/ai-proficiency-challenge" element={<XRAIProficiencyChallenge />} />
        </Routes>



        
        {/* <!-- /About Section --> */}

       
        

        {/* <!-- Contact Section --> */}
        
        {/* <!-- /Contact Section --> */}



        <Footer></Footer>

        {/* <!-- Scroll Top --> */}
        <a
          href="#header"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
          onClick={() => trackButtonClick('Scroll to Top', 'Navigation')}
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>

        {/* <!-- Preloader --> */}
        <div id="preloader"></div>

      </div>
    </Router>
  );
}

export default App;
