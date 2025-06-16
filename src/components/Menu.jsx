import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackMenuClick } from '../utils/analytics';

const Menu = () => {
  const location = useLocation();
  
  // Handle menu click tracking
  const handleMenuClick = (menuItem, section = 'main_navigation') => {
    trackMenuClick(menuItem, section);
  };

  // Handle dropdown toggle for mobile
  const handleDropdownToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const dropdown = e.target.closest('.dropdown');
    const dropdownMenu = dropdown.querySelector('ul');
    
    // Toggle active class on parent
    dropdown.classList.toggle('active');
    // Toggle dropdown-active class on submenu
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('dropdown-active');
    }
  };

  // Handle mobile nav toggle
  const handleMobileNavToggle = () => {
    const body = document.querySelector('body');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    
    body.classList.toggle('mobile-nav-active');
    mobileNavToggle.classList.toggle('bi-list');
    mobileNavToggle.classList.toggle('bi-x');
  };

  // Close mobile nav when clicking on menu items
  const handleNavItemClick = (menuItem, section) => {
    handleMenuClick(menuItem, section);
    
    // Close mobile menu if open
    const body = document.querySelector('body');
    if (body.classList.contains('mobile-nav-active')) {
      handleMobileNavToggle();
    }
  };

  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <li className="dropdown">
          <Link
            to="/"
            onClick={() => handleNavItemClick('Home', 'main_navigation')}
          >
            Home
            <i className="bi bi-chevron-down toggle-dropdown" onClick={handleDropdownToggle}></i>
          </Link>
          <ul>
            <li>
              <a
                href="#about"
                onClick={() => handleNavItemClick('Nosotros', 'home_dropdown')}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => handleNavItemClick('Soluciones', 'home_dropdown')}
              >
                Soluciones
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handleNavItemClick('Contacto', 'home_dropdown')}
              >
                Contacto
              </a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link
            to="/personajes3d"
            onClick={() => handleNavItemClick('Avatars 3D', 'main_navigation')}
          >
            Avatars 3D
            <i className="bi bi-chevron-down toggle-dropdown" onClick={handleDropdownToggle}></i>
          </Link>
          <ul>
            <li>
              <a
                href="/personajes3d#pricing"
                onClick={() => handleNavItemClick('Planes', 'avatars_dropdown')}
              >
                Planes
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link
            to="/lmspricing"
            onClick={() => handleNavItemClick('LMS SaaS', 'main_navigation')}
          >
            LMS SaaS
          </Link>
        </li>
      </ul>
      <i 
        className="mobile-nav-toggle d-xl-none bi bi-list"
        onClick={handleMobileNavToggle}
      ></i>
    </nav>
  );
};

export default Menu;
