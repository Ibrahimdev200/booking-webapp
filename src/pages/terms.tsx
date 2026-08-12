import React from 'react';
import Head from 'next/head';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Manaar Travels & Tours</title>
      </Head>
      <div className="container" style={{ padding: '4rem 1.25rem', maxWidth: '850px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0B192C', marginBottom: '1.5rem' }}>Terms & Conditions</h1>
        <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1rem' }}>
          Welcome to Manaar Travels & Tours Limited. By using our website, booking services, or submitting visa applications, you agree to comply with and be bound by the following terms and conditions.
        </p>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C', marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Booking & Payments</h3>
        <p style={{ color: '#475569', lineHeight: '1.7' }}>
          All flight, hotel, Hajj, Umrah, and tour bookings are subject to availability and supplier confirmation. Prices listed are accurate at the time of publication but may fluctuate due to exchange rates or airline fare revisions.
        </p>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C', marginTop: '1.5rem', marginBottom: '0.5rem' }}>2. Visa Assistance Disclaimer</h3>
        <p style={{ color: '#475569', lineHeight: '1.7' }}>
          Manaar Travels assists applicants with visa document preparation, e-visa submission, and guidance. However, visa approval is strictly subject to the decision of the relevant embassy, consulate, or government immigration authority.
        </p>
      </div>
    </>
  );
}
