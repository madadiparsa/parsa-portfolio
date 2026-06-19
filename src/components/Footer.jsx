import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 text-center" style={{ backgroundColor: 'var(--bs-secondary-bg)' }}>
      <div className="container">
        <p className="mb-0 text-secondary small fw-medium">
          &copy; {new Date().getFullYear()} Parsa Madadi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
