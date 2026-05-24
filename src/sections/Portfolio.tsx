import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import './Portfolio.css';

const portfolioVideos = [
  { id: 1,
    title: 'Next-Gen SaaS Payment Platform',
    videoUrl: '/assets/video/edite 2.mp4', 
    description: ' A high-energy SaaS product launch showcasing a modern payment platform with seamless transactions, low industry fees, and powerful automation tools.' 
  },

  { id: 2, 
    title: 'InterviewAxis SaaS Launch Video', 
    videoUrl: '/assets/video/video 2 NWM.mp4', 
    description: 'A clean and modern SaaS launch video introducing InterviewAxis, an AI-powered interview preparation platform built to simplify career growth.' 
  },
  { id: 3, 
    title: 'AI Workspace SaaS Launch', 
    videoUrl: '/assets/video/video 3 NWM.mp4', 
    description: 'A modern SaaS product launch video showcasing an AI-powered workspace designed for smarter collaboration, task management, and streamlined communication..' 
  },
  { id: 4, 
    title: 'AI Automation SaaS Promo', 
    videoUrl: '/assets/video/video 4 NWM.mp4', 
    description: 'A futuristic SaaS launch promo introducing AI-driven automation tools for content generation, meeting summaries, and intelligent workflows..' 
  },
  { id: 5, 
    title: 'AI-Powered Workflow Automation Platform', 
    videoUrl: '/assets/video/video 5 NWM.mp4', 
    description: 'A cinematic SaaS launch video showcasing intelligent automation, seamless integrations, and productivity-focused features.' 
  },
  { id: 6, 
    title: 'Next-Generation Business Management Software', 
    videoUrl: '/assets/video/video 6 NVM.mp4', 
    description: 'A modern product promotion video highlighting powerful dashboard analytics, team collaboration tools, and streamlined operations.' 
  },
  { id: 7, 
    title: 'Modern Tech Brand Promo Video', 
    videoUrl: '/assets/video/video 9 NVM.mp4', 
    description: 'A sleek and modern launch video crafted for a SaaS platform, featuring smooth motion graphics, clean UI animations, and engaging transitions..' 
  },
  { id: 8, 
    title: 'Digital Product Advertisement', 
    videoUrl: '/assets/video/video 10 NVM.mp4', 
    description: 'A modern advertisement-style reel showcasing a digital product through cinematic visuals, fluid motion graphics, and impactful storytelling.' 
  },
  { id: 9, 
    title: 'Startup Launch Campaign Video', 
    videoUrl: '/assets/video/video 11 NVM.mp4', 
    description: 'A polished startup campaign video featuring modern editing, smooth visual effects, and engaging motion graphics to create a strong digital presence.' 
  },
  { id: 10, 
    title: 'Next-Gen Product Showcase Video', 
    videoUrl: '/assets/video/video1 NWM.mp4', 
    description: 'A clean and futuristic showcase video featuring engaging animations, stylish typography, and high-energy editing for a modern digital product..' 
  },
  { id: 11, 
    title: 'Premium App Showcase Edit', 
    videoUrl: '/assets/video/video 14.mp4', 
    description: 'A sleek promotional edit crafted for a modern app launch, combining smooth transitions, clean typography, and cinematic motion graphics..' 
  },
  { id: 12, 
    title: 'Innovative Brand Promo Edit', 
    videoUrl: '/assets/video/video 15.mp4', 
    description: 'A visually striking promo video designed with modern motion graphics, seamless transitions, and cinematic pacing for a premium brand presentation..' 
  },
];

const reelVideos = [
  { id: 101, title: 'Reel One', videoUrl: '/assets/video/reel_1.mp4', description: 'Short-form reel preview with a clean, cinematic edit.' },
  { id: 102, title: 'Reel Two', videoUrl: '/assets/video/reel_5.mp4', description: 'A compact reel focused on motion and rhythm.' },
  { id: 103, title: 'Reel Three', videoUrl: '/assets/video/reel_3.mp4', description: 'Another quick reel cut with strong pacing.' },
  { id: 104, title: 'Reel One Repeat', videoUrl: '/assets/video/reel_4.mp4', description: 'A repeated reel slot to complete the six-card set.' },
  { id: 105, title: 'Reel Two Repeat', videoUrl: '/assets/video/reel_2.mp4', description: 'A repeated reel slot to complete the six-card set.' },
  { id: 106, title: 'Reel Three Repeat', videoUrl: '/assets/video/reel_6.mp4', description: 'A repeated reel slot to complete the six-card set.' },
];

type PortfolioVideo = (typeof portfolioVideos)[number] | (typeof reelVideos)[number];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioVideo | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const blockVideoContextMenu = (event: MouseEvent<HTMLVideoElement>) => event.preventDefault();

  useEffect(() => {
    if (!selectedProject || !modalVideoRef.current) return;
    void modalVideoRef.current.play().catch(() => {});
  }, [selectedProject]);

  return (
    <div className="portfolio" id="portfolio">
      <section className="portfolio-hero">
        <div className="container">
          <div>
            <h1>Video Portfolio</h1>
            <p>Watch our latest creative video projects with instant preview and full-screen playback.</p>
          </div>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="container">
          <div className="portfolio-intro">
            <p>Click any video to open the full portfolio showcase.</p>
          </div>
          <div className="projects-grid">
            {portfolioVideos.map((project) => (
              <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
                <div className="project-image">
                  <video className="project-preview" src={project.videoUrl} autoPlay muted playsInline preload="metadata" loop controls={false} controlsList="nodownload noplaybackrate noremoteplayback" disablePictureInPicture onContextMenu={blockVideoContextMenu} draggable={false} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reels-section">
          <br />
          <h2>Reels</h2>
          <div className="reels-grid">
            {reelVideos.map((project) => (
              <div key={project.id} className="project-card reel-card" onClick={() => setSelectedProject(project)}>
                <div className="project-image">
                  <video className="project-preview" src={project.videoUrl} muted playsInline preload="metadata" autoPlay loop controls={false} controlsList="nodownload noplaybackrate noremoteplayback" disablePictureInPicture onContextMenu={blockVideoContextMenu} draggable={false} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)} aria-label="Close video">X</button>
            <div className="video-container">
              <video ref={modalVideoRef} src={selectedProject.videoUrl} title={selectedProject.title} controls autoPlay playsInline controlsList="nodownload noplaybackrate noremoteplayback" disablePictureInPicture onContextMenu={blockVideoContextMenu} draggable={false} />
            </div>
            <div className="modal-info">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      <section className="portfolio-stats">
        <div className="container">
          <div className="stats-grid">
            {[{ label: 'Projects Completed', value: '7000+' }, { label: 'Happy Clients', value: '1500+' }, { label: 'Years Experience', value: '6+' }, { label: 'Editors', value: '25+' }].map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
