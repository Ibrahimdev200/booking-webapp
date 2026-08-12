import React from 'react';
import Link from 'next/link';
import { MOCK_DESTINATIONS } from '../../data/mockDestinations';
import { MapPin, ArrowRight } from 'lucide-react';

export const DestinationsSection: React.FC = () => {
  return (
    <section style={{ padding: '4rem 0', background: '#FFF' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Global Experiences</span>
            <h2 style={{ fontSize: '2.2rem', color: '#0B192C', fontWeight: 800 }}>
              Top Travel Destinations
            </h2>
          </div>
          <Link href="/destinations" className="btn btn-outline-navy btn-sm">
            View All Destinations <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid-4">
          {MOCK_DESTINATIONS.map((dest) => (
            <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="card" style={{ textDecoration: 'none' }}>
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(11,25,44,0.85) 100%)'
                }} />
                <div style={{ position: 'absolute', bottom: '12px', left: '15px', right: '15px', color: '#FFF' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#D4AF37', fontWeight: 700 }}>
                    <MapPin size={12} /> {dest.country}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0' }}>{dest.name}</h3>
                </div>
              </div>
              <div style={{ padding: '1rem', background: '#FFF' }}>
                <p style={{ fontSize: '0.85rem', color: '#64748B', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '2.5em' }}>
                  {dest.tagline}
                </p>
                <div style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: '#0B192C', fontWeight: 700 }}>
                  Best Time: {dest.bestTimeToVisit}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
