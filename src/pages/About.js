import React from 'react';
import { useLang } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLang();
  const about = t.about;

  return (
    <section className="page about-page">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ marginBottom: '30px' }}>{about.title}</h1>

        <div className="about-profile-box" style={{
          maxWidth: '860px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          background: '#ffffff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}>
          <div className="about-image">
            <img
              src="/EtienneZONON.png"
              alt={about.portrait}
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          <div className="about-content-text" style={{ width: '100%' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '5px' }}>Etienne ZONON</h2>
            <p className="role" style={{ fontSize: '1.25rem', color: '#0b3a6e', fontWeight: '700', marginBottom: '4px' }}>
              {about.role}
            </p>
            <p style={{ fontSize: '1rem', color: '#475569', fontWeight: 600, marginBottom: '8px' }}>
              {about.roleDetail}
            </p>
            <p style={{ color: '#666', marginTop: 0, marginBottom: '24px' }}>
              {about.location}
            </p>

            <div style={{ marginBottom: '28px', textAlign: 'left' }}>
              <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'bold', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {about.profileLabel}
              </p>
              <p style={{ color: '#555', margin: 0, textAlign: 'justify', lineHeight: '1.6' }}>
                {about.profile}
              </p>
            </div>

            <div style={{ textAlign: 'left', marginBottom: '28px' }}>
              <h3 style={{ marginBottom: '12px', color: '#111' }}>{about.skillsTitle}</h3>
              <ul style={{ color: '#555', lineHeight: '1.7', paddingLeft: '18px', margin: 0 }}>
                {about.skills.map(([label, detail]) => (
                  <li key={label}><strong>{label}</strong> {detail}</li>
                ))}
              </ul>
            </div>

            <div style={{ textAlign: 'left' }}>
              <h3 style={{ marginBottom: '16px', color: '#111' }}>{about.experienceTitle}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {about.jobs.map((job) => (
                  <article key={job.role + job.period} style={{
                    borderLeft: '5px solid #0056b3',
                    background: '#f8fafc',
                    borderRadius: '8px',
                    padding: '18px 18px 14px 18px',
                    textAlign: 'left'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                      <h4 style={{ margin: 0, color: '#111' }}>{job.role}</h4>
                      <span style={{ color: '#0056b3', fontWeight: 'bold' }}>{job.period}</span>
                    </div>
                    <p style={{ margin: '6px 0 10px', color: '#444' }}>{job.org}</p>
                    <ul style={{ margin: '0 0 10px', paddingLeft: '18px', color: '#555', lineHeight: '1.55' }}>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <p style={{ margin: 0, color: '#666', fontSize: '0.92rem' }}>
                      <strong>{about.tools}</strong> {job.stack}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <p style={{ marginTop: '22px', color: '#555' }}>
              <strong>{about.languages}</strong> {about.languagesValue}
            </p>

            <div style={{ marginTop: '28px', textAlign: 'left' }}>
              <h3 style={{ marginBottom: '8px', color: '#111' }}>{about.diplomaTitle}</h3>
              <p style={{ margin: '0 0 4px', color: '#111', fontWeight: 700 }}>{about.diplomaName}</p>
              <p style={{ margin: '0 0 14px', color: '#0056b3' }}>{about.diplomaPlace}</p>
              <iframe
                title={about.diplomaName}
                src="/diplome/ISSEA.pdf"
                style={{
                  width: '100%',
                  height: '520px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  background: '#f8fafc'
                }}
              />
              <a
                href="/diplome/ISSEA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '14px',
                  padding: '10px 18px',
                  backgroundColor: '#ffffff',
                  color: '#0056b3',
                  border: '2px solid #0056b3',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold'
                }}
              >
                {about.diplomaButton}
              </a>
            </div>

            <a
              href="/diplome/resume.pdf"
              className="btn btn-primary"
              download
              style={{
                display: 'inline-block',
                marginTop: '8px',
                padding: '12px 24px',
                backgroundColor: '#0056b3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              {about.download}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
