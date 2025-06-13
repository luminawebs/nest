import { useEffect } from 'react';
import { trackScroll, trackContactSectionView } from '../utils/analytics';

const useScrollTracking = () => {
  useEffect(() => {
    let scrollDepthTracked = [25, 50, 75, 100];
    let contactSectionViewed = false;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100);

      // Track scroll depth milestones
      scrollDepthTracked.forEach((depth, index) => {
        if (scrollPercent >= depth && scrollDepthTracked.includes(depth)) {
          trackScroll(depth);
          scrollDepthTracked.splice(index, 1); // Remove tracked depth
        }
      });

      // Track contact section view
      const contactSection = document.getElementById('contact');
      if (contactSection && !contactSectionViewed) {
        const rect = contactSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          trackContactSectionView();
          contactSectionViewed = true;
        }
      }
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);
};

export default useScrollTracking;

