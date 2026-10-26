import React from 'react';

const About = () => {
  const experience = [
    {
      role: 'AI Developer & Data Engineer',
      org: '4ChangeHub, Canada (Remote)',
      period: 'Aug. 2025 – Present',
      points: [
        'Design and industrialize end-to-end data products on Microsoft Fabric (Lakehouse, Data Factory, Warehouse) for reporting and strategic analysis.',
        'Implement scalable NLP pipelines and enterprise RAG architectures with LangChain and PostgreSQL.',
        'Transform and validate large datasets with PySpark and Python, with strict quality and anomaly checks.',
        'Align analytical solutions with performance-measurement goals alongside business and technology teams.'
      ],
      stack: 'Microsoft Fabric, Python, PySpark, PostgreSQL, LangChain, FastAPI, Streamlit, Power BI, Scikit-learn, SQL'
    },
    {
      role: 'Data Scientist',
      org: 'Orange Liberia, Remote',
      period: 'Oct. 2024 – Apr. 2025',
      points: [
        'Led quantitative analysis of large telecom datasets and financial KPIs (ARPU, AUPU, AUPA) and identified levers that improved operational efficiency by 15%.',
        'Deployed statistical anomaly-detection models that cut processing errors by 20%.',
        'Turned findings into executive-ready insight through interactive Power BI.'
      ],
      stack: 'Python, SQL, Scikit-learn, Power BI, anomaly detection, telecom KPIs'
    },
    {
      role: 'Data Scientist — Marketing',
      org: "Orange Côte d'Ivoire, Abidjan",
      period: 'Jan. 2023 – Sept. 2024',
      points: [
        'Built customer-behavior models, propensity scores, and likelihood-to-buy forecasts on a distributed big-data cluster to support retention and cross-sell.',
        'Used PCA and statistical segmentation for recommendation engines and marketing allocation.',
        'Industrialized Oracle T-SQL indicators and cut campaign tracking time by 40% with Agile / Scrum.',
        'Translated feature importance into clear actions for marketing and finance.'
      ],
      stack: 'Spark, PySpark, Python, Scikit-learn, Oracle SQL, Power BI, PCA, Scrum'
    },
    {
      role: 'Data Scientist — Technical Services',
      org: "Orange Côte d'Ivoire, Abidjan",
      period: 'Dec. 2019 – Dec. 2022',
      points: [
        'Developed network-performance forecasts with R, ARIMA, and Facebook Prophet for infrastructure planning.',
        'Automated extraction of Huawei U2000 network logs and reduced manual data-engineering work.',
        'Shipped an R Flexdashboard that removed about one week of manual reporting each month.'
      ],
      stack: 'R, Python, Facebook Prophet, ARIMA, Scikit-learn, R Flexdashboard, web scraping'
    }
  ];

  return (
    <section className="page about-page">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ marginBottom: '30px' }}>À propos de moi</h1>

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
              alt="Portrait de Etienne ZONON"
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
            <p className="role" style={{ fontSize: '1.2rem', color: '#0056b3', fontWeight: 'bold', marginBottom: '8px' }}>
              Senior Data Scientist and Statistician-Economist
            </p>
            <p style={{ color: '#666', marginTop: 0, marginBottom: '24px' }}>
              Ottawa, Ontario · Permanent Resident of Canada · English / French
            </p>

            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'bold', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                English
              </p>
              <p style={{ color: '#555', margin: 0, textAlign: 'justify', lineHeight: '1.6' }}>
                Senior Data Scientist and Statistician-Economist with over 6 years of experience applying advanced econometrics, machine learning, and emerging AI technologies to support evidence-based decision-making. Proven track record in designing predictive models, macrofinancial analysis, and time-series forecasting within financial and telecom sectors. Expert at leading cross-functional analytical initiatives and translating complex quantitative research into strategic insights for technical and non-technical stakeholders. Fully bilingual (English/French), blending strong economic modeling with production-grade engineering in cloud-native AI systems.
              </p>
            </div>

            <div style={{ marginBottom: '28px', textAlign: 'left' }}>
              <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'bold', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Français
              </p>
              <p style={{ color: '#555', margin: 0, textAlign: 'justify', lineHeight: '1.6' }}>
                Scientifique de données senior et ingénieur statisticien-économiste, avec plus de 6 ans d'expérience dans l'application de l'économétrie avancée, de l'apprentissage automatique et des technologies d'IA émergentes à la décision. Parcours confirmé en modèles prédictifs, analyse macrofinancière et prévision de séries temporelles, dans la finance et les télécoms. Habitué à conduire des initiatives analytiques transverses et à traduire une recherche quantitative complexe en éclairages stratégiques, pour des publics techniques comme non techniques. Pleinement bilingue (anglais/français), j'allie la modélisation économique à une ingénierie de production sur des systèmes d'IA natifs du cloud.
              </p>
            </div>

            <div style={{ textAlign: 'left', marginBottom: '28px' }}>
              <h3 style={{ marginBottom: '12px', color: '#111' }}>Core qualifications</h3>
              <ul style={{ color: '#555', lineHeight: '1.7', paddingLeft: '18px', margin: 0 }}>
                <li><strong>Quantitative analysis:</strong> econometrics, statistical modeling, time-series forecasting (ARIMA, Prophet), predictive modeling, customer segmentation, machine learning (Random Forest, SVM, PCA).</li>
                <li><strong>Emerging AI:</strong> generative AI, large language models, agentic architectures, retrieval-augmented generation (RAG), natural language processing.</li>
                <li><strong>Tools and cloud:</strong> Python, PySpark, R, SQL (Oracle T-SQL, PostgreSQL), Databricks, Microsoft Fabric, Azure, Git/GitHub.</li>
                <li><strong>Delivery:</strong> reproducible research, model governance, responsible AI, stakeholder engagement, Agile/Scrum.</li>
              </ul>
            </div>

            <div style={{ textAlign: 'left' }}>
              <h3 style={{ marginBottom: '16px', color: '#111' }}>Professional experience</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {experience.map((job) => (
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
                      <strong>Technologies:</strong> {job.stack}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <p style={{ marginTop: '22px', color: '#555' }}>
              <strong>Languages:</strong> English — professional working proficiency · French — native
            </p>

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
              Télécharger mon CV / Download my resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
