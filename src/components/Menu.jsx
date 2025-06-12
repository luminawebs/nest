import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav id="navmenu" className="navmenu" style={{width: "50%"}}>
      <ul>
    
        <li class="dropdown"><a href="#"><Link to="/#hero" className="active">Home</Link> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><Link to="/#about" className="active">Nosotros</Link></li>
            <li><Link to="/#services" className="active">Soluciones</Link></li>
            <li><Link to="/#contact" className="active">Contacto</Link></li>
          </ul>
        </li>

        <li class="dropdown"><a href="#"><Link to="/personajes3d#hero" className="active">Asistentes 3D</Link> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><Link to="/personajes3d#pricing">Planes</Link></li>
          </ul>
        </li>

      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>
  );
};

export default Menu;