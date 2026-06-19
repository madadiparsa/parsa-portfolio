import React from 'react';
import FadeInSection from './FadeInSection';

const About = () => {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: 'var(--bs-secondary-bg)' }}>
      <div className="container py-5">
        <FadeInSection>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-6 fw-bold mb-4 text-body border-bottom border-secondary pb-3 d-inline-block">About Me</h2>
              <p className="lead text-secondary fw-light lh-lg mt-3">
                I am a dedicated software developer with a strong foundation in back-end and data science technologies. 
                I focus on writing clean, elegant, and efficient code to solve complex problems. 
                Constantly learning and adapting to new technologies to deliver the best solutions.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;
