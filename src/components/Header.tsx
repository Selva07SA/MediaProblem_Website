import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/#home' },
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/#portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/#home" className="logo">
          <img src="/assets/MediaLogo.png" alt="MediaProblem logo" />
        </Link>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <div key={item.path}>
              <Link to={item.path} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary">
            Get Started
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
