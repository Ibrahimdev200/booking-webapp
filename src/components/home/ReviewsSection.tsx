import React from 'react';
import { Star, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Alhaji Rasheed Adebayo',
      service: 'VIP Hajj Package 2025',
      rating: 5,
      date: 'June 2025',
      text: 'Manaar Travels made our Hajj journey completely stress-free. The hotel in Makkah was right in front of the Haram, and the Islamic scholar assigned to us answered all our spiritual questions. May Allah bless the team!'
    },
    {
      name: 'Hajiya Amina Abubakar',
      service: 'Ramadan Umrah & UAE Visa',
      rating: 5,
      date: 'April 2025',
      text: 'Extremely professional visa service! My Dubai e-visa came out in less than 48 hours, and the Umrah accommodations in Madinah were top notch. I will recommend Manaar Travels to all my relatives.'
    },
    {
      name: 'Dr. Chinedu & Family',
      service: 'Dubai Vacation & Flight Tickets',
      rating: 5,
      date: 'December 2025',
      text: 'Booked our family flight tickets and 5-star hotel in Dubai through Manaar. The price was better than online booking sites, and their WhatsApp support answered our questions immediately.'
    }
  ];

  return (
    <section style={{ padding: '4.5rem 0', background: 'var(--cream-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Pilgrim & Traveller Testimonials</span>
          <h2 style={{ fontSize: '2.5rem', color: '#0B192C', fontWeight: 800 }}>
            What Our Customers Say
          </h2>
          <p style={{ color: '#64748B', maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '1rem' }}>
            Trusted by thousands of Nigerian pilgrims and international travellers.
          </p>
        </div>

        <div className="grid-3">
          {reviews.map((rev, idx) => (
            <div key={idx} className="card" style={{ padding: '1.75rem', background: '#FFF', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.2rem', color: '#D4AF37' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#D4AF37" />
                    ))}
                  </div>
                  <Quote size={24} style={{ color: 'rgba(212, 175, 55, 0.3)' }} />
                </div>
                <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{rev.text}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1rem' }}>
                <div style={{ fontWeight: 800, color: '#0B192C', fontSize: '1rem' }}>{rev.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#B8860B', fontWeight: 600 }}>{rev.service} • {rev.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
