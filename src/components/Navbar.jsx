import React, { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/madadiparsa')
      .then((response) => response.json())
      .then((data) => setGithubData(data))
      .catch((error) => console.error('Error fetching GitHub data:', error));
  }, []);

  return (
    <div className="navbar-island-wrapper d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg navbar-island px-3 px-md-4 col-11 col-md-9 col-lg-8">
        <div className="container-fluid p-0">
          <a className="navbar-brand fw-bold fs-5 text-body m-0" href="#home">
            {githubData ? githubData.name || githubData.login : 'Parsa Madadi'}
          </a>

          <div className="d-flex align-items-center gap-2 d-lg-none">
            <button className="btn btn-link text-body p-0 border-0" onClick={toggleTheme}>
              <i className={`bi ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'} fs-5`}></i>
            </button>
            <button className="navbar-toggler border-0 shadow-none text-body p-1" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} fs-3`}></i>
            </button>
          </div>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show bg-body p-3 rounded-4 mt-3 border position-absolute top-100 start-0 w-100 shadow-lg' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-lg-3">
              {['About', 'Tech Stack', 'Projects', 'Contact'].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link text-body fw-medium" href={`#${item.toLowerCase().replace(' ', '')}`} onClick={() => setIsMenuOpen(false)}>
                    {item}
                  </a>
                </li>
              ))}
              
              <li className="nav-item d-none d-lg-block ms-2">
                <button className="btn btn-link text-body p-0 border-0 d-flex align-items-center hover-scale" onClick={toggleTheme} title="Toggle Theme">
                  <i className={`bi ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'} fs-5`}></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
