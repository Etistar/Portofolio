import React from 'react';
import { useLang } from '../i18n/LanguageContext';

const Education = () => {
  const { t } = useLang();
  const labels = {
    program: t.education.viewProgram,
    attestation: t.education.viewAttestation,
    certificate: t.education.viewCertificate
  };

  return (
    <section className="page education-page">
      <div className="container">
        <h1 style={{ marginBottom: '30px', textAlign: 'center' }}>{t.education.title}</h1>

        <div className="education-timeline" style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginTop: '30px' }}>
          {t.education.items.map((qual) => (
            <div
              key={qual.title}
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
                <strong>{t.education.institution}</strong> {qual.institution}
              </p>

              <p className="qualification-credential" style={{ margin: '0 0 20px 0', color: '#666', fontSize: '0.95rem' }}>
                <strong>{t.education.details}</strong> {qual.credential}
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
                {labels[qual.kind]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
