import React from 'react';

const Projects = () => {
  const projects = [ 
    {
      id: 0,
      title: 'Personal Portfolio & Cultural Showcase (Benin)',
      description: 'A multi-page responsive website designed to introduce my personal background, hobbies, and the cultural heritage of Benin.',
      role: 'Web Developer',
      outcome: 'Built a responsive digital identity and structured navigation that delivers an optimal viewing experience across all device screens.',
      technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
      demoLink: '/archives/BENIN/index.html',
      githubLink: '/archives/BENIN/'
    },
    {
      id: 1,
      title: 'Human Resources Analytics Dashboard',
      description: 'An interactive HR business intelligence project embedding functional corporate metrics, staffing analytics, and organizational charts.',
      role: 'Data Analyst & Developer',
      outcome: 'Successfully bridged business intelligence with web development, enabling dynamic presentation of complex enterprise data frameworks.',
      technologies: ['POWER BI', 'MS FABRIC', 'HTML', 'CSS', 'JAVASCRIPT'],
      demoLink: '/archives/HR Analytics/index.html',
      githubLink: '/archives/HR Analytics/'
    },
    {
      id: 2,
      title: 'BugSmasher Interactive App',
      description: 'A specialized application built as part of an academic assignment, featuring dynamic event-handling to track specific data coordinates.',
      role: 'Front-End Developer',
      outcome: 'Mastered core JavaScript DOM manipulation, event capturing, and logical validations required for interactive web tools.',
      technologies: ['HTML5', 'JAVASCRIPT', 'CSS'],
      demoLink: '/archives/assignment 6/index.html',
      githubLink: '/archives/assignment 6/'
    },
    {
      id: 3,
      title: 'PS5 Interactive Location Map',
      description: 'A dedicated web application integrating visual maps to trace and plot regional PlayStation 5 inventory and hub locations.',
      role: 'Front-End Developer',
      outcome: 'Successfully implemented API-driven visual elements, improving frontend asset delivery and geolocation mapping rendering.',
      technologies: ['HTML5', 'JAVASCRIPT', 'CSS', 'MAP'],
      demoLink: '/archives/assignment 6/index.html',
      githubLink: '/archives/assignment 6/'
    },
    {
      id: 4,
      title: 'Pacific Trails Resort - Case Study',
      description: 'Comprehensive development of a multi-page hotel and hospitality website following strict mockups and design documentation.',
      role: 'Front-End Developer',
      outcome: 'Delivered clean, standard-compliant semantic markup achieving 100% cross-browser compatibility and structural alignment.',
      technologies: ['HTML', 'CSS'],
      demoLink: '/archives/ch10pacific/index.html',
      githubLink: '/archives/ch10pacific/'
    },
    {
      id: 5,
      title: 'Pacific Trails Resort - Extended Features',
      description: 'An expanded iteration of the resort web project, focusing on advanced responsive grids and rich media modules.',
      role: 'Front-End Developer',
      outcome: 'Advanced my CSS structural skills by creating robust fluid grid patterns that preserve layout integrity during mobile scaling.',
      technologies: ['HTML', 'CSS'],
      demoLink: '/archives/ch10pacific/index.html',
      githubLink: '/archives/ch10pacific/'
    },
    {
      id: 6,
      title: 'Dynamic Restaurant Management Platform',
      description: 'A complete full-stack web application designed for interactive food ordering, menu alterations, and automated live analytics graphing.',
      role: 'Full-Stack Developer',
      outcome: 'Engineered a secure relational CRUD system connecting backend state workflows to optimized chart representations in real-time.',
      technologies: ['Node.js', 'Express', 'React', 'Chart.js', 'PostgreSQL'],
      demoLink: '/archives/EtienneZ_301559049_A3/about.html',
      githubLink: '/archives/EtienneZ_301559049_A3/'
    }
  ];

  return (
    <section className="page projects-page">
      <div className="container">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ padding: '25px' }}>
              {/* Title includes automatic numbering */}
              <h3>Project {index + 1}: {project.title}</h3>
              <p className="project-desc" style={{ marginTop: '10px', marginBottom: '12px' }}>{project.description}</p>
              
              {/* Technical Badges Section */}
              <div className="project-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '15px' }}>
                {project.technologies.map((tech, techIdx) => (
                  <span 
                    key={techIdx} 
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
              
              <div className="project-actions" style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <a 
                  href={project.githubLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '10px',
                    backgroundColor: '#24292e',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}
                >
                  GitHub Code
                </a>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
