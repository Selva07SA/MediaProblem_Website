import { useRef, useState } from 'react';
import './Services.css';

export const Services = () => {
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const [selectedService, setSelectedService] = useState<{
    id: number;
    icon: string;
    title: string;
    video: string;
    description: string;
  } | null>(null);

  const services = [
    {
      id: 1,
      icon: 'SaaS',
      title: 'SaaS Explanation videos',
      video: '/assets/video/video 2 NWM.mp4',
      description: 'Clean product explanations built to make complex SaaS ideas feel simple and premium.',
    },
    {
      id: 2,
      icon: '9:16',
      title: 'Short Form videos',
      video: '/assets/video/reel_1.mp4',
      description: 'Fast, vertical edits designed for reels, shorts, and attention-first social posts.',
    },
    {
      id: 3,
      icon: '16:9',
      title: 'long form videos',
      video: '/assets/video/video 4 NWM.mp4',
      description: 'Longer form storytelling with smooth pacing, stronger structure, and polished visuals.',
    },
  ];

  const handleMouseEnter = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      video.play().catch(() => {
        // ignore autoplay blocking
      });
    }
  };

  const handleMouseLeave = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="services" id="services">
      <section className="services-hero">
        <div className="container">
          <div>
            <h1>Our Services</h1>
            <p>Focused video systems for SaaS brands, creators, and growth teams.</p>
          </div>
        </div>
      </section>

      <section className="services-grid">
        <div className="container">
          <div className="grid">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card"
                onMouseEnter={() => handleMouseEnter(service.id)}
                onMouseLeave={() => handleMouseLeave(service.id)}
                onClick={() => setSelectedService(service)}
              >
                <div className="service-video">
                  <video
                    ref={(element) => {
                      videoRefs.current[service.id] = element;
                    }}
                    src={service.video}
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    loop
                  />
                </div>

                <div className="service-content">
                  <div className="service-header">
                    <br />
                    <h3>{service.title}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div className="service-modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="service-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="service-modal-close"
              onClick={() => setSelectedService(null)}
              aria-label="Close service details"
            >
              X
            </button>
            <div className="service-modal-video">
              <video
                src={selectedService.video}
                muted
                autoPlay
                playsInline
                loop
                controls
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture
              />
            </div>
            <div className="service-modal-info">
              <h2>{selectedService.title}</h2>
              <p>{selectedService.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
