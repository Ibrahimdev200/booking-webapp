import React from 'react';
import Link from 'next/link';
import { MOCK_FLIGHTS } from '../../data/mockFlights';
import { useCurrency } from '../../context/CurrencyContext';
import { Plane, Clock, Luggage, ArrowRight } from 'lucide-react';

export const FeaturedFlights: React.FC = () => {
  const { formatPrice } = useCurrency();

  return (
    <section style={{ padding: '4rem 0', background: '#FFF' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Popular Flight Routes</span>
            <h2 style={{ fontSize: '2.2rem', color: '#0B192C', fontWeight: 800 }}>
              Direct & Discount Flights from Lagos
            </h2>
          </div>
          <Link href="/flights" className="btn btn-outline-navy btn-sm">
            Search All Flights <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid-2">
          {MOCK_FLIGHTS.slice(0, 4).map((flt) => (
            <div key={flt.id} className="card" style={{ padding: '1.25rem', borderLeft: '4px solid #D4AF37' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{flt.airlineLogo}</span>
                  <div>
                    <div style={{ fontWeight: 800, color: '#0B192C', fontSize: '0.95rem' }}>{flt.airline}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{flt.flightNumber} • {flt.cabinClass}</div>
                  </div>
                </div>
                <span className="badge badge-gold">{flt.stops === 0 ? 'Direct Flight' : `${flt.stops} Stop`}</span>
              </div>

              {/* Route Timeline */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '1rem 0', padding: '0.75rem', background: '#F8FAFC', borderRadius: '8px' }}>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C' }}>{flt.departureTime}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B' }}>{flt.origin}</div>
                </div>

                <div style={{ textAlign: 'center', flex: 1, padding: '0 1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem' }}>
                    <Clock size={12} /> {flt.duration}
                  </div>
                  <div style={{ height: '2px', background: '#D4AF37', margin: '4px 0', position: 'relative' }}>
                    <Plane size={14} style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', color: '#0B192C' }} />
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C' }}>{flt.arrivalTime}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B' }}>{flt.destination}</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#64748B' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Luggage size={14} /> {flt.baggageAllowance}
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem' }}>Total Fare:</span>
                  <strong style={{ fontSize: '1.1rem', color: '#0B192C', marginLeft: '6px' }}>{formatPrice(flt.price)}</strong>
                </div>
              </div>

              <div style={{ marginTop: '1rem', textAlign: 'right' }}>
                <Link href={`/flights?select=${flt.id}`} className="btn btn-gold btn-sm">
                  Select Flight
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
