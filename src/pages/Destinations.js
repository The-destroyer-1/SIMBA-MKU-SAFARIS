import React from 'react';
import amboseliImg from '../Amboseli.jpg';
import dianiImg from '../Diani.jpg';
import masaiMaraImg from '../Masai Mara.jpg';
import tsavoImg from '../Tsavo.jpg';
import watamuImg from '../Watamu.jpg';
import moreKenyaImg from '../More Kenya.jpg';

const whatsappNumber = '254799708249';

const buildWhatsAppLink = (destinationName) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Simba Mku Safaris, I want to book ${destinationName}. Please send me details.`)}`;

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Masai Mara',
      image: masaiMaraImg,
      description: 'Largest game reserve',
      history: 'Kenya\'s most famous national reserve, home to the Great Migration with over 2 million wildebeest.',
    },
    {
      id: 2,
      name: 'Tsavo',
      image: tsavoImg,
      description: 'Vast wildlife sanctuary',
      history: 'Kenya\'s largest national park with red volcanic soil, the legendary Big Five, and dramatic landscapes.',
    },
    {
      id: 3,
      name: 'Amboseli',
      image: amboseliImg,
      description: 'Elephant paradise',
      history: 'Famous for large elephant herds with Mount Kilimanjaro as a backdrop and stunning views.',
    },
    {
      id: 4,
      name: 'Diani',
      image: dianiImg,
      description: 'Pristine beaches',
      history: 'One of Kenya\'s most beautiful coastal destinations with soft white sand and clear water.',
    },
    {
      id: 5,
      name: 'Watamu',
      image: watamuImg,
      description: 'Tropical beauty',
      history: 'A coastal gem with turquoise waters, marine parks, and excellent snorkeling and relaxation.',
    },
    {
      id: 6,
      name: 'More Kenya',
      image: moreKenyaImg,
      description: 'More Kenya',
      history: 'Nairobi, Naivasha, Mombasa, Samburu, and custom routes built around your perfect trip.',
    },
  ];

  return (
    <div className="page-content">
      <section className="destinations-section section--page">
        <div className="site-container page-hero__inner">
          <div>
            <p className="eyebrow">Destinations</p>
            <h2>Browse top Kenya destinations with direct WhatsApp contact on every card.</h2>
            <p>Choose Diani, Tsavo, Amboseli, Watamu, Masai Mara, or more and message us instantly.</p>
          </div>
        </div>

        <div className="site-container destinations-grid">
          {destinations.map((dest) => (
            <article className="destination-card" key={dest.id}>
              <img src={dest.image} alt={dest.name} className="destination-image" />
              <div className="destination-card__body">
                <h3>{dest.name}</h3>
                <p className="destination-short">{dest.description}</p>
                <p className="destination-history">{dest.history}</p>
                <a className="destination-cta" href={buildWhatsAppLink(dest.name)} target="_blank" rel="noreferrer">
                 BOOK NOW 
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Destinations;
