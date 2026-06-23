import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import Safaris from "./pages/Safaris";
import "./App.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Destinations", to: "/destinations" },
  { label: "Safaris", to: "/safaris" },
  { label: "Contact Us", to: "/contact" },
];

function ShellHeader({ isMenuOpen, setIsMenuOpen }) {
  return (
    <header className="topbar">
      <div className="site-container topbar__inner">
        <Link className="topbar__brand" to="/">
          <span className="topbar__brand-title">Simba Mku Safaris</span>
        </Link>

        <button
          className="topbar__hamburger"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`topbar__nav ${isMenuOpen ? "topbar__nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          {navLinks.map((item) => (
            <Link
              className="topbar__link"
              to={item.to}
              key={item.label}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="topbar__cta"
          href="https://wa.me/254799708249"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Booking
        </a>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero hero--home">
        <video className="hero__video" autoPlay muted loop playsInline src="/videos/safari.mp4" />
        <div className="hero__overlay" />
        <div className="site-container hero__grid">
          <div className="hero__content">
            <div className="hero__brand">
              <p className="eyebrow">Welcome to</p>
              <h1>Simba Mku Safaris</h1>
            </div>
            <p className="hero__text">
              Discover the wild heart of kenya.
            </p>

            <div className="hero__actions">
              <Link className="button button--gold" to="/destinations">
                Explore destinations <ArrowRight size={18} />
              </Link>
                                  <Link className="button button--ghost" to="/safaris">
                Safari plans
              </Link>
            </div>
          </div>

         
        </div>
      </section>
    </main>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="site-shell">
      {showSplash && (
        <div className="splash-screen">
          <h1 className="splash-title">Simba Mku Safaris</h1>
        </div>
      )}
      <ShellHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/safaris" element={<Safaris />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
