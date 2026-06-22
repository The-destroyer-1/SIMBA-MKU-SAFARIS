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
        <div className="site-container contact-shell">
          <div className="page-hero__inner contact-shell__header">
            <div>
              <p className="eyebrow">Contact Us</p>
              <h2>Get in touch or send a message directly.</h2>
            </div>
          </div>

          <div className="contact-grid">
            <article className="contact-card contact-info-section">
              <h3>Get In Touch</h3>
              <div className="contact-item">
                <strong>📧 Email:</strong>
                <p>simbamkusafaris@gmail.com</p>
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
            </article>

            <article className="contact-card contact-form-section">
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
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
