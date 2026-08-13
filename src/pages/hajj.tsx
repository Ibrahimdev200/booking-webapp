import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MOCK_HAJJ_PACKAGES } from '../data/mockHajjPackages';
import { useCurrency } from '../context/CurrencyContext';
import { useCart } from '../context/CartContext';
import { ShieldCheck, CheckCircle2, Upload, Calendar, User, FileText, Heart, PhoneCall } from 'lucide-react';
import { HajjPackage } from '../types';

export default function HajjPage() {
  const router = useRouter();
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();

  const [selectedPkg, setSelectedPkg] = useState<HajjPackage | null>(null);

  // Pilgrim Registration Form State
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('Male');
  const [nationality, setNationality] = useState('Nigerian');
  const [passportNum, setPassportNum] = useState('');
  const [passportExpiry, setPassportExpiry] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [nextOfKin, setNextOfKin] = useState('');
  const [medicalNotes, setMedicalNotes] = useState('');
  const [roomPref, setRoomPref] = useState('Double Room (2 Persons)');
  const [passportUploaded, setPassportUploaded] = useState(false);

  const handleRegisterPilgrim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPkg) return;

    addToCart({
      serviceType: 'hajj',
      title: selectedPkg.name,
      subtitle: `Pilgrim Registration (${selectedPkg.durationDays} Days Hajj 1447 / 2026)`,
      details: {
        packageId: selectedPkg.id,
        fullName,
        dob,
        gender,
        nationality,
        passportNum,
        passportExpiry,
        phone,
        email,
        emergencyContact,
        nextOfKin,
        medicalNotes,
        roomPref
      },
      price: selectedPkg.price,
      currency: 'NGN',
      image: selectedPkg.image
    });

    router.push('/cart');
  };

  return (
    <>
      <Head>
        <title>Hajj 2026 Pilgrimage Packages | Travel Agent Demo</title>
      </Head>

      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(180deg, rgba(7, 17, 30, 0.82) 0%, rgba(11, 25, 44, 0.95) 100%), url('https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#FFF',
        padding: '5rem 0 4rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="badge badge-gold" style={{ padding: '0.4rem 1rem', marginBottom: '1rem' }}>
            ✦ Official Hajj 1447 / 2026 Registration
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, color: '#FFF' }}>
            Your Sacred Journey Begins With the Right Partner
          </h1>
          <p style={{ color: '#E2E8F0', maxWidth: '720px', margin: '0.75rem auto 0', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Manaar Travels & Tours Limited ensures spiritual tranquility, 5-star Haram proximity hotels, VIP Mina tents, Saudia flights, and dedicated Islamic Scholars.
          </p>
        </div>
      </section>

      {/* Hajj Packages List */}
      <div className="container" style={{ padding: '4rem 1.25rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#0B192C', fontWeight: 800 }}>Select Your Hajj 2026 Package</h2>
          <p style={{ color: '#64748B' }}>Choose your preferred tier or register below for pilgrim document verification.</p>
        </div>

        <div className="grid-3" style={{ marginBottom: '4rem' }}>
          {MOCK_HAJJ_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '5px solid #FF6B00' }}>
              <div>
                <div style={{ position: 'relative', height: '180px' }}>
                  <img src={pkg.image} alt={pkg.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span className="badge badge-navy" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    {pkg.durationDays} Days Duration
                  </span>
                </div>

                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C', marginBottom: '0.5rem' }}>{pkg.name}</h3>
                  
                  <div style={{ fontSize: '0.85rem', color: '#475569', margin: '0.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <div><strong>Makkah:</strong> {pkg.makkahHotel} ({'★'.repeat(pkg.makkahStarRating)})</div>
                    <div><strong>Madinah:</strong> {pkg.madinahHotel} ({'★'.repeat(pkg.madinahStarRating)})</div>
                    <div><strong>Travel:</strong> {pkg.departureDate} ➔ {pkg.returnDate}</div>
                  </div>

                  <ul style={{ listStyle: 'none', margin: '1rem 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', color: '#334155' }}>
                    {pkg.includedServices.map((inc, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <CheckCircle2 size={14} style={{ color: '#D4AF37', flexShrink: 0 }} /> {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ padding: '1.25rem', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Total Package Price</span>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C' }}>{formatPrice(pkg.price)}</div>
                </div>

                <button onClick={() => setSelectedPkg(pkg)} className="btn btn-gold btn-sm">
                  Register Pilgrim
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pilgrim Registration Modal Form */}
      {selectedPkg && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div className="card" style={{ maxWidth: '700px', width: '100%', padding: '2rem', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '2px solid #D4AF37', paddingBottom: '0.75rem' }}>
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C' }}>Pilgrim Registration Form</h2>
                <span className="badge badge-gold">{selectedPkg.name} ({formatPrice(selectedPkg.price)})</span>
              </div>
              <button onClick={() => setSelectedPkg(null)} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', fontWeight: 700 }}>✕</button>
            </div>

            <form onSubmit={handleRegisterPilgrim}>
              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Full Name (As on Passport)</label>
                  <input type="text" required placeholder="Alhaji Ibrahim Bello" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Date of Birth</label>
                  <input type="date" required value={dob} onChange={(e) => setDob(e.target.value)} className="form-input" />
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Gender</label>
                  <select value={gender} onChange={(e) => setGender(e.target.value)} className="form-select">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Nationality</label>
                  <input type="text" required value={nationality} onChange={(e) => setNationality(e.target.value)} className="form-input" />
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

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp Number</label>
                  <input type="tel" required placeholder="0903 367 5852" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" required placeholder="ibrahim@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Residential Address</label>
                <input type="text" required placeholder="Maktab Avenue, Victoria Island, Lagos" value={address} onChange={(e) => setAddress(e.target.value)} className="form-input" />
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Emergency Contact Name & Phone</label>
                  <input type="text" required placeholder="Hajiya Maryam (0802 345 6789)" value={emergencyContact} onChange={(e) => setEmergencyContact(e.target.value)} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Next of Kin Name & Relationship</label>
                  <input type="text" required placeholder="Mustapha Bello (Son)" value={nextOfKin} onChange={(e) => setNextOfKin(e.target.value)} className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Medical Notes / Dietary Requirements (Optional)</label>
                <textarea rows={2} placeholder="Wheelchair assistance required during Tawaf..." value={medicalNotes} onChange={(e) => setMedicalNotes(e.target.value)} className="form-textarea" />
              </div>

              {/* Document Upload Simulation */}
              <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', border: '1px dashed #CBD5E1', marginBottom: '1.5rem', textAlign: 'center' }}>
                <Upload size={24} style={{ color: '#D4AF37', margin: '0 auto 6px' }} />
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0B192C' }}>
                  {passportUploaded ? '✓ Passport Data Page Uploaded Successfully' : 'Upload Passport Data Page Copy (PDF / JPG)'}
                </div>
                <button
                  type="button"
                  onClick={() => setPassportUploaded(true)}
                  className="btn btn-outline-navy btn-sm"
                  style={{ marginTop: '8px' }}
                >
                  {passportUploaded ? 'Change Document' : 'Choose File'}
                </button>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="button" onClick={() => setSelectedPkg(null)} className="btn btn-outline-navy" style={{ flex: 1 }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-gold" style={{ flex: 1 }}>
                  Submit & Proceed to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
