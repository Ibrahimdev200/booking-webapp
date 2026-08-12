import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import { getBookings, getVisaApplications } from '../../services/dbService';
import { generateBookingPDF } from '../../services/pdfService';
import { useCurrency } from '../../context/CurrencyContext';
import { User, Calendar, FileText, Download, Shield, Clock, CheckCircle2, ShoppingBag, Plus } from 'lucide-react';

export default function CustomerDashboardPage() {
  const { user } = useAuth();
  const { formatPrice } = useCurrency();

  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'visas' | 'documents' | 'profile'>('overview');
  const [bookingFilter, setBookingFilter] = useState<'all' | 'hotel' | 'flight' | 'hajj' | 'umrah' | 'tour'>('all');

  const bookings = getBookings();
  const visaApps = getVisaApplications();

  const filteredBookings = bookingFilter === 'all' ? bookings : bookings.filter(b => b.serviceType === bookingFilter);

  return (
    <>
      <Head>
        <title>Customer Dashboard | Manaar Travels & Tours</title>
      </Head>

      <div style={{ background: 'var(--navy-main)', color: '#FFF', padding: '2.5rem 0 1.5rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '0.4rem' }}>Customer Portal</span>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Welcome, {user?.name || 'Valued Traveller'}</h1>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>{user?.email} • {user?.phone}</p>
          </div>

          <Link href="/" className="btn btn-gold btn-sm">
            <Plus size={16} /> Book New Service
          </Link>
        </div>
      </div>

      <div className="container" style={{ padding: '2.5rem 1.25rem' }}>
        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '2px solid #E2E8F0', marginBottom: '2rem', overflowX: 'auto' }}>
          <button onClick={() => setActiveTab('overview')} className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}>
            Overview & Trips
          </button>
          <button onClick={() => setActiveTab('bookings')} className={`tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}>
            My Bookings ({bookings.length})
          </button>
          <button onClick={() => setActiveTab('visas')} className={`tab-btn ${activeTab === 'visas' ? 'active' : ''}`}>
            Visa Applications ({visaApps.length})
          </button>
          <button onClick={() => setActiveTab('documents')} className={`tab-btn ${activeTab === 'documents' ? 'active' : ''}`}>
            Documents Vault
          </button>
          <button onClick={() => setActiveTab('profile')} className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}>
            My Profile
          </button>
        </div>

        {/* 1. OVERVIEW */}
        {activeTab === 'overview' && (
          <div>
            <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
              <div className="card" style={{ padding: '1.25rem', borderLeft: '4px solid #D4AF37' }}>
                <span style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>Total Bookings</span>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0B192C', marginTop: '4px' }}>{bookings.length}</div>
              </div>

              <div className="card" style={{ padding: '1.25rem', borderLeft: '4px solid #10B981' }}>
                <span style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>Visa Applications</span>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0B192C', marginTop: '4px' }}>{visaApps.length}</div>
              </div>

              <div className="card" style={{ padding: '1.25rem', borderLeft: '4px solid #3B82F6' }}>
                <span style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>Active Status</span>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10B981', marginTop: '6px' }}>All Confirmed</div>
              </div>
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0B192C', marginBottom: '1rem' }}>Recent Bookings</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {bookings.slice(0, 3).map(b => (
                <div key={b.id} className="card" style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>Ref: {b.reference}</span>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B192C', margin: '4px 0 2px' }}>{b.itemDetails?.title}</h3>
                    <div style={{ fontSize: '0.85rem', color: '#64748B' }}>{b.itemDetails?.subtitle || b.serviceType.toUpperCase()}</div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B192C' }}>{formatPrice(b.amount)}</div>
                    <button onClick={() => generateBookingPDF(b)} className="btn btn-outline-navy btn-sm" style={{ marginTop: '4px' }}>
                      <Download size={12} /> Voucher PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. MY BOOKINGS */}
        {activeTab === 'bookings' && (
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {(['all', 'hotel', 'flight', 'hajj', 'umrah', 'tour'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setBookingFilter(cat)}
                  className="btn btn-sm"
                  style={{
                    background: bookingFilter === cat ? '#0B192C' : '#E2E8F0',
                    color: bookingFilter === cat ? '#D4AF37' : '#0B192C',
                    textTransform: 'capitalize'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {filteredBookings.map(b => (
                <div key={b.id} className="card" style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span className="badge badge-navy" style={{ fontSize: '0.7rem' }}>{b.reference}</span>
                      <span className="badge badge-success" style={{ fontSize: '0.7rem' }}>{b.status}</span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0B192C', margin: '4px 0' }}>{b.itemDetails?.title}</h3>
                    <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Booked on: {new Date(b.createdAt).toLocaleDateString()}</div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C' }}>{formatPrice(b.amount)}</div>
                    <button onClick={() => generateBookingPDF(b)} className="btn btn-gold btn-sm" style={{ marginTop: '6px' }}>
                      <Download size={14} /> Printable Invoice PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. VISA APPLICATIONS */}
        {activeTab === 'visas' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {visaApps.map(v => (
              <div key={v.id} className="card" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span className="badge badge-gold">Ref: {v.reference}</span>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C', margin: '4px 0' }}>{v.country} ({v.visaType})</h3>
                    <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Passport: {v.passportNumber} | Applicant: {v.applicantName}</div>
                  </div>
                  <span className="badge badge-navy" style={{ fontSize: '0.85rem' }}>{v.status}</span>
                </div>

                {v.notes && (
                  <div style={{ marginTop: '1rem', background: '#F8FAFC', padding: '0.75rem', borderRadius: '6px', fontSize: '0.85rem', color: '#475569' }}>
                    <strong>Embassy Status Note:</strong> {v.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 4. DOCUMENTS VAULT */}
        {activeTab === 'documents' && (
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C', marginBottom: '1rem' }}>Uploaded Passports & Issued Vouchers</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: '#F8FAFC', borderRadius: '8px' }}>
                <div>
                  <strong>International_Passport_A08945123.pdf</strong>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Uploaded on 2026-08-01</div>
                </div>
                <span className="badge badge-success">Verified</span>
              </div>
            </div>
          </div>
        )}

        {/* 5. PROFILE */}
        {activeTab === 'profile' && (
          <div className="card" style={{ maxWidth: '600px', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C', marginBottom: '1rem' }}>Personal & Passport Information</h3>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" defaultValue={user?.name} className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" defaultValue={user?.email} className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="tel" defaultValue={user?.phone} className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Passport Number</label>
              <input type="text" defaultValue={user?.passportNumber || 'A08945123'} className="form-input" />
            </div>
            <button className="btn btn-gold" style={{ marginTop: '1rem' }}>Save Changes</button>
          </div>
        )}
      </div>
    </>
  );
}
