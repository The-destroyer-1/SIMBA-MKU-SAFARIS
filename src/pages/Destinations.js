import React from 'react';

const Destinations = () => {
  const destinations = [
    { 
      id: 1,
      name: 'Masai Mara', 
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=350&fit=crop',
      description: 'Largest game reserve',
      history: 'Kenya\'s most famous national reserve, home to the Great Migration with over 2 million wildebeest. Named after the Maasai people, it spans 1,500 sq km of pristine savanna.'
    },
    { 
      id: 2,
      name: 'Tsavo', 
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=500&h=350&fit=crop',
      description: 'Vast wildlife sanctuary',
      history: 'Kenya\'s largest national park covering 22,000 sq km. Known for its red volcanic soil and diverse wildlife including the legendary "Big Five". A vast wilderness of baobab trees and dramatic landscapes.'
    },
    { 
      id: 3,
      name: 'Amboseli', 
      image: require('../images.jpg'),
      description: 'Elephant paradise',
      history: 'Famous for its large elephant herds with Mount Kilimanjaro as backdrop. This 392 sq km park offers stunning views and is a sanctuary for African elephants and diverse bird species.'
    },
    { 
      id: 4,
      name: 'Diani', 
      image: require('../maxresdefault-25.jpg'),
      description: 'Pristine beaches',
      history: 'One of Kenya\'s most beautiful coastal destinations with 25km of white sandy beaches. Known for water sports, coral reefs, and luxurious beach resorts. A tropical paradise along the Indian Ocean.'
    },
    { 
      id: 5,
      name: 'Mombasa', 
      image: require('../Mombasa-Kenya.jpg'),
      description: 'Coastal charm',
      history: 'Kenya\'s second-largest city and main port, with over 500 years of history. A blend of Arab, African, and Asian cultures evident in its architecture, cuisine, and vibrant markets. Home to historic Fort Jesus.'
    },
    { 
      id: 6,
      name: 'Malindi', 
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=350&fit=crop',
      description: 'Marine paradise',
      history: 'Ancient coastal town with rich Swahili heritage dating back to the 15th century. Famous for pristine coral reefs, marine parks, and the stunning Malindi Marine Park teeming with colorful fish and sea life.'
    },
    { 
      id: 7,
      name: 'Lamu', 
      image: require("../Stepping-back-in-time-on-Kenya's-Lamu-Island.webp"),
      description: 'Historic island',
      history: 'UNESCO World Heritage Site preserving centuries-old Swahili architecture and culture. Founded in the 14th century as a major trading port. Features narrow stone streets, traditional dhow sailing boats, and pristine beaches.'
    },
    { 
      id: 8,
      name: 'Watamu', 
      image: require('../sddefault.jpg'),
      description: 'Tropical beauty',
      history: 'A hidden gem coastal village known for its three bays with turquoise waters and white sand beaches. Part of the Watamu Marine National Park, rich in coral reefs and marine biodiversity with excellent diving opportunities.'
    }
  ];

  return (
    <div className="page-content">
      <section className="destinations-section full-page">
        <div className="container">
          <h2>Featured Destinations</h2>
          <div className="destinations-grid">
            {destinations.map((dest, idx) => (
              <div key={idx} className="destination-card">
                <img src={dest.image} alt={dest.name} className="destination-image" />
                <h3>{dest.name}</h3>
                <p className="destination-short">{dest.description}</p>
                <p className="destination-history">{dest.history}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
