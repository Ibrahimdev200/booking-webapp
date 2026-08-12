import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getHotels } from '../../services/dbService';
import { useCurrency } from '../../context/CurrencyContext';
import { Star, MapPin, Check, Filter, Search } from 'lucide-react';

export default function HotelsPage() {
  const router = useRouter();
  const { formatPrice } = useCurrency();
  const hotels = getHotels();

  // Filters state
  const [searchQuery, setSearchQuery] = useState(router.query.city ? String(router.query.city) : '');
  const [selectedStars, setSelectedStars] = useState<number[]>([]);
  const [breakfastOnly, setBreakfastOnly] = useState(false);
  const [cancellationOnly, setCancellationOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'recommended' | 'price_low' | 'price_high' | 'rating'>('recommended');

  const handleStarToggle = (star: number) => {
    setSelectedStars(prev => prev.includes(star) ? prev.filter(s => s !== star) : [...prev, star]);
  };

  // Filtered logic
  let filtered = hotels.filter(h => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchCity = h.city.toLowerCase().includes(q);
      const matchCountry = h.country.toLowerCase().includes(q);
      const matchName = h.name.toLowerCase().includes(q);
      if (!matchCity && !matchCountry && !matchName) return false;
    }
    if (selectedStars.length > 0 && !selectedStars.includes(h.starRating)) return false;
    if (breakfastOnly && !h.breakfastIncluded) return false;
    if (cancellationOnly && !h.freeCancellation) return false;
    return true;
  });

  // Sorting
  if (sortBy === 'price_low') filtered.sort((a, b) => a.pricePerNight - b.pricePerNight);
  if (sortBy === 'price_high') filtered.sort((a, b) => b.pricePerNight - a.pricePerNight);
  if (sortBy === 'rating') filtered.sort((a, b) => b.guestRating - a.guestRating);

  return (
    <>
      <Head>
        <title>Hotel Reservations & Luxury Stays | Manaar Travels & Tours</title>
      </Head>

      <div style={{ background: 'var(--navy-main)', color: '#FFF', padding: '3rem 0 2rem' }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Global Hotel Inventory</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Reserve Premium Hotels Worldwide</h1>
          <p style={{ color: '#94A3B8' }}>Discover 5-star Haram view suites, Dubai luxury resorts, and boutique city hotels.</p>

          {/* Quick Search Bar */}
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', maxWidth: '600px' }}>
            <input
              type="text"
              placeholder="Search by city, hotel name or landmark (e.g. Dubai, Makkah)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212,175,55,0.4)' }}
            />
            <button className="btn btn-gold">
              <Search size={18} /> Search
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem' }}>
          {/* Filter Sidebar */}
          <div className="card" style={{ padding: '1.25rem', height: 'fit-content' }}>
            <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0B192C', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Filter size={18} /> Filter Hotels
            </div>

            {/* Star Rating */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#64748B', marginBottom: '0.5rem' }}>Star Rating</div>
              {[5, 4, 3].map(star => (
                <label key={star} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', margin: '0.4rem 0', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={selectedStars.includes(star)}
                    onChange={() => handleStarToggle(star)}
                  />
                  <span>{star} Stars ({'★'.repeat(star)})</span>
                </label>
              ))}
            </div>

            {/* Amenities */}
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#64748B', marginBottom: '0.5rem' }}>Preferences</div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', margin: '0.4rem 0', cursor: 'pointer' }}>
                <input type="checkbox" checked={breakfastOnly} onChange={() => setBreakfastOnly(!breakfastOnly)} />
                <span>Breakfast Included</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', margin: '0.4rem 0', cursor: 'pointer' }}>
                <input type="checkbox" checked={cancellationOnly} onChange={() => setCancellationOnly(!cancellationOnly)} />
                <span>Free Cancellation</span>
              </label>
            </div>
          </div>

          {/* Hotel Listings */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ fontSize: '0.95rem', color: '#64748B' }}>
                Showing <strong>{filtered.length}</strong> available hotels
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Sort by:</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className="form-select" style={{ width: 'auto', padding: '0.4rem 0.8rem' }}>
                  <option value="recommended">Recommended</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                  <option value="rating">Highest Guest Rating</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {filtered.map(hotel => (
                <div key={hotel.id} className="card" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '1rem' }}>
                  <div style={{ height: '100%', minHeight: '200px', position: 'relative' }}>
                    <img src={hotel.images[0]} alt={hotel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#D4AF37' }}>
                            {[...Array(hotel.starRating)].map((_, i) => (
                              <Star key={i} size={14} fill="#D4AF37" />
                            ))}
                          </div>
                          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C', margin: '0.2rem 0' }}>{hotel.name}</h3>
                          <div style={{ fontSize: '0.85rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <MapPin size={14} /> {hotel.address}, {hotel.city} ({hotel.distanceFromCenter})
                          </div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                          <span style={{ background: '#10B981', color: '#FFF', padding: '0.3rem 0.6rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 800 }}>
                            {hotel.guestRating} / 10
                          </span>
                          <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>{hotel.reviewCount} reviews</div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', fontSize: '0.8rem', color: '#059669', fontWeight: 600 }}>
                        {hotel.breakfastIncluded && <div><Check size={12} style={{ display: 'inline' }} /> Breakfast included</div>}
                        {hotel.freeCancellation && <div><Check size={12} style={{ display: 'inline' }} /> Free cancellation</div>}
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '0.75rem', marginTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Price per night</span>
                        <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C' }}>{formatPrice(hotel.pricePerNight)}</div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <Link href={`/hotels/${hotel.id}`} className="btn btn-navy btn-sm">
                          View Rooms
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
