import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="page home-page">
      <div className="container">
        <div className="hero">
          <h1>Etienne ZONON</h1>
          <p className="hero-subtitle">Senior Data Scientist & Statistician-Economist</p>
          <p className="mission">
            I apply econometrics, machine learning, and production-grade AI
            to forecasting, macrofinancial analysis, and decision support
            in finance and telecom. Fully bilingual (English / French),
            based in Ottawa.
          </p>
          <Link to="/about" className="btn btn-primary">
            View my profile
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
