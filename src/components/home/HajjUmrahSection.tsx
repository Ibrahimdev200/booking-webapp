import React from 'react';
import Link from 'next/link';
import { MOCK_HAJJ_PACKAGES } from '../../data/mockHajjPackages';
import { MOCK_UMRAH_PACKAGES } from '../../data/mockUmrahPackages';
import { useCurrency } from '../../context/CurrencyContext';
import { Shield, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const HajjUmrahSection: React.FC = () => {
  const { formatPrice } = useCurrency();

  return (
    <section style={{ padding: '4.5rem 0', background: 'linear-gradient(180deg, #07111E 0%, #0B192C 100%)', color: '#FFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Sacred Pilgrimages</span>
          <h2 style={{ fontSize: '2.5rem', color: '#FFF', fontWeight: 800 }}>
            Hajj & Umrah 1447 / 2026 Packages
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '650px', margin: '0.5rem auto 0', fontSize: '1rem' }}>
            Empowering your spiritual devotion with trusted 5-star accommodations, direct flights, expert Islamic scholars, and end-to-end agency support.
          </p>
        </div>

        {/* Hajj Featured Card */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#D4AF37', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Shield size={20} /> Featured Hajj Packages
          </div>

          <div className="grid-3">
            {MOCK_HAJJ_PACKAGES.map((hajj) => (
              <div key={hajj.id} className="glass-card-dark" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span className="badge badge-gold">{hajj.durationDays} Days</span>
                    <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700 }}>
                      🔥 {hajj.spacesRemaining} Spaces Left
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFF', marginBottom: '0.5rem' }}>
                    {hajj.name}
                  </h3>

                  <div style={{ fontSize: '0.85rem', color: '#CBD5E1', margin: '0.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <div><strong>Makkah:</strong> {hajj.makkahHotel} ({'★'.repeat(hajj.makkahStarRating)})</div>
                    <div><strong>Madinah:</strong> {hajj.madinahHotel} ({'★'.repeat(hajj.madinahStarRating)})</div>
                    <div><strong>Dates:</strong> {hajj.departureDate} to {hajj.returnDate}</div>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: '#94A3B8' }}>
                    {hajj.includedServices.slice(0, 4).map((inc, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <CheckCircle2 size={14} style={{ color: '#D4AF37', flexShrink: 0 }} /> {inc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Package Price</span>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#D4AF37' }}>
                      {formatPrice(hajj.price)}
                    </div>
                  </div>
                  <Link href={`/hajj?pkg=${encodeURIComponent(hajj.name)}`} className="btn btn-gold btn-sm">
                    Book Hajj
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Umrah Quick Grid */}
        <div>
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#D4AF37', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={20} /> Popular Umrah Packages
          </div>

          <div className="grid-2">
            {MOCK_UMRAH_PACKAGES.slice(0, 2).map((umr) => (
              <div key={umr.id} className="glass-card-dark" style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div>
                  <span className="badge badge-gold" style={{ fontSize: '0.7rem', marginBottom: '0.4rem' }}>{umr.category}</span>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFF' }}>{umr.name}</h4>
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E1', marginTop: '0.3rem' }}>
                    {umr.durationDays} Days • {umr.makkahHotel} ({umr.makkahDistanceHaram})
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#D4AF37' }}>{formatPrice(umr.price)}</div>
                  <Link href={`/umrah?pkg=${encodeURIComponent(umr.name)}`} className="btn btn-outline-gold btn-sm" style={{ marginTop: '0.4rem' }}>
                    Book Umrah <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
