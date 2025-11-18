import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route changes
    const pagePath = location.pathname;
    const pageTitle = document.title;
    
    // Add a small delay to ensure the page title is updated
    const timer = setTimeout(() => {
      trackPageView(pagePath, pageTitle);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location]);

  return null; // This component doesn't render anything
};

export default PageTracker;

