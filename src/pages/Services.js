import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

const stack = [
  'PostgreSQL', 'Oracle T-SQL', 'SSIS', 'Power BI', 'Python', 'R',
  'FastAPI', 'React', 'JavaScript', 'C#', 'HTML/CSS', 'Git', 'Linux',
  'Microsoft Fabric', 'Databricks', 'Agile / Scrum'
];

const Services = () => {
  const { t } = useLang();

  return (
    <section className="page services-page">
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>{t.services.title}</h1>
        <p style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto', color: '#555', lineHeight: '1.6' }}>
          {t.services.intro}
        </p>
        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '25px',
          marginTop: '30px'
        }}>
          {t.services.items.map((service) => (
            <div key={service.title} className="service-card" style={{
              background: '#ffffff',
              padding: '24px 22px',
              borderRadius: '10px',
              textAlign: 'left',
              boxShadow: '0 1px 2px rgba(15, 23, 42, 0.06)',
              border: '1px solid #e2e8f0',
              borderTop: '3px solid #0b3a6e'
            }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: '#0f172a', letterSpacing: '-0.01em' }}>{service.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.5', fontSize: '0.95rem', margin: 0 }}>{service.description}</p>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: '860px', margin: '48px auto 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '16px', color: '#111' }}>{t.services.tools}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {stack.map((item) => (
              <span
                key={item}
                style={{
                  backgroundColor: '#eef2f7',
                  color: '#0056b3',
                  padding: '6px 12px',
                  borderRadius: '50px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  border: '1px solid #d0e1fd'
                }}
              >
                {item}
              </span>
            ))}
          </div>
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{
              display: 'inline-block',
              marginTop: '28px',
              padding: '12px 24px',
              backgroundColor: '#0056b3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold'
            }}
          >
            {t.services.cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
