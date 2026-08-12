import React from 'react';
import Head from 'next/head';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Manaar Travels & Tours</title>
      </Head>
      <div className="container" style={{ padding: '4rem 1.25rem', maxWidth: '850px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0B192C', marginBottom: '1.5rem' }}>Privacy Policy</h1>
        <p style={{ color: '#475569', lineHeight: '1.7' }}>
          Manaar Travels & Tours Limited respects your privacy and is committed to protecting your personal data, including passport information, contact details, and payment records.
        </p>
      </div>
    </>
  );
}
