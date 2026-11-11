import React from 'react';
import { useLang } from '../i18n/LanguageContext';

const projectMeta = [
  { technologies: ['Python', 'OpenAI / Groq', 'NLP', 'Scikit-learn', 'Regression', 'Random Forest'] },
  { technologies: ['Ollama', 'Qdrant', 'LangChain', 'MLflow', 'Python', 'Git'] },
  { technologies: ['HTML', 'CSS', 'JavaScript'], demoLink: '/archives/BENIN/index.html' },
  { technologies: ['HTML5', 'JavaScript', 'CSS'], demoLink: '/archives/assignment 6/index.html' },
  { technologies: ['HTML5', 'JavaScript', 'CSS'], demoLink: '/archives/PS5/assignment3.html' },
  { technologies: ['HTML', 'CSS'], demoLink: '/archives/ch10pacific/index.html' },
  { technologies: ['HTML', 'CSS', 'JavaScript', 'Chart.js'], demoLink: '/archives/restaurant-platform/about.html' }
];

const Projects = () => {
  const { t } = useLang();

  return (
    <section className="page projects-page">
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>{t.projects.title}</h1>
        <p style={{ textAlign: 'center', maxWidth: '740px', margin: '10px auto 0', color: '#555', lineHeight: '1.6' }}>
          {t.projects.intro}
        </p>
        <div className="projects-grid">
          {t.projects.items.map((project, index) => {
            const meta = projectMeta[index];
            return (
              <div key={project.title} className="project-card" style={{ padding: '25px' }}>
                <h3>{project.title}</h3>
                <p className="project-desc" style={{ marginTop: '10px', marginBottom: '12px' }}>{project.description}</p>

                <div className="project-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '15px' }}>
                  {meta.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        backgroundColor: '#eef2f7',
                        color: '#0056b3',
                        padding: '4px 10px',
                        borderRadius: '50px',
                        fontSize: '0.78rem',
                        fontWeight: '600',
                        border: '1px solid #d0e1fd'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="project-role"><strong>{t.projects.role}</strong> {project.role}</p>
                <p className="project-outcome"><strong>{t.projects.outcome}</strong> {project.outcome}</p>

                {meta.demoLink && (
                  <div className="project-actions" style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                    <a
                      href={meta.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '10px',
                        backgroundColor: '#0056b3',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        fontSize: '0.9rem'
                      }}
                    >
                      {t.projects.demo}
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
