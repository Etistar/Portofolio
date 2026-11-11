import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faCode, faGraduationCap, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useLang } from '../i18n/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLang();

  const navItems = [
    { path: '/', label: t.nav.home, icon: faHome },
    { path: '/about', label: t.nav.about, icon: faUser },
    { path: '/projects', label: t.nav.projects, icon: faCode },
    { path: '/education', label: t.nav.education, icon: faGraduationCap },
    { path: '/services', label: t.nav.services, icon: faBriefcase },
    { path: '/contact', label: t.nav.contact, icon: faEnvelope },
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

        <div className="nav-end">
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

          <div className="nav-actions">
            <div className="lang-switch" role="group" aria-label={t.nav.language}>
              <button
                type="button"
                className={lang === 'fr' ? 'active' : ''}
                onClick={() => setLang('fr')}
                aria-pressed={lang === 'fr'}
              >
                FR
              </button>
              <button
                type="button"
                className={lang === 'en' ? 'active' : ''}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
              {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
