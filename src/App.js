import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tours from './pages/Tours';
import Destinations from './pages/Destinations';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="header">
          <div className="header-content">
            <div className="logo-title-wrapper">
              <img src={require('./Screenshot 2026-02-22 210101.png')} alt="simba mku safari Logo" className="header-logo-image" />
              <h1>SIMBA MKU SAFARIS</h1>
            </div>
            <p className="tagline">Discover the Wild Heart of Kenya</p>
            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/tours">Tours</Link>
              <Link to="/destinations">Destinations</Link>
              <Link to="/about">About</Link>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2026 simba mku safari. All rights reserved. | Your trusted Safari Partner</p>
        </footer>
      </div>
    </Router>
  );
}

function HomePage() {
  const [selectedTour, setSelectedTour] = useState(null);

  const tours = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=350&fit=crop',
      name: 'Masai Mara Adventure',
      duration: '5 Days',
      description: 'Experience the Great Migration and abundant wildlife in the iconic Masai Mara National Reserve.',
      highlights: ['Wildlife Safari', 'Balloon Ride', 'Maasai Village Visit', 'Photography Tours']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=500&h=350&fit=crop',
      name: 'Tsavo Safari Adventure',
      duration: '4 Days',
      description: 'Explore the vast wilderness of Tsavo with expert guides and experience the abundant wildlife and stunning landscapes.',
      highlights: ['Wildlife Safari', 'Scenic Views', 'Camping', 'Flora & Fauna']
    },
    {
      id: 3,
      image: require('./images.jpg'),
      name: 'Amboseli National Park',
      duration: '3 Days',
      description: 'Witness elephants with Mount Kilimanjaro as backdrop in this stunning national park.',
      highlights: ['Elephant Viewing', 'Kilimanjaro Views', 'Bird Watching', 'Sunset Safari']
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=350&fit=crop',
      name: 'Marine Coastal Tour',
      duration: '5 Days',
      description: 'Experience Kenya\'s stunning coastal destinations with pristine beaches, water sports, and rich marine life.',
      highlights: ['Diani', 'Mombasa', 'Malindi', 'Lamu', 'Watamu']
    }
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Unforgettable African Safari Experiences</h2>
          <p>Explore the majestic wildlife and breathtaking landscapes of Kenya</p>
          <a href="https://wa.me/254799708249" target="_blank" rel="noopener noreferrer" className="cta-button">Book Your Adventure Today</a>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="tours-section">
        <div className="container">
          <h2>Popular Safari Tours</h2>
          <div className="tours-grid">
            {tours.map(tour => (
              <div key={tour.id} className="tour-card">
                <img src={tour.image} alt={tour.name} className="tour-image" />
                <div className="tour-header">
                  <h3>{tour.name}</h3>
                </div>
                <p className="description">{tour.description}</p>
                <div className="highlights">
                  {tour.highlights.map((highlight, idx) => (
                    <span key={idx} className="tag">{highlight}</span>
                  ))}
                </div>
                <div className="tour-footer">
                  <button className="book-btn" onClick={() => setSelectedTour(tour)}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <div className="contact-info">
            <div>📧 Email: simbamkusafaris@gmail.com</div>
            <div>📱 Phone: +254 799708249</div>
            <div>📍 Location: Mombasa, Kenya</div>
          </div>
        </div>
      </section>

      {/* Modal for Selected Tour */}
      {selectedTour && (
        <div className="modal-overlay" onClick={() => setSelectedTour(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedTour(null)}>×</button>
            <h3>{selectedTour.name}</h3>
            <p><strong>Duration:</strong> {selectedTour.duration}</p>
            <p><strong>Price:</strong> {selectedTour.price}</p>
            <p><strong>Description:</strong> {selectedTour.description}</p>
            <a href={`https://wa.me/254799708249?text=Hi%20simba%20mku%20safari%2C%20I%27d%20like%20to%20request%20a%20quotation%20for%20a%20safari%20trip%20(${selectedTour.name})`} target="_blank" rel="noopener noreferrer" className="cta-button">Book Now</a>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
