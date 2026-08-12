import React from 'react';
import Link from 'next/link';
import { MOCK_HOTELS } from '../../data/mockHotels';
import { useCurrency } from '../../context/CurrencyContext';
import { Star, MapPin, Check, ArrowRight } from 'lucide-react';

export const FeaturedHotels: React.FC = () => {
  const { formatPrice } = useCurrency();

  return (
    <section style={{ padding: '4rem 0', background: 'var(--cream-bg)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Luxury Stays</span>
            <h2 style={{ fontSize: '2.2rem', color: '#0B192C', fontWeight: 800 }}>
              Featured Hotel & Resort Deals
            </h2>
          </div>
          <Link href="/hotels" className="btn btn-outline-navy btn-sm">
            Explore All Hotels <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid-3">
          {MOCK_HOTELS.slice(0, 3).map((hotel) => (
            <div key={hotel.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ position: 'relative', height: '200px' }}>
                  <img src={hotel.images[0]} alt={hotel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {hotel.isDemo && (
                    <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(11,25,44,0.85)', color: '#D4AF37', fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid #D4AF37' }}>
                      Partner Inventory
                    </span>
                  )}
                  <span style={{ position: 'absolute', top: '10px', right: '10px', background: '#10B981', color: '#FFF', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '20px' }}>
                    ★ {hotel.guestRating} Exceptional
                  </span>
                </div>

                <div style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#D4AF37', marginBottom: '0.3rem' }}>
                    {[...Array(hotel.starRating)].map((_, i) => (
                      <Star key={i} size={14} fill="#D4AF37" />
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C', margin: '0.2rem 0' }}>
                    {hotel.name}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', color: '#64748B', marginBottom: '0.75rem' }}>
                    <MapPin size={14} /> {hotel.city}, {hotel.country}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.8rem', color: '#059669', fontWeight: 600, margin: '0.5rem 0' }}>
                    {hotel.breakfastIncluded && <div><Check size={12} style={{ display: 'inline', marginRight: '4px' }} /> Breakfast Included</div>}
                    {hotel.freeCancellation && <div><Check size={12} style={{ display: 'inline', marginRight: '4px' }} /> Free Cancellation</div>}
                  </div>
                </div>
              </div>

              <div style={{ padding: '1rem 1.25rem', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>From / night</span>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C' }}>
                    {formatPrice(hotel.pricePerNight)}
                  </div>
                </div>
                <Link href={`/hotels/${hotel.id}`} className="btn btn-navy btn-sm">
                  View Rooms
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
