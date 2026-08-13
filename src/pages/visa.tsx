import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MOCK_VISA_COUNTRIES } from '../data/mockVisaCountries';
import { saveVisaApplication, getVisaApplications } from '../services/dbService';
import { generateBookingReference } from '../services/paymentService';
import { useCurrency } from '../context/CurrencyContext';
import { useCart } from '../context/CartContext';
import { FileText, AlertTriangle, CheckCircle2, Upload, Search, Clock, ShieldCheck } from 'lucide-react';
import { VisaCountry, VisaApplication } from '../types';

export default function VisaPage() {
  const router = useRouter();
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();

  const [selectedCountry, setSelectedCountry] = useState<VisaCountry | null>(null);
  const [trackRef, setTrackRef] = useState('');
  const [trackedApp, setTrackedApp] = useState<VisaApplication | null>(null);
  const [trackError, setTrackError] = useState('');

  // Application Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [passportNum, setPassportNum] = useState('');
  const [passportExpiry, setPassportExpiry] = useState('');
  const [uploadedDoc, setUploadedDoc] = useState(false);

  const handleStartApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCountry) return;

    const ref = generateBookingReference('VISA');
    const newApp: VisaApplication = {
      id: `v_${Date.now()}`,
      reference: ref,
      userId: 'usr-customer-01',
      applicantName,
      applicantEmail,
      applicantPhone,
      country: selectedCountry.country,
      visaType: selectedCountry.visaType,
      passportNumber: passportNum,
      passportExpiry,
      status: 'Submitted',
      uploadedDocuments: [
        { name: 'Passport_Data_Page.pdf', url: '#', date: new Date().toISOString().split('T')[0] }
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    saveVisaApplication(newApp);

    addToCart({
      serviceType: 'visa',
      title: `${selectedCountry.country} Visa Assistance`,
      subtitle: `Application Ref: ${ref} (${selectedCountry.visaType})`,
      details: {
        visaRef: ref,
        country: selectedCountry.country,
        applicantName,
        passportNum
      },
      price: selectedCountry.serviceFee,
      currency: 'NGN',
      image: selectedCountry.image
    });

    router.push('/cart');
  };

  const handleTrackStatus = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackError('');
    setTrackedApp(null);

    const apps = getVisaApplications();
    const found = apps.find(a => a.reference.toUpperCase() === trackRef.trim().toUpperCase());

    if (found) {
      setTrackedApp(found);
    } else {
      setTrackError('No visa application found with that reference ID.');
    }
  };

  return (
    <>
      <Head>
        <title>Visa Application Portal | Travel Agent Demo</title>
      </Head>

      <section style={{ background: 'var(--navy-main)', color: '#FFF', padding: '3.5rem 0 2.5rem' }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Official Travel Visa Portal</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Professional Visa Processing Services</h1>
          <p style={{ color: '#94A3B8' }}>UAE Dubai, Saudi Arabia E-Visa, UK, USA, Schengen Europe, Turkey & Qatar.</p>

          {/* Disclaimer Banner */}
          <div style={{
            marginTop: '1.5rem',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid #D4AF37',
            padding: '1rem 1.25rem',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.9rem',
            color: '#F8FAFC'
          }}>
            <AlertTriangle size={24} style={{ color: '#D4AF37', flexShrink: 0 }} />
            <div>
              <strong>Important Embassy Notice:</strong> "Visa approval is strictly subject to the decision of the relevant embassy, consulate, or immigration authority."
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 1.25rem' }}>
        {/* Visa Tracker Section */}
        <div className="card" style={{ padding: '1.5rem', marginBottom: '3rem', background: '#F8FAFC', borderLeft: '4px solid #FF6B00' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={18} style={{ color: '#FF6B00' }} /> Track Visa Application Status
          </h2>
          
          <form onSubmit={handleTrackStatus} style={{ display: 'flex', gap: '0.75rem', maxWidth: '500px' }}>
            <input
              type="text"
              placeholder="Enter Reference ID (e.g. MAN-VISA-93KC2)..."
              value={trackRef}
              onChange={(e) => setTrackRef(e.target.value)}
              className="form-input"
            />
            <button type="submit" className="btn btn-navy btn-sm">
              Track Status
            </button>
          </form>

          {trackError && <div style={{ color: '#DC2626', fontSize: '0.85rem', marginTop: '0.5rem' }}>{trackError}</div>}

          {trackedApp && (
            <div style={{ marginTop: '1rem', background: '#FFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>{trackedApp.applicantName}</strong> — {trackedApp.country} ({trackedApp.visaType})
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Ref: {trackedApp.reference} | Applied: {new Date(trackedApp.createdAt).toLocaleDateString()}</div>
                </div>
                <span className="badge badge-gold" style={{ fontSize: '0.85rem' }}>{trackedApp.status}</span>
              </div>
              {trackedApp.notes && <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '0.5rem', fontStyle: 'italic' }}>Note: {trackedApp.notes}</div>}
            </div>
          )}
        </div>

        {/* Countries Grid */}
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0B192C', marginBottom: '1.5rem' }}>Available Country Visas</h2>

        <div className="grid-3">
          {MOCK_VISA_COUNTRIES.map((c) => (
            <div key={c.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ position: 'relative', height: '160px' }}>
                  <img src={c.image} alt={c.country} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '1.5rem' }}>{c.flagCode}</span>
                </div>

                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C', marginBottom: '0.3rem' }}>{c.country}</h3>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>{c.visaType}</div>

                  <div style={{ margin: '0.75rem 0', fontSize: '0.82rem', color: '#475569' }}>
                    <div><strong>Processing Time:</strong> {c.processingTime}</div>
                    <div><strong>Validity:</strong> {c.validity}</div>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: '#334155' }}>
                    <strong>Required Documents:</strong>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '4px' }}>
                      {c.requirements.slice(0, 3).map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1rem 1.25rem', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#64748B' }}>Service Fee</span>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0B192C' }}>{formatPrice(c.serviceFee)}</div>
                </div>

                <button onClick={() => setSelectedCountry(c)} className="btn btn-gold btn-sm">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visa Application Modal Form */}
      {selectedCountry && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div className="card" style={{ maxWidth: '600px', width: '100%', padding: '2rem', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '2px solid #D4AF37', paddingBottom: '0.5rem' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C' }}>
                Visa Application: {selectedCountry.country}
              </h2>
              <button onClick={() => setSelectedCountry(null)} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>

            <form onSubmit={handleStartApplication}>
              <div className="form-group">
                <label className="form-label">Applicant Full Name (As in Passport)</label>
                <input type="text" required placeholder="Alhaji Ibrahim Bello" value={applicantName} onChange={(e) => setApplicantName(e.target.value)} className="form-input" />
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" required placeholder="name@example.com" value={applicantEmail} onChange={(e) => setApplicantEmail(e.target.value)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp</label>
                  <input type="tel" required placeholder="0903 367 5852" value={applicantPhone} onChange={(e) => setApplicantPhone(e.target.value)} className="form-input" />
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Passport Number</label>
                  <input type="text" required placeholder="A08945123" value={passportNum} onChange={(e) => setPassportNum(e.target.value)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Passport Expiry Date</label>
                  <input type="date" required value={passportExpiry} onChange={(e) => setPassportExpiry(e.target.value)} className="form-input" />
                </div>
              </div>

              {/* Document Attachment Upload */}
              <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', border: '1px dashed #CBD5E1', marginBottom: '1.25rem', textAlign: 'center' }}>
                <Upload size={24} style={{ color: '#D4AF37', margin: '0 auto 4px' }} />
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0B192C' }}>
                  {uploadedDoc ? '✓ Passport & Photo Attached' : 'Attach Passport Data Page (PDF / JPG)'}
                </div>
                <button type="button" onClick={() => setUploadedDoc(true)} className="btn btn-outline-navy btn-sm" style={{ marginTop: '6px' }}>
                  {uploadedDoc ? 'Change Document' : 'Upload File'}
                </button>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button type="button" onClick={() => setSelectedCountry(null)} className="btn btn-outline-navy" style={{ flex: 1 }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-gold" style={{ flex: 1 }}>
                  Submit & Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
