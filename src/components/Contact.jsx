import React from 'react';
import FadeInSection from './FadeInSection';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-body text-center border-top border-secondary relative">
      <div className="container py-5 my-md-5">
        <FadeInSection>
          <h2 className="display-4 fw-bold mb-3 text-gradient">Let's Connect</h2>
          <p className="lead mb-5 text-secondary fw-light max-w-lg mx-auto">
            Whether you have a project in mind or just want to chat, feel free to reach out.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <a 
              href="mailto:madadiparsa24@gmail.com" 
              className="btn btn-contrast btn-lg px-5 py-3 fw-medium hover-scale d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-envelope me-2 fs-5"></i> Email Me
            </a>
            <a 
              href="https://t.me/Parsa_m999" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-contrast btn-lg px-5 py-3 fw-medium hover-scale d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-telegram me-2 fs-5"></i> Telegram
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;
