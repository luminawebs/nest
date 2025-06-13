import React from 'react';
import { Link } from 'react-router-dom';
import { trackMenuClick } from '../utils/analytics';

const Menu = () => {
  // Handle menu click tracking
  const handleMenuClick = (menuItem, section = 'main_navigation') => {
    trackMenuClick(menuItem, section);
  };

  return (
    <nav id="navmenu" className="navmenu" style={{width: "50%"}}>
      <ul>
        <li className="dropdown">
          <a href="#">
            <Link 
              to="/#hero" 
              className="active"
              onClick={() => handleMenuClick('Home', 'main_navigation')}
            >
              Home
            </Link> 
            <i className="bi bi-chevron-down toggle-dropdown"></i>
          </a>
          <ul>
            <li>
              <Link 
                to="/#about" 
                className="active"
                onClick={() => handleMenuClick('Nosotros', 'home_dropdown')}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link 
                to="/#services" 
                className="active"
                onClick={() => handleMenuClick('Soluciones', 'home_dropdown')}
              >
                Soluciones
              </Link>
            </li>
            <li>
              <Link 
                to="/#contact" 
                className="active"
                onClick={() => handleMenuClick('Contacto', 'home_dropdown')}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#">
            <Link 
              to="/personajes3d#hero" 
              className="active"
              onClick={() => handleMenuClick('Avatars 3D', 'main_navigation')}
            >
              Avatars 3D
            </Link> 
            <i className="bi bi-chevron-down toggle-dropdown"></i>
          </a>
          <ul>
            <li>
              <Link 
                to="/personajes3d#pricing"
                onClick={() => handleMenuClick('Planes', 'avatars_dropdown')}
              >
                Planes
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>
  );
};

export default Menu;
