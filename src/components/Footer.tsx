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
                  <a href={link.path}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: info@mediaproblem.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" aria-label="Twitter">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} MediaProblem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
