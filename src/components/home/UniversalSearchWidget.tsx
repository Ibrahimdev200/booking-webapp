import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Building2, Plane, Compass, FileText, MapPin, Calendar, Users, ShieldCheck, Search } from 'lucide-react';
import { ServiceType } from '../../types';

export const UniversalSearchWidget: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ServiceType>('hotels');

  // Form states
  const [hotelDestination, setHotelDestination] = useState('Dubai');
  const [hotelCheckIn, setHotelCheckIn] = useState('2026-09-01');
  const [hotelCheckOut, setHotelCheckOut] = useState('2026-09-07');
  const [hotelGuests, setHotelGuests] = useState('2 Adults');

  const [flightTripType, setFlightTripType] = useState<'round' | 'oneway' | 'multicity'>('round');
  const [flightFrom, setFlightFrom] = useState('LOS - Lagos');
  const [flightTo, setFlightTo] = useState('JED - Jeddah');
  const [flightDeparture, setFlightDeparture] = useState('2026-09-10');
  const [flightCabin, setFlightCabin] = useState('Economy');

  const [hajjPackage, setHajjPackage] = useState('VIP Royal Hajj Package 2026');
  const [hajjPilgrims, setHajjPilgrims] = useState('2 Pilgrims');

  const [umrahPackage, setUmrahPackage] = useState('5-Star Executive Umrah');
  const [visaCountry, setVisaCountry] = useState('United Arab Emirates (UAE)');
  const [tourDestination, setTourDestination] = useState('Dubai');

  const handleSearchHotels = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/hotels?city=${encodeURIComponent(hotelDestination)}`);
  };

  const handleSearchFlights = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/flights?from=${encodeURIComponent(flightFrom)}&to=${encodeURIComponent(flightTo)}`);
  };

  const handleHajjInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/hajj?pkg=${encodeURIComponent(hajjPackage)}`);
  };

  const handleUmrahInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/umrah?pkg=${encodeURIComponent(umrahPackage)}`);
  };

  const handleVisaApply = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/visa?country=${encodeURIComponent(visaCountry)}`);
  };

  const handleSearchTours = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/tours?destination=${encodeURIComponent(tourDestination)}`);
  };

  return (
    <div className="glass-card-dark" style={{ padding: '1.5rem', width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Search Widget Tabs */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        borderBottom: '1px solid rgba(255, 107, 0, 0.3)',
        paddingBottom: '0.75rem',
        overflowX: 'auto',
        marginBottom: '1.5rem'
      }}>
        <button
          onClick={() => setActiveTab('hotels')}
          style={{
            background: activeTab === 'hotels' ? '#FF6B00' : 'rgba(255,255,255,0.08)',
            color: '#FFFFFF',
            border: 'none',
            padding: '0.6rem 1.2rem',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
            boxShadow: activeTab === 'hotels' ? '0 4px 14px rgba(255,107,0,0.4)' : 'none'
          }}
        >
          <Building2 size={18} /> Hotels
        </button>

        <button
          onClick={() => setActiveTab('flights')}
          style={{
            background: activeTab === 'flights' ? '#FF6B00' : 'rgba(255,255,255,0.08)',
            color: '#FFFFFF',
            border: 'none',
            padding: '0.6rem 1.2rem',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
            boxShadow: activeTab === 'flights' ? '0 4px 14px rgba(255,107,0,0.4)' : 'none'
          }}
        >
          <Plane size={18} /> Flights
        </button>

        <button
          onClick={() => setActiveTab('hajj')}
          style={{
            background: activeTab === 'hajj' ? '#FF6B00' : 'rgba(255,255,255,0.08)',
            color: '#FFFFFF',
            border: 'none',
            padding: '0.6rem 1.2rem',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
            boxShadow: activeTab === 'hajj' ? '0 4px 14px rgba(255,107,0,0.4)' : 'none'
          }}
        >
          <ShieldCheck size={18} /> Hajj 2026
        </button>

        <button
          onClick={() => setActiveTab('umrah')}
          style={{
            background: activeTab === 'umrah' ? '#FF6B00' : 'rgba(255,255,255,0.08)',
            color: '#FFFFFF',
            border: 'none',
            padding: '0.6rem 1.2rem',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
            boxShadow: activeTab === 'umrah' ? '0 4px 14px rgba(255,107,0,0.4)' : 'none'
          }}
        >
          ✨ Umrah
        </button>

        <button
          onClick={() => setActiveTab('visa')}
          style={{
            background: activeTab === 'visa' ? '#FF6B00' : 'rgba(255,255,255,0.08)',
            color: '#FFFFFF',
            border: 'none',
            padding: '0.6rem 1.2rem',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
            boxShadow: activeTab === 'visa' ? '0 4px 14px rgba(255,107,0,0.4)' : 'none'
          }}
        >
          <FileText size={18} /> Visa Portal
        </button>

        <button
          onClick={() => setActiveTab('tours')}
          style={{
            background: activeTab === 'tours' ? '#FF6B00' : 'rgba(255,255,255,0.08)',
            color: '#FFFFFF',
            border: 'none',
            padding: '0.6rem 1.2rem',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
            boxShadow: activeTab === 'tours' ? '0 4px 14px rgba(255,107,0,0.4)' : 'none'
          }}
        >
          <Compass size={18} /> Tours
        </button>
      </div>

      {/* Tab Panels */}
      {/* 1. HOTELS SEARCH */}
      {activeTab === 'hotels' && (
        <form onSubmit={handleSearchHotels} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'end' }}>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.3rem' }}>
              <MapPin size={14} /> Destination / City
            </label>
            <select
              value={hotelDestination}
              onChange={(e) => setHotelDestination(e.target.value)}
              className="form-select"
              style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }}
            >
              <option value="Dubai">Dubai, UAE</option>
              <option value="Makkah">Makkah, Saudi Arabia</option>
              <option value="Madinah">Madinah, Saudi Arabia</option>
              <option value="Istanbul">Istanbul, Turkey</option>
              <option value="Lagos">Lagos, Nigeria</option>
              <option value="London">London, UK</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.3rem' }}>
              <Calendar size={14} /> Check-in
            </label>
            <input
              type="date"
              value={hotelCheckIn}
              onChange={(e) => setHotelCheckIn(e.target.value)}
              className="form-input"
              style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.3rem' }}>
              <Calendar size={14} /> Check-out
            </label>
            <input
              type="date"
              value={hotelCheckOut}
              onChange={(e) => setHotelCheckOut(e.target.value)}
              className="form-input"
              style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.3rem' }}>
              <Users size={14} /> Guests & Rooms
            </label>
            <select
              value={hotelGuests}
              onChange={(e) => setHotelGuests(e.target.value)}
              className="form-select"
              style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }}
            >
              <option value="1 Adult">1 Adult, 1 Room</option>
              <option value="2 Adults">2 Adults, 1 Room</option>
              <option value="Family">Family (2 Adults, 2 Children)</option>
              <option value="Group">Group (4+ Guests)</option>
            </select>
          </div>

          <button type="submit" className="btn btn-gold btn-lg" style={{ height: '48px' }}>
            <Search size={18} /> Search Hotels
          </button>
        </form>
      )}

      {/* 2. FLIGHTS SEARCH */}
      {activeTab === 'flights' && (
        <form onSubmit={handleSearchFlights} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#FFF' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}>
              <input type="radio" name="trip" checked={flightTripType === 'round'} onChange={() => setFlightTripType('round')} /> Round Trip
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}>
              <input type="radio" name="trip" checked={flightTripType === 'oneway'} onChange={() => setFlightTripType('oneway')} /> One Way
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}>
              <input type="radio" name="trip" checked={flightTripType === 'multicity'} onChange={() => setFlightTripType('multicity')} /> Multi-City
            </label>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', alignItems: 'end' }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>From (Origin)</label>
              <select value={flightFrom} onChange={(e) => setFlightFrom(e.target.value)} className="form-select" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }}>
                <option value="LOS - Lagos">Lagos (LOS)</option>
                <option value="ABV - Abuja">Abuja (ABV)</option>
                <option value="KAN - Kano">Kano (KAN)</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>To (Destination)</label>
              <select value={flightTo} onChange={(e) => setFlightTo(e.target.value)} className="form-select" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }}>
                <option value="JED - Jeddah">Jeddah (JED - Saudi Arabia)</option>
                <option value="MED - Madinah">Madinah (MED - Saudi Arabia)</option>
                <option value="DXB - Dubai">Dubai (DXB - UAE)</option>
                <option value="IST - Istanbul">Istanbul (IST - Turkey)</option>
                <option value="LHR - London">London (LHR - UK)</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>Departure Date</label>
              <input type="date" value={flightDeparture} onChange={(e) => setFlightDeparture(e.target.value)} className="form-input" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }} />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>Cabin Class</label>
              <select value={flightCabin} onChange={(e) => setFlightCabin(e.target.value)} className="form-select" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }}>
                <option value="Economy">Economy</option>
                <option value="Premium Economy">Premium Economy</option>
                <option value="Business">Business Class</option>
                <option value="First Class">First Class</option>
              </select>
            </div>

            <button type="submit" className="btn btn-gold btn-lg" style={{ height: '48px' }}>
              <Search size={18} /> Search Flights
            </button>
          </div>
        </form>
      )}

      {/* 3. HAJJ INQUIRY */}
      {activeTab === 'hajj' && (
        <form onSubmit={handleHajjInquiry} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'end' }}>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>Hajj Package Tier</label>
            <select value={hajjPackage} onChange={(e) => setHajjPackage(e.target.value)} className="form-select" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }}>
              <option value="VIP Royal Hajj Package 2026">VIP Royal Hajj Package 2026 (21 Days)</option>
              <option value="Deluxe Comfort Hajj Package 2026">Deluxe Comfort Hajj Package 2026 (18 Days)</option>
              <option value="Economy Standard Hajj Package 2026">Economy Standard Hajj Package 2026 (15 Days)</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>Number of Pilgrims</label>
            <select value={hajjPilgrims} onChange={(e) => setHajjPilgrims(e.target.value)} className="form-select" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }}>
              <option value="1 Pilgrim">1 Pilgrim</option>
              <option value="2 Pilgrims">2 Pilgrims (Couple)</option>
              <option value="Family Group">Family / Group (4+)</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>Departure Location</label>
            <input type="text" defaultValue="Lagos (Murtala Muhammed Intl)" className="form-input" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }} />
          </div>
          <button type="submit" className="btn btn-gold btn-lg" style={{ height: '48px' }}>
            Book Hajj Package
          </button>
        </form>
      )}

      {/* 4. UMRAH INQUIRY */}
      {activeTab === 'umrah' && (
        <form onSubmit={handleUmrahInquiry} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'end' }}>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>Umrah Package Type</label>
            <select value={umrahPackage} onChange={(e) => setUmrahPackage(e.target.value)} className="form-select" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }}>
              <option value="Ramadan Last 10 Days VIP">Ramadan 1447 Last 10 Days VIP</option>
              <option value="5-Star Executive Umrah">5-Star Premium Executive Umrah</option>
              <option value="Family Special Umrah">Family Special Umrah Package</option>
              <option value="Economy Value Umrah">Economy Value Umrah Package</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>Travel Month</label>
            <input type="month" defaultValue="2026-09" className="form-input" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }} />
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>Room Preference</label>
            <select className="form-select" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }}>
              <option>Double Room (2 Persons)</option>
              <option>Triple Room (3 Persons)</option>
              <option>Quad Room (4 Persons)</option>
            </select>
          </div>
          <button type="submit" className="btn btn-gold btn-lg" style={{ height: '48px' }}>
            Book Umrah Package
          </button>
        </form>
      )}

      {/* 5. VISA PORTAL */}
      {activeTab === 'visa' && (
        <form onSubmit={handleVisaApply} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'end' }}>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>Destination Country</label>
            <select value={visaCountry} onChange={(e) => setVisaCountry(e.target.value)} className="form-select" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }}>
              <option value="United Arab Emirates (UAE)">UAE (Dubai Tourist E-Visa)</option>
              <option value="Saudi Arabia">Saudi Arabia (Tourist / Umrah E-Visa)</option>
              <option value="United Kingdom">United Kingdom (UK Visitor Visa)</option>
              <option value="United States">United States (USA B1/B2 Visa)</option>
              <option value="Schengen Area">Schengen Europe Tourist Visa</option>
              <option value="Turkey">Turkey (Tourist E-Visa)</option>
              <option value="Qatar">Qatar E-Visa</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>Applicant Nationality</label>
            <input type="text" defaultValue="Nigerian" className="form-input" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }} />
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>Intended Travel Date</label>
            <input type="date" defaultValue="2026-10-01" className="form-input" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }} />
          </div>
          <button type="submit" className="btn btn-gold btn-lg" style={{ height: '48px' }}>
            Start Visa Application
          </button>
        </form>
      )}

      {/* 6. TOURS SEARCH */}
      {activeTab === 'tours' && (
        <form onSubmit={handleSearchTours} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'end' }}>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>Tour Destination</label>
            <select value={tourDestination} onChange={(e) => setTourDestination(e.target.value)} className="form-select" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }}>
              <option value="Dubai">Dubai Luxury City & Safari</option>
              <option value="Istanbul">Istanbul Ottoman Heritage</option>
              <option value="Makkah & Madinah">Makkah & Madinah Sacred Ziyarat</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>Travel Date</label>
            <input type="date" defaultValue="2026-09-15" className="form-input" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }} />
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>Group Type</label>
            <select className="form-select" style={{ background: '#07111E', color: '#FFF', borderColor: 'rgba(212, 175, 55, 0.4)' }}>
              <option>Group Tour</option>
              <option>Private Custom Tour</option>
            </select>
          </div>
          <button type="submit" className="btn btn-gold btn-lg" style={{ height: '48px' }}>
            <Search size={18} /> Search Tours
          </button>
        </form>
      )}
    </div>
  );
};
