import React from 'react';
import FadeInSection from './FadeInSection';

const Projects = () => {
  return (
    <section id="projects" className="py-5" style={{ backgroundColor: 'var(--bs-secondary-bg)' }}>
      <div className="container py-5">
        <FadeInSection>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4 text-gradient">Projects</h2>
              <div className="tech-card p-5 mt-4">
                <i className="bi bi-github display-1 text-body mb-4 d-block transition-all hover-scale"></i>
                <h3 className="h4 mb-4 text-secondary fw-light lh-base">
                  Explore my open-source projects, algorithms, and contributions directly on GitHub.
                </h3>
                <a
                  href="https://github.com/madadiparsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-contrast btn-lg px-5 py-3 mt-3 fw-medium hover-scale"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Projects;
