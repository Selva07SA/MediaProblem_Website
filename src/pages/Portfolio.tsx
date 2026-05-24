import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import './Portfolio.css';

const portfolioVideos = [
  {
    id: 1,
    title: 'SaaS Explainer Video - After Effects',
    videoUrl: '/assets/video/edite 2.mp4',
    description: 'A fresh SaaS explainer created in After Effects with premium visual design.',
  },
  {
    id: 2,
    title: 'Commercial SaaS Explainer for InterviewAxis',
    videoUrl: '/assets/video/video 2 NWM.mp4',
    description: 'Clean brand visuals and fast pacing for a commercial SaaS launch.',
  },
  {
    id: 3,
    title: 'Apply Style SaaS Explainer',
    videoUrl: '/assets/video/video 3 NWM.mp4',
    description: 'Stylized SaaS explainer inspired by MasterClass visuals and polished editing.',
  },
  {
    id: 4,
    title: 'Loki Product Launch Video',
    videoUrl: '/assets/video/video 4 NWM.mp4',
    description: 'A launch-focused edit for Loki with cinematic pacing and brand energy.',
  },
  {
    id: 5,
    title: 'Follow & Comment SaaS Project',
    videoUrl: '/assets/video/video 5 NWM.mp4',
    description: 'A social-first SaaS promo built to drive engagement and DM reach.',
  },
  {
    id: 6,
    title: 'Linear SaaS Explainer',
    videoUrl: '/assets/video/video 6 NVM.mp4',
    description: 'A sleek linear explainer with a clean visual narrative.',
  },
  
  {
    id: 7,
    title: 'POV Visuals SaaS Explainer',
    videoUrl: '/assets/video/video 9 NVM.mp4',
    description: 'A concept edit with a POV approach and polished UI presentation.',
  },
  {
    id: 8,
    title: 'AI Product Practice',
    videoUrl: '/assets/video/video 10 NVM.mp4',
    description: 'Practice edit for an imaginary AI company with refined product visuals.',
  },
  {
    id: 9,
    title: 'Quill Meetings Launch Video',
    videoUrl: '/assets/video/video 11 NVM.mp4',
    description: 'A launch video for an AI SaaS product with strong branding visuals.',
  },
  {
    id: 10,
    title: 'HeyMyra.ai SaaS Explainer',
    videoUrl: '/assets/video/video1 NWM.mp4',
    description: 'A client-focused SaaS explainer showing polished storytelling and visuals.',
  },
  
  {
    id: 11,
    title: 'Client Preview — Session B',
    videoUrl: '/assets/video/video 14.mp4',
    description: 'A follow-up preview from the same production session with revised pacing.',
  },
  {
    id: 12,
    title: 'Client Preview — Session C',
    videoUrl: '/assets/video/video 15.mp4',
    description: 'A polished preview clip exported directly from the project workflow.',
  },
];

const reelVideos = [
  {
    id: 101,
    title: 'Reel One',
    videoUrl: '/assets/video/reel_1.mp4',
    description: 'Short-form reel preview with a clean, cinematic edit.',
  },
  {
    id: 102,
    title: 'Reel Two',
    videoUrl: '/assets/video/reel_5.mp4',
    description: 'A compact reel focused on motion and rhythm.',
  },
  {
    id: 103,
    title: 'Reel Three',
    videoUrl: '/assets/video/reel_3.mp4',
    description: 'Another quick reel cut with strong pacing.',
  },
  {
    id: 104,
    title: 'Reel One Repeat',
    videoUrl: '/assets/video/reel_4.mp4',
    description: 'A repeated reel slot to complete the six-card set.',
  },
  {
    id: 105,
    title: 'Reel Two Repeat',
    videoUrl: '/assets/video/reel_2.mp4',
    description: 'A repeated reel slot to complete the six-card set.',
  },
  {
    id: 106,
    title: 'Reel Three Repeat',
    videoUrl: '/assets/video/reel_6.mp4',
    description: 'A repeated reel slot to complete the six-card set.',
  },
];

type PortfolioVideo = (typeof portfolioVideos)[number] | (typeof reelVideos)[number];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioVideo | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const blockVideoContextMenu = (event: MouseEvent<HTMLVideoElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (!selectedProject || !modalVideoRef.current) {
      return;
    }

    void modalVideoRef.current.play().catch(() => {
      // Browsers can still block autoplay in some cases.
    });
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
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <video
                    className="project-preview"
                    src={project.videoUrl}
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    loop
                    controls={false}
                    controlsList="nodownload noplaybackrate noremoteplayback"
                    disablePictureInPicture
                    onContextMenu={blockVideoContextMenu}
                    draggable={false}
                  />
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
            <h2>Reels</h2>
            <div className="reels-grid">
              {reelVideos.map((project) => (
                <div
                  key={project.id}
                  className="project-card reel-card"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image">
                    <video
                      className="project-preview"
                      src={project.videoUrl}
                      muted
                      playsInline
                      preload="metadata"
                      autoPlay
                      loop
                      controls={false}
                      controlsList="nodownload noplaybackrate noremoteplayback"
                      disablePictureInPicture
                      onContextMenu={blockVideoContextMenu}
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)} aria-label="Close video">
              X
            </button>
            <div className="video-container">
              <video
                ref={modalVideoRef}
                src={selectedProject.videoUrl}
                title={selectedProject.title}
                controls
                autoPlay
                playsInline
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture
                onContextMenu={blockVideoContextMenu}
                draggable={false}
              />
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
            {[
              { label: 'Projects Completed', value: '7000+' },
              { label: 'Happy Clients', value: '1500+' },
              { label: 'Years Experience', value: '6+' },
              { label: 'Editors', value: '25+' },
            ].map((stat, idx) => (
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
