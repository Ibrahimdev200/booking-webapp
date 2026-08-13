import React from 'react';
import Head from 'next/head';

export default function RefundPage() {
  return (
    <>
      <Head>
        <title>Refund & Cancellation Policy | Travel Agent Demo</title>
      </Head>
      <div className="container" style={{ padding: '4rem 1.25rem', maxWidth: '850px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0B192C', marginBottom: '1.5rem' }}>Refund & Cancellation Policy</h1>
        <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1rem' }}>
          Our refund policy varies depending on the service category booked (Flights, Hotels, Hajj/Umrah, Visas).
        </p>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B192C' }}>Flight & Hotel Cancellations</h3>
        <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1rem' }}>
          Refundability depends on the underlying airline fare class or hotel cancellation window. Non-refundable fares cannot be refunded after ticket issuance.
        </p>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B192C' }}>Visa Service Fees</h3>
        <p style={{ color: '#475569', lineHeight: '1.7' }}>
          Visa application fees paid to immigration authorities or government portals are non-refundable once an application has been submitted to the embassy.
        </p>
      </div>
    </>
  );
}
