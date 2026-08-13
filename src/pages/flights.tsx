import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MOCK_FLIGHTS } from '../data/mockFlights';
import { useCurrency } from '../context/CurrencyContext';
import { useCart } from '../context/CartContext';
import { Plane, Clock, Luggage, Search, CheckCircle2, User, FileText, ArrowRight } from 'lucide-react';
import { Flight } from '../types';

export default function FlightsPage() {
  const router = useRouter();
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();

  const [fromCity, setFromCity] = useState('LOS - Lagos');
  const [toCity, setToCity] = useState('JED - Jeddah');
  const [cabin, setCabin] = useState('Economy');
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

  // Booking Form modal state
  const [passengerName, setPassengerName] = useState('');
  const [passportNum, setPassportNum] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleBookFlight = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFlight) return;

    addToCart({
      serviceType: 'flight',
      title: `${selectedFlight.airline} (${selectedFlight.flightNumber})`,
      subtitle: `${selectedFlight.origin} ➔ ${selectedFlight.destination} (${selectedFlight.cabinClass})`,
      details: {
        flightId: selectedFlight.id,
        passengerName,
        passportNum,
        email,
        phone,
        departureTime: selectedFlight.departureTime,
        duration: selectedFlight.duration
      },
      price: selectedFlight.price,
      currency: 'NGN',
      image: selectedFlight.airlineLogo
    });

    router.push('/cart');
  };

  return (
    <>
      <Head>
        <title>International Flight Booking | Travel Agent Demo</title>
      </Head>

      <div style={{ background: 'var(--navy-main)', color: '#FFF', padding: '3.5rem 0 2.5rem' }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Airlines Partner Inventory</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Compare & Book Flights Worldwide</h1>
          <p style={{ color: '#94A3B8' }}>Saudia, Emirates, Qatar Airways, Turkish Airlines & British Airways.</p>

          <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', background: '#07111E', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.3)' }}>
            <div>
              <label style={{ fontSize: '0.75rem', color: '#D4AF37', fontWeight: 600 }}>Origin</label>
              <select value={fromCity} onChange={(e) => setFromCity(e.target.value)} className="form-select" style={{ background: '#0B192C', color: '#FFF' }}>
                <option value="LOS - Lagos">Lagos (LOS)</option>
                <option value="ABV - Abuja">Abuja (ABV)</option>
                <option value="KAN - Kano">Kano (KAN)</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: '#D4AF37', fontWeight: 600 }}>Destination</label>
              <select value={toCity} onChange={(e) => setToCity(e.target.value)} className="form-select" style={{ background: '#0B192C', color: '#FFF' }}>
                <option value="JED - Jeddah">Jeddah (JED)</option>
                <option value="MED - Madinah">Madinah (MED)</option>
                <option value="DXB - Dubai">Dubai (DXB)</option>
                <option value="IST - Istanbul">Istanbul (IST)</option>
                <option value="LHR - London">London (LHR)</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: '#D4AF37', fontWeight: 600 }}>Cabin Class</label>
              <select value={cabin} onChange={(e) => setCabin(e.target.value)} className="form-select" style={{ background: '#0B192C', color: '#FFF' }}>
                <option value="Economy">Economy</option>
                <option value="Business">Business Class</option>
              </select>
            </div>
            <button className="btn btn-gold" style={{ marginTop: 'auto', height: '42px' }}>
              <Search size={16} /> Search Flights
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 1.25rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {MOCK_FLIGHTS.map((flt) => (
            <div key={flt.id} className="card" style={{ padding: '1.5rem', borderLeft: '5px solid #D4AF37' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '2rem' }}>{flt.airlineLogo}</span>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C', margin: 0 }}>{flt.airline}</h3>
                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>{flt.flightNumber} • {flt.cabinClass}</div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Total Fare per seat</span>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0B192C' }}>{formatPrice(flt.price)}</div>
                </div>
              </div>

              {/* Flight Timeline */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F8FAFC', padding: '1rem', borderRadius: '8px', margin: '0.75rem 0' }}>
                <div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C' }}>{flt.departureTime}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>{flt.originCity}</div>
                </div>

                <div style={{ flex: 1, textAlign: 'center', padding: '0 1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem' }}>
                    <Clock size={14} /> {flt.duration} ({flt.stops === 0 ? 'Non-stop' : `${flt.stops} stop`})
                  </div>
                  <div style={{ height: '2px', background: '#D4AF37', margin: '6px 0', position: 'relative' }}>
                    <Plane size={16} style={{ position: 'absolute', top: '-7px', left: '50%', transform: 'translateX(-50%)', color: '#0B192C' }} />
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C' }}>{flt.arrivalTime}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>{flt.destinationCity}</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: '#475569' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Luggage size={14} /> {flt.baggageAllowance}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#059669' }}><CheckCircle2 size={14} /> {flt.refundable ? 'Refundable Fare' : 'Non-refundable'}</span>
                </div>

                <button onClick={() => setSelectedFlight(flt)} className="btn btn-gold btn-sm">
                  Select Flight & Enter Passenger Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Passenger Information Modal */}
      {selectedFlight && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div className="card" style={{ maxWidth: '540px', width: '100%', padding: '2rem', maxHeight: '90vh', overflowY: 'auto' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0B192C', marginBottom: '0.5rem' }}>
              Passenger Details: {selectedFlight.airline}
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1.25rem' }}>
              {selectedFlight.origin} ➔ {selectedFlight.destination} | {formatPrice(selectedFlight.price)}
            </p>

            <form onSubmit={handleBookFlight}>
              <div className="form-group">
                <label className="form-label">Full Name (As on Passport)</label>
                <input type="text" required placeholder="e.g. Alhaji Ibrahim Bello" value={passengerName} onChange={(e) => setPassengerName(e.target.value)} className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label">International Passport Number</label>
                <input type="text" required placeholder="e.g. A08945123" value={passportNum} onChange={(e) => setPassportNum(e.target.value)} className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address for Ticket E-Voucher</label>
                <input type="email" required placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label">Phone / WhatsApp Number</label>
                <input type="tel" required placeholder="0903 367 5852" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-input" />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button type="button" onClick={() => setSelectedFlight(null)} className="btn btn-outline-navy" style={{ flex: 1 }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-gold" style={{ flex: 1 }}>
                  Proceed to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
