import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: 'Services', path: '/#services' },
    { title: 'Portfolio', path: '/#portfolio' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MediaProblem</h3>
            <p>Professional media editing solutions for creators and businesses.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: hello@mediaproblem.in</p>
          </div>

          <div className="footer-section">
            
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} MediaProblem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
