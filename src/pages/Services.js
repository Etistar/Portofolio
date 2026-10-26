import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Quantitative Analysis & Modeling',
      description: 'Econometrics, time-series forecasting (ARIMA, Prophet), predictive modeling, customer segmentation, and machine learning (Random Forest, SVM, PCA) for finance and telecom.',
      icon: '📈'
    },
    {
      id: 2,
      title: 'Data Engineering on the Cloud',
      description: 'Reliable data products on Microsoft Fabric, Databricks, and Azure: PySpark pipelines, PostgreSQL, data quality checks, and reproducible foundations for reporting.',
      icon: '☁️'
    },
    {
      id: 3,
      title: 'Generative AI & RAG Systems',
      description: 'Large language models, agentic assistants, and retrieval-augmented generation with LangChain, from document extraction to enterprise question answering.',
      icon: '🤖'
    },
    {
      id: 4,
      title: 'Decision Support & Governance',
      description: 'Model governance, responsible AI, and stakeholder-ready insight: Power BI, reproducible research, and cross-functional delivery in Agile / Scrum.',
      icon: '📊'
    }
  ];

  return (
    <section className="page services-page">
      <div className="container">
        <h1>What I Work On</h1>
        <p style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto', color: '#555', lineHeight: '1.6' }}>
          The same mix of economic modeling and production engineering described in my profile:
          evidence for decisions, built so it can run.
        </p>
        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '25px',
          marginTop: '30px'
        }}>
          {services.map((service) => (
            <div key={service.id} className="service-card" style={{
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
      </div>
    </section>
  );
};

export default Services;
