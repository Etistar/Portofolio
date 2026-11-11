import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

const Home = () => {
  const { t } = useLang();

  return (
    <section className="page home-page">
      <div className="container">
        <div className="hero">
          <h1>Etienne ZONON</h1>
          <p className="hero-subtitle">{t.home.subtitle}</p>
          <p className="mission">{t.home.mission}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '1.75rem' }}>
            {t.home.highlights.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                style={{
                  background: 'white',
                  color: '#0056b3',
                  border: '1px solid #d0e1fd',
                  borderRadius: '999px',
                  padding: '6px 14px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <Link to="/services" className="btn btn-primary" style={{
              padding: '12px 24px',
              backgroundColor: '#0056b3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold'
            }}>
              {t.home.services}
            </Link>
            <Link to="/about" style={{
              padding: '12px 24px',
              backgroundColor: 'white',
              color: '#0056b3',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              border: '2px solid #0056b3'
            }}>
              {t.home.profile}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
