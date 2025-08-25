import React from 'react';
import MinimalistLayout from '../components/MinimalistLayout';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { 
  trackButtonClick, 
  trackServiceInquiry, 
  trackLinkClick,
  trackContactClick,
  trackFormSubmission 
} from '../utils/analytics';
import ImpactoDemostrado from '../components/ImpactoDemostrado';
import FAQSection from '../components/FAQSection';
import PortfolioGrid from '../components/PortfolioGrid';


const CoursesPage = () => {
    const location = useLocation();
    const { t } = useTranslation();
  return (
    <MinimalistLayout title="Courses">
      <section className="page-title">
        <div className="container">
          <h1>Nuestros Cursos y Portfolio</h1>
          <p className="lead">Explora nuestro catálogo de experiencias de aprendizaje innovadoras.</p>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <PortfolioGrid />
      
      <ImpactoDemostrado />
      <FAQSection />
    </MinimalistLayout>
    
  );
};

export default CoursesPage;

