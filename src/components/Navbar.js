import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faCode, faGraduationCap, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => { //  On a enlevé ({ navigate }) d'ici
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: faHome },
    { path: '/about', label: 'About', icon: faUser },
    { path: '/projects', label: 'Projects', icon: faCode },
    { path: '/education', label: 'Education', icon: faGraduationCap },
    { path: '/services', label: 'Services', icon: faBriefcase },
    { path: '/contact', label: 'Contact', icon: faEnvelope },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo-link">
          <span className="logo-badge">EZ</span>
          <span className="logo-text">Etienne<span>ZONON</span></span>
        </Link>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
          {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={isActive(item.path) ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
