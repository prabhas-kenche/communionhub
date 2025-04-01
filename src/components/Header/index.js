import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="navbar-content">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png"
            className="communion-logo"
            alt="communion-logo"
          />
        </NavLink>

        <button
          className="menu-toggle"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((prev) => !prev);
          }}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        ref={menuRef}
        className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          {['/', '/events', '/about'].map((path, index) => (
            <NavLink
            key={index}
            className={({ isActive }) => `nav-link ${isActive ? 'active-nav' : ''}`}
            to={path}
            onClick={() => setMenuOpen(false)}
          >
            {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
          </NavLink>          
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
