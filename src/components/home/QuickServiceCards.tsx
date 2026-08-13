import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Sparkles, FileText, Plane, Building2, Compass } from 'lucide-react';

export const QuickServiceCards: React.FC = () => {
  const services = [
    {
      title: 'HAJJ',
      desc: 'Begin your sacred journey with confidence.',
      icon: Shield,
      href: '/hajj',
      badge: 'Official 2026',
      bgImage: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'UMRAH',
      desc: 'Complete your Umrah journey with trusted travel support.',
      icon: Sparkles,
      href: '/umrah',
      badge: 'Year-Round',
      bgImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'VISA PROCESSING',
      desc: 'Professional visa assistance for your international journey.',
      icon: FileText,
      href: '/visa',
      badge: 'Fast Processing',
      bgImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'FLIGHT BOOKING',
      desc: 'Find convenient flights at competitive prices.',
      icon: Plane,
      href: '/flights',
      badge: 'Top Airlines',
      bgImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'HOTEL BOOKING',
      desc: 'Discover and reserve hotels around the world.',
      icon: Building2,
      href: '/hotels',
      badge: 'Best Rates',
      bgImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'TOURS & PACKAGES',
      desc: 'Explore unforgettable destinations and experiences.',
      icon: Compass,
      href: '/tours',
      badge: 'Guided Tours',
      bgImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section style={{ padding: '4rem 0', background: 'var(--cream-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Our Core Offerings</span>
          <h2 style={{ fontSize: '2.5rem', color: '#0B192C', fontWeight: 800 }}>
            Comprehensive Travel & Pilgrimage Services
          </h2>
          <p style={{ color: '#64748B', maxWidth: '650px', margin: '0.5rem auto 0', fontSize: '1rem' }}>
            Manaar Travels & Tours provides complete end-to-end support for sacred pilgrimages, business trips, and international vacations.
          </p>
        </div>

        <div className="grid-3">
          {services.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <Link key={idx} href={item.href} className="card" style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '260px',
                padding: '2rem',
                backgroundImage: `linear-gradient(180deg, rgba(7, 19, 36, 0.78) 0%, rgba(15, 44, 89, 0.96) 100%), url(${item.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#FFF',
                border: '1px solid rgba(255, 107, 0, 0.35)'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{
                      background: 'rgba(255, 107, 0, 0.2)',
                      border: '1px solid #FF6B00',
                      color: '#FF6B00',
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComp size={24} />
                    </div>
                    <span className="badge badge-orange" style={{ fontSize: '0.7rem' }}>{item.badge}</span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '0.5px', marginBottom: '0.5rem', color: '#FFF' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#E2E8F0', lineHeight: '1.5' }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#FF6B00',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  marginTop: '1.5rem'
                }}>
                  <span>Explore Service</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
