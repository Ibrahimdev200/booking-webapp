import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MOCK_UMRAH_PACKAGES } from '../data/mockUmrahPackages';
import { useCurrency } from '../context/CurrencyContext';
import { useCart } from '../context/CartContext';
import { Sparkles, CheckCircle2, Sliders, Calendar, Users, Building, ArrowRight } from 'lucide-react';
import { UmrahPackage } from '../types';

export default function UmrahPage() {
  const router = useRouter();
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();

  const [activeTab, setActiveTab] = useState<'packages' | 'custom'>('packages');

  // Custom Package state
  const [customDates, setCustomDates] = useState('2026-10-15');
  const [customPilgrims, setCustomPilgrims] = useState('2 Pilgrims');
  const [customBudget, setCustomBudget] = useState('₦2,000,000');
  const [customHaramDist, setCustomHaramDist] = useState('Under 100 meters');
  const [customSubmitted, setCustomSubmitted] = useState(false);

  const handleBookUmrah = (pkg: UmrahPackage) => {
    addToCart({
      serviceType: 'umrah',
      title: pkg.name,
      subtitle: `${pkg.durationDays} Days Umrah (${pkg.category})`,
      details: {
        packageId: pkg.id,
        makkahHotel: pkg.makkahHotel,
        madinahHotel: pkg.madinahHotel,
        makkahDistance: pkg.makkahDistanceHaram
      },
      price: pkg.price,
      currency: 'NGN',
      image: pkg.image
    });

    router.push('/cart');
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Umrah Packages & Custom Pilgrimage | Travel Agent Demo</title>
      </Head>

      <section style={{
        background: `linear-gradient(180deg, rgba(7, 17, 30, 0.8) 0%, rgba(11, 25, 44, 0.95) 100%), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#FFF',
        padding: '4.5rem 0 3.5rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="badge badge-gold" style={{ padding: '0.4rem 1rem', marginBottom: '0.75rem' }}>
            ✨ Year-Round Umrah Marketplace
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800 }}>
            Complete Your Umrah Journey With Trusted Travel Support
          </h1>
          <p style={{ color: '#E2E8F0', maxWidth: '680px', margin: '0.5rem auto 0', fontSize: '1.05rem' }}>
            Book pre-configured 5-star packages or design your custom Umrah itinerary with hotel proximity to Haram.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            <button
              onClick={() => setActiveTab('packages')}
              className={`btn ${activeTab === 'packages' ? 'btn-gold' : 'btn-outline-gold'}`}
            >
              Browse Packages
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`btn ${activeTab === 'custom' ? 'btn-gold' : 'btn-outline-gold'}`}
            >
              <Sliders size={16} /> Request Custom Umrah
            </button>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '3.5rem 1.25rem' }}>
        {activeTab === 'packages' ? (
          <div className="grid-2">
            {MOCK_UMRAH_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="card" style={{ padding: '1.5rem', borderLeft: '4px solid #D4AF37' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div>
                    <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>{pkg.category} Tier</span>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C', marginTop: '4px' }}>{pkg.name}</h3>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#059669', background: '#E6F4EA', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                    {pkg.durationDays} Days
                  </span>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: '1.5', marginBottom: '1rem' }}>{pkg.description}</p>

                <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.85rem', color: '#334155' }}>
                  <div><strong>Makkah Hotel:</strong> {pkg.makkahHotel} ({pkg.makkahDistanceHaram})</div>
                  <div style={{ marginTop: '4px' }}><strong>Madinah Hotel:</strong> {pkg.madinahHotel} ({pkg.madinahDistanceHaram})</div>
                  <div style={{ marginTop: '4px' }}><strong>Included:</strong> Flights, Umrah Visa, Ziyarat Tours, Transfers</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E2E8F0', paddingTop: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Package Price</span>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C' }}>{formatPrice(pkg.price)}</div>
                  </div>

                  <button onClick={() => handleBookUmrah(pkg)} className="btn btn-gold btn-sm">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Custom Umrah Package Builder */
          <div className="card" style={{ maxWidth: '680px', margin: '0 auto', padding: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0B192C', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sliders size={20} style={{ color: '#D4AF37' }} /> Request Custom Umrah Package
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '1.5rem' }}>
              Specify your travel preferences and Manaar travel specialists will tailor an itinerary for you.
            </p>

            {customSubmitted ? (
              <div style={{ background: '#E6F4EA', border: '1px solid #10B981', color: '#137333', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <CheckCircle2 size={40} style={{ margin: '0 auto 10px', color: '#10B981' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Custom Inquiry Received!</h3>
                <p style={{ fontSize: '0.9rem', marginTop: '6px' }}>
                  Our Umrah travel team will prepare a custom proposal and contact you via WhatsApp (0903 367 5852) shortly.
                </p>
                <button onClick={() => setCustomSubmitted(false)} className="btn btn-navy btn-sm" style={{ marginTop: '1rem' }}>
                  Submit Another Custom Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleCustomSubmit}>
                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">Intended Travel Date</label>
                    <input type="date" value={customDates} onChange={(e) => setCustomDates(e.target.value)} className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Number of Pilgrims</label>
                    <select value={customPilgrims} onChange={(e) => setCustomPilgrims(e.target.value)} className="form-select">
                      <option>1 Pilgrim (Single)</option>
                      <option>2 Pilgrims (Couple)</option>
                      <option>Family (4 Guests)</option>
                      <option>Group (6+ Guests)</option>
                    </select>
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">Estimated Budget (Per Pilgrim)</label>
                    <input type="text" value={customBudget} onChange={(e) => setCustomBudget(e.target.value)} className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Hotel Proximity to Haram</label>
                    <select value={customHaramDist} onChange={(e) => setCustomHaramDist(e.target.value)} className="form-select">
                      <option>Direct Haram View / Under 50m</option>
                      <option>Under 100 meters</option>
                      <option>300 meters walking distance</option>
                      <option>Shuttle Bus Accessible (Budget)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Additional Services Requested</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.85rem' }}>
                    <label><input type="checkbox" defaultChecked /> Haramain Bullet Train</label>
                    <label><input type="checkbox" defaultChecked /> VIP Private Airport Transfer</label>
                    <label><input type="checkbox" defaultChecked /> Historical Ziyarat Tours</label>
                    <label><input type="checkbox" defaultChecked /> Saudi E-Visa Issuance</label>
                  </div>
                </div>

                <button type="submit" className="btn btn-gold btn-lg" style={{ width: '100%', marginTop: '1rem' }}>
                  Submit Custom Umrah Request
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </>
  );
}
