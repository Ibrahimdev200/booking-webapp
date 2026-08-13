import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MOCK_TOURS } from '../../data/mockTours';
import { useCurrency } from '../../context/CurrencyContext';
import { Compass, Clock, Star, MapPin } from 'lucide-react';

export default function ToursPage() {
  const { formatPrice } = useCurrency();

  return (
    <>
      <Head>
        <title>Tours & Travel Packages | Travel Agent Demo</title>
      </Head>

      <div style={{ background: 'var(--navy-main)', color: '#FFF', padding: '3.5rem 0 2.5rem' }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Guided Travel Marketplace</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Explore Unforgettable Destinations</h1>
          <p style={{ color: '#94A3B8' }}>Dubai City Experience, Ottoman Heritage Istanbul & Sacred Ziyarat Tours.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '3.5rem 1.25rem' }}>
        <div className="grid-3">
          {MOCK_TOURS.map(tour => (
            <div key={tour.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ position: 'relative', height: '200px' }}>
                  <img src={tour.images[0]} alt={tour.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span className="badge badge-gold" style={{ position: 'absolute', top: '10px', left: '10px' }}>{tour.type} Tour</span>
                </div>

                <div style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', color: '#D4AF37', fontWeight: 700 }}>
                    ★ {tour.rating} ({tour.reviewCount} reviews)
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0B192C', margin: '0.3rem 0 0.5rem' }}>{tour.title}</h3>
                  
                  <div style={{ fontSize: '0.85rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.5rem' }}>
                    <MapPin size={14} /> {tour.destination}, {tour.country}
                  </div>

                  <div style={{ fontSize: '0.85rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={14} /> Duration: {tour.duration}
                  </div>
                </div>
              </div>

              <div style={{ padding: '1rem 1.25rem', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Starting from</span>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C' }}>{formatPrice(tour.price)}</div>
                </div>

                <Link href={`/tours/${tour.id}`} className="btn btn-navy btn-sm">
                  View Tour
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
