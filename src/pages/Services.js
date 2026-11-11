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
              background: '#f8f9fa',
              padding: '30px 20px',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              borderTop: '4px solid #0056b3'
            }}>
              <div className="service-icon" style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#333' }}>{service.title}</h3>
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
