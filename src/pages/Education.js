import React from 'react';

const Education = () => {
  const qualifications = [
    {
      id: 1,
      title: 'Software Engineering Technology — Artificial Intelligence',
      institution: 'Centennial College, Online',
      period: 'Jan. 2026 – Present',
      credential: 'Cloud AI solutions, distributed data streaming, scalable software architectures, and automated validation.',
      link: 'https://centennialcollege.ca',
      linkLabel: 'View program'
    },
    {
      id: 2,
      title: "Master's Degree in Data Science & Big Data",
      institution: 'INP-HB, Côte d\'Ivoire',
      period: 'Sept. 2018 – Dec. 2019',
      credential: 'International Data Science Institute. WES equivalency available.',
      link: '/diplome/diploma-IDSI.pdf',
      linkLabel: 'View attestation'
    },
    {
      id: 3,
      title: 'Engineer — Statistician-Economist',
      institution: 'ISSEA, Cameroon',
      period: 'Sept. 2015 – July 2018',
      credential: 'Advanced quantitative methods, macroeconomics, structural econometric modeling, and economic forecasting. Focus: statistical modeling applied to finance and insurance.',
      link: '/diplome/ISSEA.pdf',
      linkLabel: 'View attestation'
    },
    {
      id: 4,
      title: 'Senior Statistics Technician',
      institution: 'ENEAM, Université d\'Abomey-Calavi, Benin',
      period: '2012 – 2013',
      credential: 'Attestation de diplôme, technicien supérieur en statistiques.',
      link: '/diplome/ENEAM.pdf',
      linkLabel: 'View attestation'
    },
    {
      id: 5,
      title: 'Microsoft Certified: Fabric Data Engineer Associate (DP-700)',
      institution: 'Microsoft',
      period: '2025',
      credential: 'Microsoft Fabric data engineering.',
      link: '/diplome/DP700.pdf',
      linkLabel: 'View certificate'
    },
    {
      id: 6,
      title: 'Microsoft Certified: Azure Databricks Data Engineer Associate (DP-750)',
      institution: 'Microsoft',
      period: '2026',
      credential: 'Azure Databricks data engineering.',
      link: '/diplome/DP750.pdf',
      linkLabel: 'View certificate'
    },
    {
      id: 7,
      title: 'Microsoft Certified: SQL AI Developer Associate (DP-800)',
      institution: 'Microsoft',
      period: '2026',
      credential: 'AI-enabled database solutions.',
      link: '/diplome/DP800.pdf',
      linkLabel: 'View certificate'
    },
    {
      id: 8,
      title: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
      institution: 'Microsoft',
      period: '2025',
      credential: 'Artificial intelligence fundamentals.',
      link: '/diplome/Azure_AI.pdf',
      linkLabel: 'View certificate'
    },
    {
      id: 9,
      title: 'Advanced Data Science with IBM',
      institution: 'Coursera / IBM',
      period: '2022',
      credential: 'Scalable data science, advanced machine learning, deep learning, and a capstone.',
      link: '/diplome/Advanced Data science.pdf',
      linkLabel: 'View certificate'
    },
    {
      id: 10,
      title: 'Generative AI with Large Language Models',
      institution: 'Coursera / DeepLearning.AI',
      period: '2024',
      credential: 'Large language models, with DeepLearning.AI and AWS.',
      link: '/diplome/GenAI.pdf',
      linkLabel: 'View certificate'
    },
    {
      id: 11,
      title: 'Google Project Management & Agile',
      institution: 'Coursera / Google',
      period: '2022',
      credential: 'Agile project management.',
      link: '/diplome/Google_project_management.pdf',
      linkLabel: 'View certificate'
    },
    {
      id: 12,
      title: 'Scrum Master Certification',
      institution: 'LearnQuest',
      period: '2022',
      credential: 'Scrum delivery, scaling Agile, and related engineering practices.',
      link: '/diplome/Scrum_master.pdf',
      linkLabel: 'View certificate'
    },
    {
      id: 13,
      title: 'IBM Data Analyst Professional Certificate',
      institution: 'Coursera / IBM',
      period: '2025',
      credential: 'Data analysis with Excel, SQL, Python, and dashboards.',
      link: '/diplome/Data_Analyst.pdf',
      linkLabel: 'View certificate'
    }
  ];

  return (
    <section className="page education-page">
      <div className="container">
        <h1 style={{ marginBottom: '30px', textAlign: 'center' }}>Education & Certifications</h1>

        <div className="education-timeline" style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginTop: '30px' }}>
          {qualifications.map((qual) => (
            <div
              key={qual.id}
              className="qualification-card"
              style={{
                background: '#ffffff',
                padding: '25px',
                borderRadius: '10px',
                borderLeft: '5px solid #0056b3',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                borderTop: '1px solid #eee',
                borderRight: '1px solid #eee',
                borderBottom: '1px solid #eee'
              }}
            >
              <div className="qualification-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', gap: '12px' }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#111', fontWeight: '700' }}>{qual.title}</h3>
                <span className="qualification-period" style={{ fontWeight: 'bold', color: '#0056b3', fontSize: '0.95rem', whiteSpace: 'nowrap' }}>{qual.period}</span>
              </div>

              <p className="qualification-institution" style={{ margin: '0 0 6px 0', color: '#444', fontSize: '1rem' }}>
                <strong>Institution:</strong> {qual.institution}
              </p>

              <p className="qualification-credential" style={{ margin: '0 0 20px 0', color: '#666', fontSize: '0.95rem' }}>
                <strong>Details:</strong> {qual.credential}
              </p>

              <a
                href={qual.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-certif"
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  backgroundColor: '#ffffff',
                  color: '#0056b3',
                  border: '2px solid #0056b3',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  fontSize: '0.85rem'
                }}
              >
                {qual.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
