import React from 'react';
import { ShieldCheck, DollarSign, Headphones, Smartphone, HeartHandshake, Award } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      title: 'Trusted Travel Assistance',
      desc: 'Officially licensed agency with deep international travel logistics experience.',
      icon: ShieldCheck
    },
    {
      title: 'Transparent Pricing',
      desc: 'Zero hidden charges. Complete breakdown of fares, taxes, and service fees.',
      icon: DollarSign
    },
    {
      title: 'Dedicated Customer Support',
      desc: '24/7 assistance via WhatsApp, phone, and email before, during, and after your trip.',
      icon: Headphones
    },
    {
      title: 'Convenient Online Booking',
      desc: 'Search, reserve, pay, and track visas instantly from desktop or mobile device.',
      icon: Smartphone
    },
    {
      title: 'Hajj & Umrah Expertise',
      desc: 'Specialized pilgrimage team providing spiritual guidance and Haram proximity hotels.',
      icon: HeartHandshake
    },
    {
      title: 'End-to-End Travel Support',
      desc: 'From visa processing & flight ticketing to airport transfers & hotel check-ins.',
      icon: Award
    }
  ];

  return (
    <section style={{ padding: '4.5rem 0', background: 'var(--cream-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>The Manaar Advantage</span>
          <h2 style={{ fontSize: '2.5rem', color: '#0B192C', fontWeight: 800 }}>
            Why Travel With Manaar?
          </h2>
          <p style={{ color: '#64748B', maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '1rem' }}>
            Your journey starts with confidence when backed by our commitment to excellence, integrity, and peace of mind.
          </p>
        </div>

        <div className="grid-3">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="card" style={{ padding: '1.75rem', background: '#FFF' }}>
                <div style={{
                  background: 'rgba(212, 175, 55, 0.12)',
                  color: '#B8860B',
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.2rem',
                  border: '1px solid rgba(212, 175, 55, 0.3)'
                }}>
                  <Icon size={26} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0B192C', marginBottom: '0.5rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: '1.6' }}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
