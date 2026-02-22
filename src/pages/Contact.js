import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/254799708249?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="page-content">
      <section className="contact-section full-page">
        <div className="container">
          <h2>Contact Us</h2>

          <div className="contact-grid">
            <div className="contact-info-section">
              <h3>Get In Touch</h3>
              <div className="contact-item">
                <strong>📧 Email:</strong>
                <p>info@simbasafaris.com</p>
              </div>
              <div className="contact-item">
                <strong>📱 Phone:</strong>
                <p>+254 799708249</p>
              </div>
              <div className="contact-item">
                <strong>📍 Location:</strong>
                <p>Mombasa, Kenya</p>
              </div>
              <div className="contact-item">
                <strong>⏰ Operating Hours:</strong>
                <p>Monday - Sunday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="contact-form-section">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="cta-button">Send via WhatsApp</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
