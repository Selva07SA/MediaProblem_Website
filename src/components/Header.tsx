import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/#home" className="logo" onClick={() => setIsMenuOpen(false)}>
          <img src="/assets/MediaLogo.png" alt="MediaProblem logo" />
        </Link>

        <nav id="primary-navigation" className={`nav ${isMenuOpen ? 'active' : ''}`} aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="nav-link" onClick={() => setIsMenuOpen(false)}>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary">
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="hamburger"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
