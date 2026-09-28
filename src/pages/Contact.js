import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Data:', formData);
    navigate('/');
  };

  return (
    <section className="page contact-page">
      {/* Force global text centering */}
      <div className="container" style={{ textAlign: 'center' }}>
        
        <h1 style={{ marginBottom: '30px' }}>Contact Me</h1>
        
        {/* Same centered profile box as on the About page */}
        <div className="contact-profile-box" style={{
          maxWidth: '650px', /* More compact to fit the form shape */
          margin: '0 auto',
          background: '#ffffff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          textAlign: 'left' /* Reset label texts to the left for readability */
        }}>
          
          {/* Sleek info summary block above the form */}
          <div className="contact-info-summary" style={{ 
            textAlign: 'center', 
            marginBottom: '35px', 
            paddingBottom: '25px', 
            borderBottom: '1px solid #eee' 
          }}>
            <p style={{ margin: '5px 0', fontSize: '1.1rem', color: '#333' }}>
              <strong>Email:</strong> zononetienne2009@gmail.com
            </p>
            <p style={{ margin: '5px 0', fontSize: '1.1rem', color: '#333' }}>
              <strong>Phone:</strong> +1 (343) 558-6485 / + 229 66 55 67 66
            </p>
            <p style={{ margin: '5px 0', fontSize: '1.1rem', color: '#0056b3', fontWeight: 'bold' }}>
              <strong>Location:</strong> Canada (Ottawa)
            </p>
          </div>
          
          {/* Adjusted and spaced form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label htmlFor="firstName" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '1rem' }}
              />
            </div>
            
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label htmlFor="lastName" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '1rem' }}
              />
            </div>
            
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '1rem' }}
              />
            </div>
            
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '1rem' }}
              />
            </div>
            
            <div className="form-group" style={{ marginBottom: '25px' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '1rem', resize: 'vertical' }}
              />
            </div>
            
            {/* Centered button in the middle of the form */}
            <div style={{ textAlign: 'center' }}>
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{
                  display: 'inline-block',
                  padding: '12px 30px',
                  backgroundColor: '#0056b3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  transition: 'background-color 0.2s'
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
