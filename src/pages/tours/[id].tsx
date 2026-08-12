import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MOCK_TOURS } from '../../data/mockTours';
import { useCurrency } from '../../context/CurrencyContext';
import { useCart } from '../../context/CartContext';
import { Clock, MapPin, CheckCircle2, ShoppingBag } from 'lucide-react';

export default function TourDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();

  const tour = MOCK_TOURS.find(t => t.id === id) || MOCK_TOURS[0];

  const handleBookTour = () => {
    addToCart({
      serviceType: 'tour',
      title: tour.title,
      subtitle: `${tour.duration} in ${tour.destination}`,
      details: {
        tourId: tour.id,
        destination: tour.destination,
        duration: tour.duration
      },
      price: tour.price,
      currency: 'NGN',
      image: tour.images[0]
    });

    router.push('/cart');
  };

  return (
    <>
      <Head>
        <title>{tour.title} - Manaar Travels & Tours</title>
      </Head>

      <div style={{ background: '#0B192C', color: '#FFF', padding: '3rem 0' }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>{tour.type} Tour Package</span>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800 }}>{tour.title}</h1>
          <div style={{ display: 'flex', gap: '1.5rem', color: '#94A3B8', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={16} /> {tour.destination}, {tour.country}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={16} /> {tour.duration}</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2.5rem' }}>
          <div>
            <div style={{ height: '360px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
              <img src={tour.images[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0B192C', marginBottom: '0.75rem' }}>Tour Description</h2>
            <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '2rem' }}>{tour.description}</p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C', marginBottom: '1rem' }}>Day-by-Day Itinerary</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {tour.itinerary.map(step => (
                <div key={step.day} style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '10px', borderLeft: '4px solid #D4AF37' }}>
                  <div style={{ fontWeight: 800, color: '#0B192C', fontSize: '1rem' }}>Day {step.day}: {step.title}</div>
                  <p style={{ fontSize: '0.88rem', color: '#64748B', marginTop: '4px', lineHeight: '1.5' }}>{step.detail}</p>
                </div>
              ))}
            </div>

            <div className="grid-2" style={{ marginBottom: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B192C', marginBottom: '0.5rem' }}>What's Included</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.88rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {tour.included.map((inc, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16} style={{ color: '#059669' }} /> {inc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: '1.5rem', height: 'fit-content', borderTop: '4px solid #D4AF37' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748B' }}>Tour Price per Person</span>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0B192C', margin: '4px 0 1rem' }}>{formatPrice(tour.price)}</div>

            <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', marginBottom: '1.25rem', fontSize: '0.85rem', color: '#475569' }}>
              <div><strong>Meeting Point:</strong> {tour.meetingPoint}</div>
              <div style={{ marginTop: '4px' }}><strong>Available Dates:</strong> {tour.availableDates.join(', ')}</div>
            </div>

            <button onClick={handleBookTour} className="btn btn-gold btn-lg" style={{ width: '100%' }}>
              <ShoppingBag size={18} /> Book This Tour
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
