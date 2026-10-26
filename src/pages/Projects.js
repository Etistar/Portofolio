import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Macrofinancial Modeling Framework (BRVM Macrofinance Scout)',
      description: 'Automated text-mining and macroeconomic modeling for macro-desk research. A text engine using LLMs (Groq / OpenAI) turns financial feeds into structured sentiment, then several models forecast market moves.',
      role: 'Data Scientist',
      outcome: 'Net sentiment of +0.44 from the text pipeline. Multiple linear regression reached an R² of 0.68 (money-supply growth and bank capital strength), logistic regression a 68% short-term up-probability, and a random forest a 73% confidence on volatility regimes.',
      technologies: ['Python', 'OpenAI / Groq', 'NLP', 'Scikit-learn', 'Regression', 'Random Forest']
    },
    {
      id: 2,
      title: 'Agentic AI Telegram Assistant & Document Processor',
      description: 'A local, open-source RAG conversational assistant using Ollama and Qdrant, with run tracking in MLflow, plus a document pipeline that turns unstructured scans into validated JSON and Excel.',
      role: 'AI Engineer',
      outcome: 'Localized question answering over private documents, and an extraction flow with Qwen2.5-Coder that checks discrepancies before export.',
      technologies: ['Ollama', 'Qdrant', 'LangChain', 'MLflow', 'Python', 'Git']
    },
    {
      id: 3,
      title: 'Personal Portfolio & Cultural Showcase (Benin)',
      description: 'A multi-page responsive site introducing a personal background and the cultural heritage of Benin.',
      role: 'Web Developer',
      outcome: 'Responsive layout and clear navigation that stay readable across screen sizes.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '/archives/BENIN/index.html'
    },
    {
      id: 4,
      title: 'BugSmasher Interactive App',
      description: 'An interactive front end that tracks click coordinates and validates user actions in the browser.',
      role: 'Front-End Developer',
      outcome: 'DOM events, input checks, and a small interactive loop implemented in plain JavaScript.',
      technologies: ['HTML5', 'JavaScript', 'CSS'],
      demoLink: '/archives/assignment 6/index.html'
    },
    {
      id: 5,
      title: 'PS5 Interactive Location Map',
      description: 'A visual map for plotting regional PlayStation 5 retail locations.',
      role: 'Front-End Developer',
      outcome: 'Image-map interaction that links each region to a retailer page.',
      technologies: ['HTML5', 'JavaScript', 'CSS'],
      demoLink: '/archives/PS5/assignment3.html'
    },
    {
      id: 6,
      title: 'Pacific Trails Resort',
      description: 'A multi-page hospitality site built to a fixed visual specification.',
      role: 'Front-End Developer',
      outcome: 'Semantic pages with a shared stylesheet and a consistent layout across the resort sections.',
      technologies: ['HTML', 'CSS'],
      demoLink: '/archives/ch10pacific/index.html'
    },
    {
      id: 7,
      title: 'Restaurant Management Platform',
      description: 'A multi-page restaurant site for the menu, orders, gallery, and contact flow, with live charting of order activity.',
      role: 'Full-Stack Developer',
      outcome: 'Connected ordering screens to charted activity so the menu, orders, and summary stay in one place.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
      demoLink: '/archives/restaurant-platform/about.html'
    }
  ];

  return (
    <section className="page projects-page">
      <div className="container">
        <h1>Projects & Research Demonstrations</h1>
        <p style={{ textAlign: 'center', maxWidth: '740px', margin: '10px auto 0', color: '#555', lineHeight: '1.6' }}>
          Research prototypes from my data-science work, followed by selected web projects.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" style={{ padding: '25px' }}>
              <h3>{project.title}</h3>
              <p className="project-desc" style={{ marginTop: '10px', marginBottom: '12px' }}>{project.description}</p>

              <div className="project-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '15px' }}>
                {project.technologies.map((tech) => (
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

              <p className="project-role"><strong>Role:</strong> {project.role}</p>
              <p className="project-outcome"><strong>Outcome:</strong> {project.outcome}</p>

              {project.demoLink && (
                <div className="project-actions" style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <a
                    href={project.demoLink}
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
                    View Demo
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
