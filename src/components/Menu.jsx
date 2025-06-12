import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <li><Link to="/#hero" className="active">Home</Link></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#services">Soluciones</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><Link to="/personajes3d#hero">Asistentes 3D</Link></li>
        <li><Link to="/personajes3d#pricing">Planes</Link></li>


        <li class="dropdown"><a href="#"><span>Home</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><a href="#">Dropdown 1</a></li>
            <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Deep Dropdown 1</a></li>
                <li><a href="#">Deep Dropdown 2</a></li>
                <li><a href="#">Deep Dropdown 3</a></li>
                <li><a href="#">Deep Dropdown 4</a></li>
                <li><a href="#">Deep Dropdown 5</a></li>
              </ul>
            </li>
            <li><a href="#">Dropdown 2</a></li>
            <li><a href="#">Dropdown 3</a></li>
            <li><a href="#">Dropdown 4</a></li>
          </ul>
        </li>

      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>
  );
};

export default Menu;