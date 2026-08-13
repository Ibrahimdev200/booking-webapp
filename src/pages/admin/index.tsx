import React, { useState } from 'react';
import Head from 'next/head';
import { useAuth } from '../../context/AuthContext';
import { getBookings, getVisaApplications, getHotels, saveHotel, updateVisaStatus, updateBookingStatus } from '../../services/dbService';
import { useCurrency } from '../../context/CurrencyContext';
import { Shield, Building2, FileText, Users, DollarSign, Plus, CheckCircle2, Settings, Edit, Save } from 'lucide-react';
import { UserRole, Hotel, VisaStatus, BookingStatus } from '../../types';

export default function AdminDashboardPage() {
  const { user, switchRole } = useAuth();
  const { formatPrice } = useCurrency();

  const [activeTab, setActiveTab] = useState<'analytics' | 'hotels' | 'visas' | 'bookings' | 'settings'>('analytics');

  const [hotelsList, setHotelsList] = useState<Hotel[]>(getHotels());
  const [visaAppsList, setVisaAppsList] = useState(getVisaApplications());
  const [bookingsList, setBookingsList] = useState(getBookings());

  // New Hotel Form Modal State
  const [showAddHotel, setShowAddHotel] = useState(false);
  const [newHotelName, setNewHotelName] = useState('');
  const [newHotelCity, setNewHotelCity] = useState('Dubai');
  const [newHotelCountry, setNewHotelCountry] = useState('United Arab Emirates');
  const [newHotelStars, setNewHotelStars] = useState(5);
  const [newHotelPrice, setNewHotelPrice] = useState(150000);

  const totalRevenueNGN = bookingsList.reduce((sum, b) => sum + b.amount, 0);

  const handleCreateHotel = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Hotel = {
      id: `hot_${Date.now()}`,
      name: newHotelName,
      city: newHotelCity,
      country: newHotelCountry,
      address: `${newHotelCity} Center`,
      starRating: Number(newHotelStars),
      guestRating: 9.0,
      reviewCount: 1,
      distanceFromCenter: '0.5 km from City Center',
      pricePerNight: Number(newHotelPrice),
      currency: 'NGN',
      breakfastIncluded: true,
      freeCancellation: true,
      propertyType: 'Hotel',
      isDemo: false,
      images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80'],
      amenities: ['Wi-Fi', 'Swimming Pool', '24/7 Room Service'],
      description: 'Manually added agency hotel inventory.',
      rooms: [
        {
          id: `r_${Date.now()}`,
          name: 'Executive Deluxe Suite',
          type: 'Deluxe',
          capacity: 2,
          pricePerNight: Number(newHotelPrice),
          bedType: '1 King Bed',
          sizeSqMters: 40,
          features: ['City View', 'Breakfast Included'],
          available: true
        }
      ]
    };

    const updated = saveHotel(created);
    setHotelsList(updated);
    setShowAddHotel(false);
    setNewHotelName('');
  };

  const handleUpdateVisa = (id: string, status: VisaStatus, notes: string) => {
    const updated = updateVisaStatus(id, status, notes);
    setVisaAppsList(updated);
  };

  const handleUpdateBooking = (id: string, status: BookingStatus) => {
    const updated = updateBookingStatus(id, status);
    setBookingsList(updated);
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard & Staff CRM | Travel Agent Demo</title>
      </Head>

      <div style={{ background: 'var(--navy-deep)', color: '#FFF', padding: '2.5rem 0 1.5rem', borderBottom: '2px solid #D4AF37' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={20} style={{ color: '#D4AF37' }} />
              <span className="badge badge-gold">Staff Role: {user?.role || 'Super Admin'}</span>
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginTop: '4px' }}>Travel Agency CRM Admin</h1>
          </div>

          {/* Staff Role Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Switch Staff Role:</span>
            <select
              value={user?.role}
              onChange={(e) => switchRole(e.target.value as UserRole)}
              className="form-select"
              style={{ background: '#0B192C', color: '#FFF', borderColor: 'rgba(212,175,55,0.4)', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
            >
              <option value="Super Admin">Super Admin (Full Access)</option>
              <option value="Booking Agent">Booking Agent</option>
              <option value="Visa Officer">Visa Officer</option>
              <option value="Hajj/Umrah Officer">Hajj & Umrah Officer</option>
              <option value="Finance Officer">Finance Officer</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '2px solid #E2E8F0', marginBottom: '2rem', overflowX: 'auto' }}>
          <button onClick={() => setActiveTab('analytics')} className={`tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}>
            Analytics & Overview
          </button>
          <button onClick={() => setActiveTab('hotels')} className={`tab-btn ${activeTab === 'hotels' ? 'active' : ''}`}>
            Hotel Inventory ({hotelsList.length})
          </button>
          <button onClick={() => setActiveTab('visas')} className={`tab-btn ${activeTab === 'visas' ? 'active' : ''}`}>
            Visa Applications ({visaAppsList.length})
          </button>
          <button onClick={() => setActiveTab('bookings')} className={`tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}>
            All Bookings ({bookingsList.length})
          </button>
          <button onClick={() => setActiveTab('settings')} className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}>
            System Setup & APIs
          </button>
        </div>

        {/* 1. ANALYTICS OVERVIEW */}
        {activeTab === 'analytics' && (
          <div>
            <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
              <div className="card" style={{ padding: '1.25rem', borderLeft: '4px solid #D4AF37' }}>
                <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700 }}>TOTAL REVENUE</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0B192C', marginTop: '4px' }}>{formatPrice(totalRevenueNGN)}</div>
              </div>

              <div className="card" style={{ padding: '1.25rem', borderLeft: '4px solid #10B981' }}>
                <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700 }}>TOTAL BOOKINGS</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0B192C', marginTop: '4px' }}>{bookingsList.length}</div>
              </div>

              <div className="card" style={{ padding: '1.25rem', borderLeft: '4px solid #3B82F6' }}>
                <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700 }}>VISA APPLICATIONS</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0B192C', marginTop: '4px' }}>{visaAppsList.length}</div>
              </div>

              <div className="card" style={{ padding: '1.25rem', borderLeft: '4px solid #8B5CF6' }}>
                <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700 }}>TOTAL HOTELS</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0B192C', marginTop: '4px' }}>{hotelsList.length}</div>
              </div>
            </div>

            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C', marginBottom: '1rem' }}>Agency Performance Summary</h3>
              <p style={{ color: '#64748B', fontSize: '0.9rem' }}>
                Hajj & Umrah pilgrimages represent 65% of current booking volume, followed by UAE Dubai Visa processing and luxury hotel reservations.
              </p>
            </div>
          </div>
        )}

        {/* 2. HOTEL INVENTORY MANAGER */}
        {activeTab === 'hotels' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0B192C' }}>Manage Agency Hotel Inventory</h2>
              <button onClick={() => setShowAddHotel(true)} className="btn btn-gold btn-sm">
                <Plus size={16} /> Add Manual Hotel
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {hotelsList.map(h => (
                <div key={h.id} className="card" style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C' }}>{h.name}</h3>
                    <div style={{ fontSize: '0.85rem', color: '#64748B' }}>{h.city}, {h.country} • {'★'.repeat(h.starRating)}</div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B192C' }}>{formatPrice(h.pricePerNight)} / night</div>
                    <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>{h.isDemo ? 'Demo Mode' : 'Live Inventory'}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Hotel Modal */}
            {showAddHotel && (
              <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                <form onSubmit={handleCreateHotel} className="card" style={{ maxWidth: '500px', width: '100%', padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C', marginBottom: '1rem' }}>Add New Hotel Inventory</h3>
                  
                  <div className="form-group">
                    <label className="form-label">Hotel Name</label>
                    <input type="text" required placeholder="e.g. Royal Clock Tower Suites" value={newHotelName} onChange={(e) => setNewHotelName(e.target.value)} className="form-input" />
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">City</label>
                      <input type="text" required value={newHotelCity} onChange={(e) => setNewHotelCity(e.target.value)} className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Country</label>
                      <input type="text" required value={newHotelCountry} onChange={(e) => setNewHotelCountry(e.target.value)} className="form-input" />
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Star Rating</label>
                      <select value={newHotelStars} onChange={(e) => setNewHotelStars(Number(e.target.value))} className="form-select">
                        <option value={5}>5 Stars</option>
                        <option value={4}>4 Stars</option>
                        <option value={3}>3 Stars</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Price per Night (NGN)</label>
                      <input type="number" required value={newHotelPrice} onChange={(e) => setNewHotelPrice(Number(e.target.value))} className="form-input" />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                    <button type="button" onClick={() => setShowAddHotel(false)} className="btn btn-outline-navy" style={{ flex: 1 }}>Cancel</button>
                    <button type="submit" className="btn btn-gold" style={{ flex: 1 }}>Save Hotel</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* 3. VISA APPLICATIONS MANAGER */}
        {activeTab === 'visas' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {visaAppsList.map(v => (
              <div key={v.id} className="card" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <span className="badge badge-gold">Ref: {v.reference}</span>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C', margin: '4px 0' }}>{v.country} ({v.visaType})</h3>
                    <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
                      Applicant: <strong>{v.applicantName}</strong> | Passport: {v.passportNumber} | Contact: {v.applicantPhone}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <select
                      value={v.status}
                      onChange={(e) => handleUpdateVisa(v.id, e.target.value as VisaStatus, v.notes || 'Status updated by Visa Officer')}
                      className="form-select"
                      style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem' }}
                    >
                      <option value="Submitted">Submitted</option>
                      <option value="Documents Required">Documents Required</option>
                      <option value="Processing">Processing</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. ALL BOOKINGS */}
        {activeTab === 'bookings' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {bookingsList.map(b => (
              <div key={b.id} className="card" style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <span className="badge badge-navy">{b.reference}</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0B192C', margin: '4px 0' }}>{b.itemDetails?.title}</h3>
                  <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Customer: {b.customerName} ({b.customerPhone})</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C' }}>{formatPrice(b.amount)}</div>
                  <select
                    value={b.status}
                    onChange={(e) => handleUpdateBooking(b.id, e.target.value as BookingStatus)}
                    className="form-select"
                    style={{ fontSize: '0.85rem' }}
                  >
                    <option value="Confirmed">Confirmed</option>
                    <option value="Processing">Processing</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 5. SYSTEM SETUP & APIS */}
        {activeTab === 'settings' && (
          <div className="card" style={{ maxWidth: '750px', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Settings size={20} style={{ color: '#D4AF37' }} /> System Integration & Gateway Setup
            </h3>

            <div className="form-group">
              <label className="form-label">Payment Gateway Mode</label>
              <select className="form-select">
                <option>Paystack Sandbox Test Mode</option>
                <option>Flutterwave Sandbox Mode</option>
                <option>Korapay Sandbox Mode</option>
                <option>Live Production Gateway</option>
              </select>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Paystack Secret Key</label>
                <input type="password" defaultValue="sk_test_1234567890abcdef" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Flutterwave Secret Key</label>
                <input type="password" defaultValue="FLWSECK-test-123456" className="form-input" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Amadeus Hotel & Flight API Key</label>
              <input type="password" defaultValue="amadeus_test_client_secret_9981" className="form-input" />
            </div>

            <button className="btn btn-gold" style={{ marginTop: '1rem' }}>
              <Save size={16} /> Save Configuration
            </button>
          </div>
        )}
      </div>
    </>
  );
}
