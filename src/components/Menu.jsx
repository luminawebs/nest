import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <li><Link to="/" className="active">Home</Link></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#services">Soluciones</a></li>
        <li><a href="#pricing">Planes</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><Link to="/personajes3d">Personajes 3D</Link></li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>
  );
};

export default Menu;