import React from 'react';

const About = () => {
  const features = [
    {
      title: 'Expert Guides',
      description: 'Our experienced guides have decades of safari experience and local knowledge.'
    },
    {
      title: 'Luxury Camps',
      description: 'Stay in comfort with our hand-picked eco-friendly lodges and luxury camps.'
    },
    {
      title: 'Small Groups',
      description: 'We keep groups small for personalized service and authentic experiences.'
    },
    {
      title: 'Safety First',
      description: 'Your safety is our priority with modern vehicles and trained professionals.'
    }
  ];

  return (
    <div className="page-content">
      <section className="about-section full-page">
        <div className="container">
          <h2>About simba mku safari</h2>
          
          <div className="about-intro">
              <p>
              simba mku safari is your gateway to unforgettable African safari experiences. Based in Mombasa, Kenya, 
              we specialize in creating authentic, immersive wildlife adventures across Kenya's most stunning destinations.
            </p>
            <p>
              With years of experience and a passion for wildlife conservation, we offer expertly guided safaris 
              that showcase Kenya's incredible biodiversity and natural beauty.
            </p>
          </div>

          <h3 style={{marginTop: '40px', marginBottom: '30px'}}>Why Choose simba mku safari?</h3>
          <div className="about-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="about-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="about-mission" style={{marginTop: '50px'}}>
            <h3>Our Mission</h3>
            <p>
              To provide exceptional safari experiences that connect travelers with Africa's remarkable wildlife 
              and landscapes while promoting sustainable tourism and conservation practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
