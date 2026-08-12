import React, { useState } from 'react';
import Head from 'next/head';
import { MapPin, Phone, Mail, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Manaar Travels & Tours Limited</title>
      </Head>

      <div style={{ background: 'var(--navy-main)', color: '#FFF', padding: '3.5rem 0 2.5rem', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>We Are Here To Help</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Contact Manaar Travels & Tours</h1>
          <p style={{ color: '#94A3B8' }}>Visit our office, chat on WhatsApp, or send an inquiry message.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '3.5rem 1.25rem' }}>
        <div className="grid-2" style={{ gap: '3rem' }}>
          {/* Contact Details & Info */}
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0B192C', marginBottom: '1.5rem' }}>Get In Touch With Us</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(212,175,55,0.15)', color: '#B8860B', padding: '0.8rem', borderRadius: '12px', border: '1px solid #D4AF37' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B192C' }}>Headquarters Address</h3>
                  <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '2px' }}>
                    Maktab-Manaar Avenue, Igbe, Ikorodu, Lagos State, Nigeria
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(212,175,55,0.15)', color: '#B8860B', padding: '0.8rem', borderRadius: '12px', border: '1px solid #D4AF37' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B192C' }}>Phone / WhatsApp</h3>
                  <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '2px' }}>
                    0906 694 7477 (Call & 24/7 WhatsApp Support)
                  </p>
                  <a href="https://wa.me/2349066947477" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-sm" style={{ marginTop: '8px' }}>
                    <MessageSquare size={14} /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(212,175,55,0.15)', color: '#B8860B', padding: '0.8rem', borderRadius: '12px', border: '1px solid #D4AF37' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B192C' }}>Official Email</h3>
                  <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '2px' }}>
                    manaarttravelsng@gmail.com
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(212,175,55,0.15)', color: '#B8860B', padding: '0.8rem', borderRadius: '12px', border: '1px solid #D4AF37' }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B192C' }}>Office Opening Hours</h3>
                  <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '2px' }}>
                    Monday – Friday: 8:30 AM – 6:00 PM<br />
                    Saturday: 9:00 AM – 4:00 PM<br />
                    Sunday & Public Holidays: Online & WhatsApp Support Only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0B192C', marginBottom: '1rem' }}>Send Us a Message</h3>

            {submitted ? (
              <div style={{ background: '#E6F4EA', color: '#137333', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <CheckCircle2 size={36} style={{ margin: '0 auto 8px', color: '#10B981' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Message Sent Successfully!</h4>
                <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>
                  Thank you for reaching out to Manaar Travels. Our team will contact you within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input type="text" required placeholder="e.g. Alhaji Ibrahim Bello" className="form-input" />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" required placeholder="name@example.com" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" required placeholder="0906 694 7477" className="form-input" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Service Category</label>
                  <select className="form-select">
                    <option>Hajj 2026 Inquiry</option>
                    <option>Umrah Package Inquiry</option>
                    <option>Visa Application</option>
                    <option>Flight Booking</option>
                    <option>Hotel Reservation</option>
                    <option>Custom Tour Package</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Inquiry Details</label>
                  <textarea rows={4} required placeholder="Tell us how we can assist your travel..." className="form-textarea" />
                </div>

                <button type="submit" className="btn btn-gold btn-lg" style={{ width: '100%' }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
