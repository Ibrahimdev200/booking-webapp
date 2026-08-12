import React from 'react';
import Head from 'next/head';
import { ShieldCheck, Heart, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Manaar Travels & Tours Limited</title>
      </Head>

      <section style={{ background: 'var(--navy-main)', color: '#FFF', padding: '4rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>About Our Agency</span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800 }}>Manaar Travels & Tours Limited</h1>
          <p style={{ color: '#E2E8F0', maxWidth: '650px', margin: '0.5rem auto 0', fontSize: '1.1rem' }}>
            "Your Journey, Our Pride. Your Peace, Our Promise."
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 1.25rem' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', color: '#0B192C', fontWeight: 800, marginBottom: '1rem' }}>Who We Are</h2>
          <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            Manaar Travels & Tours Limited is a premier Nigerian full-service travel agency and pilgrimage management company located at Maktab-Manaar Avenue, Igbe, Ikorodu, Lagos State. We specialize in Hajj and Umrah pilgrimage operations, international flight ticketing, luxury hotel reservations, visa application assistance, and curated holiday tour packages.
          </p>

          <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '3rem' }}>
            Founded on the core principles of integrity, transparency, and Islamic hospitality, Manaar Travels bridge the gap between luxury, spiritual fulfillment, and seamless travel logistics for thousands of Nigerian pilgrims and global travelers annually.
          </p>

          <div className="grid-2" style={{ marginBottom: '3rem' }}>
            <div className="card" style={{ padding: '1.75rem', borderLeft: '4px solid #D4AF37' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C', marginBottom: '0.5rem' }}>Our Mission</h3>
              <p style={{ color: '#64748B', lineHeight: '1.6', fontSize: '0.92rem' }}>
                To deliver stress-free, luxurious, and spiritually uplifting travel experiences with transparent pricing, 5-star accommodations, and 24/7 dedicated customer care.
              </p>
            </div>

            <div className="card" style={{ padding: '1.75rem', borderLeft: '4px solid #0B192C' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0B192C', marginBottom: '0.5rem' }}>Our Vision</h3>
              <p style={{ color: '#64748B', lineHeight: '1.6', fontSize: '0.92rem' }}>
                To become West Africa’s most trusted, innovative, and customer-centric travel tech portal for sacred pilgrimages and global leisure travel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
