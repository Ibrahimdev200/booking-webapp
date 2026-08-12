import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose your service',
      desc: 'Select from Flights, Hotels, Hajj, Umrah, Visas, or Guided Tour Packages.'
    },
    {
      num: '02',
      title: 'Search or select package',
      desc: 'Customize dates, guest count, cabin class, or pilgrimage hotel preferences.'
    },
    {
      num: '03',
      title: 'Complete your booking',
      desc: 'Pay securely online via Paystack, Flutterwave, Korapay or Bank Transfer.'
    },
    {
      num: '04',
      title: 'Travel with confidence',
      desc: 'Receive instant digital vouchers, flight tickets, and 24/7 Manaar support.'
    }
  ];

  return (
    <section style={{ padding: '4rem 0', background: '#FFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Simple Step-by-Step</span>
          <h2 style={{ fontSize: '2.5rem', color: '#0B192C', fontWeight: 800 }}>
            How It Works
          </h2>
          <p style={{ color: '#64748B', maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '1rem' }}>
            From initial search to boarding your flight, experience seamless travel booking.
          </p>
        </div>

        <div className="grid-4">
          {steps.map((s, idx) => (
            <div key={idx} style={{
              background: '#F8FAFC',
              padding: '1.75rem',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              position: 'relative'
            }}>
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#D4AF37',
                lineHeight: 1,
                marginBottom: '1rem'
              }}>
                {s.num}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0B192C', marginBottom: '0.5rem' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.5' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
