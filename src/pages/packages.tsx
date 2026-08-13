import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MOCK_HAJJ_PACKAGES } from '../data/mockHajjPackages';
import { MOCK_UMRAH_PACKAGES } from '../data/mockUmrahPackages';
import { MOCK_TOURS } from '../data/mockTours';
import { useCurrency } from '../context/CurrencyContext';
import { Shield, Sparkles, Compass } from 'lucide-react';

export default function PackagesPage() {
  const { formatPrice } = useCurrency();

  return (
    <>
      <Head>
        <title>Travel & Pilgrimage Packages | Travel Agent Demo</title>
      </Head>

      <div style={{ background: 'var(--navy-main)', color: '#FFF', padding: '3.5rem 0 2.5rem', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>All-Inclusive Bundles</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Explore Travel & Pilgrimage Packages</h1>
          <p style={{ color: '#94A3B8' }}>Hajj 2026, Umrah 1447, Dubai Vacations & Guided Tours.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '3.5rem 1.25rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0B192C', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Shield size={24} style={{ color: '#D4AF37' }} /> Hajj Packages 2026
        </h2>
        <div className="grid-3" style={{ marginBottom: '3.5rem' }}>
          {MOCK_HAJJ_PACKAGES.map(h => (
            <div key={h.id} className="card" style={{ padding: '1.25rem', borderLeft: '4px solid #D4AF37' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C' }}>{h.name}</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748B', margin: '4px 0 1rem' }}>{h.durationDays} Days • {h.makkahHotel}</p>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C' }}>{formatPrice(h.price)}</div>
              <Link href={`/hajj?pkg=${encodeURIComponent(h.name)}`} className="btn btn-gold btn-sm" style={{ marginTop: '0.75rem', width: '100%' }}>
                View Package Details
              </Link>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0B192C', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={24} style={{ color: '#D4AF37' }} /> Umrah Packages
        </h2>
        <div className="grid-3">
          {MOCK_UMRAH_PACKAGES.map(u => (
            <div key={u.id} className="card" style={{ padding: '1.25rem', borderLeft: '4px solid #0B192C' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C' }}>{u.name}</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748B', margin: '4px 0 1rem' }}>{u.durationDays} Days • {u.makkahHotel}</p>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C' }}>{formatPrice(u.price)}</div>
              <Link href={`/umrah?pkg=${encodeURIComponent(u.name)}`} className="btn btn-navy btn-sm" style={{ marginTop: '0.75rem', width: '100%' }}>
                View Package Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
