import { useEffect } from 'react';
import { detectAndStoreRegion } from '../utils/cookies';
import './Landing.css';

export const Landing = () => {
  useEffect(() => {
    detectAndStoreRegion();
  }, []);

  const features = [
    {
      icon: '✨',
      title: 'Professional Editing',
      description: 'Turn Complex Software Features into Crystal-Clear walkthroughs, Explainer Videos and Ads that drive sign-ups. ',
    },
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'Speed Matters. We Deliver your Promo videos on time for your production hunt, kickstarter, or Major version realease. ',
    },
    {
      icon: '💎',
      title: 'Premium Quality',
      description: 'Crisp 4K Edits, flawless Zoom-ings on your Software UI, and Smooth Animations that Highlight your products best features. ',
    },
    {
      icon: '🎯',
      title: 'Custom Solutions',
      description: 'Flexiable Video Production that adopts to your product roadmap, Helping you launch new features, Updates, and Micro-tools on demand.',
    },
  ];

  return (
    <div className="landing" id="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">
              <span className="hero-heading-part hero-heading-left">Transform&nbsp;</span>
              <span className="hero-heading-part hero-heading-top">Your Creative&nbsp;</span>
              <span className="hero-heading-part hero-heading-right">Vision</span>
            </h1>
            <p>Professional media editing solutions for creators, businesses, and brands</p>
            <div className="hero-buttons">
              <a href="/contact" className="btn btn-primary">
                Start Your Project
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
                   <h2>Why Choose MediaProblem?</h2>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
