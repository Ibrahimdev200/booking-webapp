import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MOCK_DESTINATIONS } from '../../data/mockDestinations';
import { MapPin, Calendar, DollarSign, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DestinationDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const dest = MOCK_DESTINATIONS.find(d => d.slug === slug) || MOCK_DESTINATIONS[0];

  return (
    <>
      <Head>
        <title>{dest.name} Travel Guide | Manaar Travels & Tours</title>
      </Head>

      <div style={{
        position: 'relative',
        height: '400px',
        backgroundImage: `linear-gradient(180deg, rgba(7, 17, 30, 0.6) 0%, rgba(11, 25, 44, 0.95) 100%), url(${dest.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#FFF',
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '3rem'
      }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Destination Guide</span>
          <h1 style={{ fontSize: '3rem', fontWeight: 800 }}>{dest.name}</h1>
          <p style={{ color: '#E2E8F0', fontSize: '1.15rem' }}>{dest.tagline}</p>
        </div>
      </div>

      <div className="container" style={{ padding: '3.5rem 1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '2.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0B192C', marginBottom: '0.75rem' }}>About {dest.name}</h2>
            <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '1rem', marginBottom: '2rem' }}>{dest.description}</p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C', marginBottom: '1rem' }}>Top Attractions & Highlights</h3>
            <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
              {dest.highlights.map((h, i) => (
                <div key={i} style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: '#0B192C' }}>
                  <CheckCircle2 size={18} style={{ color: '#D4AF37' }} /> {h}
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--navy-main)', color: '#FFF', padding: '2rem', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFF' }}>Ready to visit {dest.name}?</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginTop: '4px' }}>Book hotels, flights, tours and visa processing with Manaar Travels.</p>
              </div>
              <Link href={`/hotels?city=${dest.name}`} className="btn btn-gold">
                Search Hotels in {dest.name} <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="card" style={{ padding: '1.5rem', height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C', marginBottom: '1rem' }}>Travel Facts</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#475569' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={18} style={{ color: '#D4AF37' }} />
                <div><strong>Best Time:</strong> {dest.bestTimeToVisit}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <DollarSign size={18} style={{ color: '#D4AF37' }} />
                <div><strong>Currency:</strong> {dest.currency}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={18} style={{ color: '#D4AF37' }} />
                <div><strong>Language:</strong> {dest.language}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
