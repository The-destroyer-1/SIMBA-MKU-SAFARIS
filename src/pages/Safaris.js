import React from 'react';
import masaiMaraImg from '../Masai Mara.jpg';
import amboseliImg from '../Amboseli.jpg';
import tsavoImg from '../Tsavo.jpg';
import coastSafariComboImg from '../Coast and Safari Combo.jpg';

const whatsappNumber = '254799708249';

const buildWhatsAppLink = (name) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Simba Mku Safaris, I want to book the ${name}. Please send me details.`)}`;

const safaris = [
  {
    name: 'Masai Mara Classic Safari',
    image: masaiMaraImg,
    duration: '3 to 5 days',
    description: 'A signature safari with big game drives, scenic plains, and flexible pickup options.',
  },
  {
    name: 'Amboseli Elephant Safari',
    image: amboseliImg,
    duration: '2 to 4 days',
    description: 'Iconic elephant viewing with clear mountain views and relaxed travel pacing.',
  },
  {
    name: 'Tsavo Wilderness Safari',
    image: tsavoImg,
    duration: '3 to 6 days',
    description: 'Wide open wilderness, dramatic landscapes, and true Kenya safari energy.',
  },
  {
    name: 'Coast and Safari Combo',
    image: coastSafariComboImg,
    duration: '5 to 8 days',
    description: 'A mixed itinerary that blends safari adventure with Diani or Watamu beach time.',
  },
];

const Safaris = () => {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="site-container page-hero__inner">
          <div>
            <p className="eyebrow">Safaris</p>
            <h2>Safari packages built for quick booking and clear planning.</h2>
            <p>
              Choose a safari below and message us directly on WhatsApp from the card.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--compact section--page">
        <div className="site-container safari-grid">
          {safaris.map((safari) => (
            <article className="destination-card safari-card" key={safari.name}>
              <img src={safari.image} alt={safari.name} className="destination-image" />
              <div className="destination-card__body">
                <div className="tour-header">
                  <h3>{safari.name}</h3>
                  <span>{safari.duration}</span>
                </div>
                <p className="destination-short">{safari.description}</p>
                <a className="destination-cta" href={buildWhatsAppLink(safari.name)} target="_blank" rel="noreferrer">
                  WhatsApp me about this safari
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Safaris;
