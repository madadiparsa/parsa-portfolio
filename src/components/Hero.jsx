import React from 'react';
import FadeInSection from './FadeInSection';

const Hero = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center bg-body text-body pt-5 relative">
      <div className="container">
        <FadeInSection className="row align-items-center justify-content-center text-center">
          <div className="col-lg-8">
            <div className="mb-4 mt-5 pt-4">
              <img
                src="/assets/profile.jpg"
                alt="Parsa Madadi"
                className="rounded-circle object-fit-cover hover-scale border border-3 border-secondary p-1"
                width="160"
                height="160"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://avatars.githubusercontent.com/madadiparsa";
                }}
              />
            </div>
            <h1 className="display-2 fw-bold mb-3 tracking-tight text-gradient">Parsa Madadi</h1>
            <p className="lead text-secondary mb-5 px-md-5 fw-light fs-4">
              Crafting elegant, functional, and high-performance digital experiences.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href="#projects" className="btn btn-contrast btn-lg px-5 py-3 fw-medium hover-scale">View Projects</a>
              <a href="#contact" className="btn btn-outline-contrast btn-lg px-5 py-3 fw-medium hover-scale">Contact Me</a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Hero;
