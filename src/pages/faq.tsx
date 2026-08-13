import React, { useState } from 'react';
import Head from 'next/head';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is included in Manaar Travels Hajj & Umrah Packages?',
      a: 'Our packages typically include 5-star hotel accommodations in Makkah & Madinah (close to Haram), international flight tickets, Saudi Arabia pilgrimage e-visas, Haramain High-Speed Bullet Train transfers, guided Ziyarat tours, Mina/Arafat VIP tents, and dedicated Islamic Scholars.'
    },
    {
      q: 'How long does visa processing take for UAE Dubai & Saudi Arabia?',
      a: 'Saudi Arabia E-Visas are processed within 24 to 48 hours. UAE Dubai tourist visas take 2 to 4 working days. UK, USA, and Schengen visa applications require appointment scheduling and embassy processing (15-20 working days).'
    },
    {
      q: 'Can I customize my Umrah package dates and room type?',
      a: 'Yes! We provide custom Umrah package planning. You can specify your preferred departure dates, number of pilgrims, hotel proximity to Haram, room configuration (Double, Triple, Quad), and flight preference.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept secure online debit card payments via Paystack, Flutterwave, and Korapay, as well as direct Bank Account Transfer to our official corporate account.'
    },
    {
      q: 'Where is Manaar Travels & Tours Limited located?',
      a: 'Our main office is located at Maktab-Manaar Avenue, Igbe, Ikorodu, Lagos State, Nigeria. You can also reach us 24/7 on WhatsApp: 0903 367 5852.'
    }
  ];

  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Travel Agent Demo</title>
      </Head>

      <div style={{ background: 'var(--navy-main)', color: '#FFF', padding: '3.5rem 0 2.5rem', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Help Center</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Frequently Asked Questions</h1>
          <p style={{ color: '#94A3B8' }}>Answers to your questions about Hajj, Umrah, Flights, Hotels, and Visas.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '3.5rem 1.25rem', maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="card" style={{ padding: '1.25rem' }}>
              <div
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  color: '#0B192C'
                }}
              >
                <span>{faq.q}</span>
                {openIdx === i ? <ChevronUp size={20} style={{ color: '#D4AF37' }} /> : <ChevronDown size={20} />}
              </div>

              {openIdx === i && (
                <div style={{ marginTop: '0.75rem', fontSize: '0.92rem', color: '#475569', lineHeight: '1.6', borderTop: '1px solid #F1F5F9', paddingTop: '0.75rem' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
