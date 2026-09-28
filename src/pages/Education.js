import React from 'react';

const Education = () => {
  const qualifications = [
    {
      id: 1,
      title: 'Software Engineering & AI',
      institution: 'Centennial College',
      period: 'January – August 2026',
      credential: 'Specialized Training (Python, JavaScript, C#, Linux, HTML/CSS)',
      link: 'https://centennialcollege.ca'
    },
    {
      id: 2,
      title: "Master's Degree in Data Science",
      institution: 'INP-HB (Institut National Polytechnique Félix Houphouët-Boigny)',
      period: '2018 - 2019',
      credential: "Specialized Master's Degree",
      link: '/diplome/diploma-IDSI.pdf'
    },
    {
      id: 3,
      title: 'Statistical Economist Engineer (ISE)',
      institution: "ISSEA (Sub-regional Institute of Statistics and Applied Economics) - Cameroon",
      period: '2015 - 2018',
      credential: "Engineering Degree",
      link: '/diplome/ISSEA.pdf'
    },
    {
      id: 0,
      title: 'Senior Statistics Technician (ISE)',
      institution: 'ENEAM (National School of Applied Economics and Management) - Cameroon',
      period: '2010 - 2013',
      credential: 'Senior Statistics Technician Diploma',
      link: '/diplome/ENEAM.pdf'
    },
    {
      id: 12,
      title: 'English Proficiency Level 4',
      institution: 'Conestoga College',
      period: 'December 2025',
      credential: 'Professional Language Proficiency Certification',
      link: '/archives/Conestoga_English_Certificate.pdf'
    },
    {
      id: 4,
      title: 'Microsoft Certified: Fabric Data Engineer Associate (DP-700)',
      institution: 'Microsoft',
      period: '2025',
      credential: 'Azure & Fabric Professional Certification',
      link: '/diplome/DP700.pdf'
    },
    {
      id: 5,
      title: 'Microsoft Certified: Azure Databricks Data Engineer Associate (DP-750)',
      institution: 'Microsoft',
      period: '2025',
      credential: 'Cloud & Databricks Professional Certification',
      link: '/diplome/DP750.pdf'
    },

      {
      id: 20,
      title: 'Microsoft Certified: Azure Databricks Data Engineer Associate (DP-800)',
      institution: 'Microsoft',
      period: '2025',
      credential: 'Cloud & SQL Professional Certification',
      link: '/diplome/DP800.pdf'
    },
    {
      id: 6,
      title: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
      institution: 'Microsoft',
      period: '2025',
      credential: 'Artificial Intelligence Fundamentals Certification',
      link: '/diplome/Azure_AI.pdf'
    },
    {
      id: 7,
      title: 'IBM Data Science Professional Certificate',
      institution: 'Coursera / IBM',
      period: '2024',
      credential: 'Expert Professional Certificate',
      link: '/diplome/Advanced Data science.pdf'
    },
    {
      id: 8,
      title: 'Data Analyst Professional Certification',
      institution: 'NPower Canada',
      period: 'May 2025 - July 2025',
      credential: 'Data Analytics Acceleration Program',
      link: '/diplome/Data_Analyst.pdf'
    },
    {
      id: 9,
      title: 'Generative AI with Large Language Models',
      institution: 'Coursera / DeepLearning.AI',
      period: '2024',
      credential: 'Generative AI Specialization Certificate',
      link: '/diplome/GenAI.pdf'
    },
    {
      id: 10,
      title: 'Project Management & Agile Certification',
      institution: 'Coursera / Google',
      period: '2024',
      credential: 'Google Project Management Professional Certificate',
      link: '/diplome/Google_project_management.pdf' 
    },
    {
      id: 11,
      title: 'Scrum Master Certification',
      institution: 'LearnQuest',
      period: '2024',
      credential: 'Scrum Master Attestation',
      link: '/diplome/Scrum_master.pdf'
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
              <div className="qualification-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#111', fontWeight: '700' }}>{qual.title}</h3>
                <span className="qualification-period" style={{ fontWeight: 'bold', color: '#0056b3', fontSize: '0.95rem' }}>{qual.period}</span>
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
                  fontSize: '0.85rem', 
                  transition: 'all 0.2s ease' 
                }}
              >
                {qual.period === 'In progress' ? 'View Curriculum' : 'Verify Certification'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
