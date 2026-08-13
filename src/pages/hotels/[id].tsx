import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getHotels } from '../../services/dbService';
import { useCurrency } from '../../context/CurrencyContext';
import { useCart } from '../../context/CartContext';
import { Star, MapPin, CheckCircle2, Wifi, Coffee, Shield, Calendar, Users, ShoppingBag } from 'lucide-react';

export default function HotelDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();

  const hotels = getHotels();
  const hotel = hotels.find(h => h.id === id) || hotels[0];

  const [selectedRoom, setSelectedRoom] = useState(hotel?.rooms[0] || null);
  const [nights, setNights] = useState(3);
  const [added, setAdded] = useState(false);

  if (!hotel) return <div>Loading hotel details...</div>;

  const totalPriceNGN = (selectedRoom ? selectedRoom.pricePerNight : hotel.pricePerNight) * nights;

  const handleAddToCart = () => {
    addToCart({
      serviceType: 'hotel',
      title: hotel.name,
      subtitle: `${selectedRoom?.name || 'Standard Room'} (${nights} Nights in ${hotel.city})`,
      details: {
        hotelId: hotel.id,
        city: hotel.city,
        nights,
        roomType: selectedRoom?.name,
        breakfastIncluded: hotel.breakfastIncluded
      },
      price: totalPriceNGN,
      currency: 'NGN',
      image: hotel.images[0]
    });

    setAdded(true);
    setTimeout(() => {
      router.push('/cart');
    }, 800);
  };

  return (
    <>
      <Head>
        <title>{hotel.name} - Travel Agent Demo</title>
      </Head>

      <div style={{ background: '#FFF', borderBottom: '1px solid #E2E8F0', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#D4AF37', marginBottom: '0.3rem' }}>
            {[...Array(hotel.starRating)].map((_, i) => (
              <Star key={i} size={16} fill="#D4AF37" />
            ))}
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0B192C' }}>{hotel.name}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748B', fontSize: '0.9rem' }}>
            <MapPin size={16} /> {hotel.address}, {hotel.city}, {hotel.country} ({hotel.distanceFromCenter})
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
        {/* Gallery */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ height: '380px', borderRadius: '12px', overflow: 'hidden' }}>
            <img src={hotel.images[0]} alt={hotel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '380px' }}>
            {hotel.images.slice(1, 3).map((img, i) => (
              <div key={i} style={{ flex: 1, borderRadius: '12px', overflow: 'hidden' }}>
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2.5rem' }}>
          {/* Main Details */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0B192C', marginBottom: '0.75rem' }}>About this Hotel</h2>
              <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '0.95rem' }}>{hotel.description}</p>
            </div>

            {/* Amenities */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C', marginBottom: '1rem' }}>Property Amenities</h3>
              <div className="grid-2">
                {hotel.amenities.map((amen, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#334155' }}>
                    <CheckCircle2 size={16} style={{ color: '#D4AF37' }} /> {amen}
                  </div>
                ))}
              </div>
            </div>

            {/* Rooms Selection */}
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C', marginBottom: '1rem' }}>Available Room Types</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {hotel.rooms.map(room => (
                  <div
                    key={room.id}
                    onClick={() => setSelectedRoom(room)}
                    style={{
                      border: selectedRoom?.id === room.id ? '2px solid #D4AF37' : '1px solid #E2E8F0',
                      background: selectedRoom?.id === room.id ? 'rgba(212,175,55,0.05)' : '#FFF',
                      padding: '1.25rem',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B192C' }}>{room.name}</h4>
                      <div style={{ fontSize: '0.85rem', color: '#64748B', margin: '4px 0' }}>
                        {room.bedType} • {room.sizeSqMters} sq.m • Up to {room.capacity} Guests
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '6px' }}>
                        {room.features.map((f, i) => (
                          <span key={i} className="badge badge-gold" style={{ fontSize: '0.7rem' }}>{f}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C' }}>{formatPrice(room.pricePerNight)}</div>
                      <span style={{ fontSize: '0.75rem', color: '#64748B' }}>per night</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="card" style={{ padding: '1.5rem', height: 'fit-content', borderTop: '4px solid #D4AF37' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C', marginBottom: '1rem' }}>Reserve Your Stay</h3>

            <div className="form-group">
              <label className="form-label">Duration of Stay (Nights)</label>
              <select value={nights} onChange={(e) => setNights(Number(e.target.value))} className="form-select">
                <option value={1}>1 Night</option>
                <option value={2}>2 Nights</option>
                <option value={3}>3 Nights</option>
                <option value={5}>5 Nights</option>
                <option value={7}>7 Nights (1 Week)</option>
              </select>
            </div>

            <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
              <div style={{ fontSize: '0.85rem', color: '#64748B', display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span>Room Rate:</span>
                <span>{formatPrice(selectedRoom ? selectedRoom.pricePerNight : hotel.pricePerNight)} / night</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748B', display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span>Duration:</span>
                <span>{nights} Nights</span>
              </div>
              <div style={{ borderTop: '1px solid #CBD5E1', paddingTop: '0.5rem', fontSize: '1.1rem', fontWeight: 800, color: '#0B192C', display: 'flex', justifyContent: 'space-between' }}>
                <span>Total Estimated:</span>
                <span style={{ color: '#D4AF37' }}>{formatPrice(totalPriceNGN)}</span>
              </div>
            </div>

            <button onClick={handleAddToCart} className="btn btn-gold btn-lg" style={{ width: '100%' }}>
              <ShoppingBag size={18} /> {added ? 'Redirecting to Cart...' : 'Reserve & Checkout'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
