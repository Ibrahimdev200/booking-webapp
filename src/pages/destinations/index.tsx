import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MOCK_DESTINATIONS } from '../../data/mockDestinations';
import { MapPin, ArrowRight } from 'lucide-react';

export default function DestinationsPage() {
  return (
    <>
      <Head>
        <title>Destination Explorer | Travel Agent Demo</title>
      </Head>

      <div style={{ background: 'var(--navy-main)', color: '#FFF', padding: '3.5rem 0 2.5rem' }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Global Travel Guides</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Explore Premier Destinations</h1>
          <p style={{ color: '#94A3B8' }}>Discover hotels, flights, tours and visa details for Dubai, Saudi Arabia, Turkey & UK.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '3.5rem 1.25rem' }}>
        <div className="grid-2">
          {MOCK_DESTINATIONS.map(d => (
            <div key={d.slug} className="card" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '1rem' }}>
              <div style={{ height: '100%', position: 'relative' }}>
                <img src={d.heroImage} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#D4AF37', fontWeight: 700, textTransform: 'uppercase' }}>{d.country}</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0B192C', margin: '2px 0 6px' }}>{d.name}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.5' }}>{d.tagline}</p>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <Link href={`/destinations/${d.slug}`} className="btn btn-navy btn-sm">
                    Explore {d.name} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
