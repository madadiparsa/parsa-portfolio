import React from 'react';
import FadeInSection from './FadeInSection';

const TechStack = () => {
  const skills = [
    { icon: 'bi-code-slash', category: 'Languages', items: ['Python', 'JavaScript', 'C'] },
    { icon: 'bi-server', category: 'Backend', items: ['Django', 'Django REST Framework'] },
    { icon: 'bi-window-fullscreen', category: 'Frontend', items: ['React JS', 'HTML', 'CSS', 'Tailwind', 'Bootstrap'] },
    { icon: 'bi-database', category: 'Databases', items: ['SQL Server', 'SQLite', 'PostgreSQL'] },
    { icon: 'bi-graph-up', category: 'Data Science', items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn'] },
  ];


  return (
    <section id="techstack" className="py-5 bg-body">
      <div className="container py-5">
        <FadeInSection>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-gradient mb-3">Tech Stack</h2>
            <p className="text-secondary fw-light">Technologies I work with to bring ideas to life.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {skills.map((skillGroup, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="tech-card h-100 p-4">
                  <div className="d-flex align-items-center mb-4">
                    <i className={`bi ${skillGroup.icon} fs-3 me-3 text-body`}></i>
                    <h5 className="fw-bold mb-0 text-body fs-4">
                      {skillGroup.category}
                    </h5>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {skillGroup.items.map((item, idx) => (
                      <span key={idx} className="badge tech-badge px-3 py-2 rounded-pill fw-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default TechStack;
