import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0F2C59 0%, #071324 100%)',
      color: '#E2E8F0',
      paddingTop: '4rem',
      paddingBottom: '2rem',
      borderTop: '3px solid #FF6B00'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3.5rem'
        }}>
          {/* Brand & Address Column */}
          <div>
            <Logo variant="dark" size="lg" />
            <p style={{
              fontSize: '0.9rem',
              color: '#94A3B8',
              margin: '1.2rem 0',
              lineHeight: '1.6',
              fontStyle: 'italic'
            }}>
              "Your Journey, Our Pride. Your Peace, Our Promise."
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem', color: '#CBD5E1' }}>
                <MapPin size={18} style={{ color: '#FF6B00', flexShrink: 0 }} />
                <span>Maktab-Manaar Avenue, Igbe, Ikorodu, Lagos State, Nigeria</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', color: '#CBD5E1' }}>
                <Phone size={18} style={{ color: '#FF6B00' }} />
                <span>0903 367 5852</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', color: '#CBD5E1' }}>
                <Mail size={18} style={{ color: '#FF6B00' }} />
                <span>ibrahimdev200@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Travel Services */}
          <div>
            <h4 style={{ color: '#FF6B00', fontSize: '1.1rem', marginBottom: '1.2rem', fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
              Our Travel Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><Link href="/hajj" style={{ color: '#CBD5E1' }}>Hajj Packages 2026</Link></li>
              <li><Link href="/umrah" style={{ color: '#CBD5E1' }}>Umrah Packages & Custom</Link></li>
              <li><Link href="/visa" style={{ color: '#CBD5E1' }}>Visa Application Portal</Link></li>
              <li><Link href="/flights" style={{ color: '#CBD5E1' }}>International Flight Search</Link></li>
              <li><Link href="/hotels" style={{ color: '#CBD5E1' }}>Global Hotel Reservations</Link></li>
              <li><Link href="/tours" style={{ color: '#CBD5E1' }}>Guided Tours & Packages</Link></li>
            </ul>
          </div>

          {/* Quick Links & Legal */}
          <div>
            <h4 style={{ color: '#FF6B00', fontSize: '1.1rem', marginBottom: '1.2rem', fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
              Company & Legal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><Link href="/about" style={{ color: '#CBD5E1' }}>About Manaar Travels</Link></li>
              <li><Link href="/destinations" style={{ color: '#CBD5E1' }}>Popular Destinations</Link></li>
              <li><Link href="/contact" style={{ color: '#CBD5E1' }}>Contact & Location</Link></li>
              <li><Link href="/faq" style={{ color: '#CBD5E1' }}>Frequently Asked Questions</Link></li>
              <li><Link href="/terms" style={{ color: '#CBD5E1' }}>Terms & Conditions</Link></li>
              <li><Link href="/privacy" style={{ color: '#CBD5E1' }}>Privacy Policy</Link></li>
              <li><Link href="/refund" style={{ color: '#CBD5E1' }}>Refund & Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 style={{ color: '#FF6B00', fontSize: '1.1rem', marginBottom: '1.2rem', fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
              Travel Inspiration & Deals
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '1rem' }}>
              Subscribe to get exclusive Hajj/Umrah updates, discount flight alerts, and visa guidelines.
            </p>
            {subscribed ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10B981',
                padding: '0.8rem',
                borderRadius: '8px',
                color: '#10B981',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <CheckCircle2 size={18} /> Subscribed successfully! Thank you.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  style={{
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 107, 0, 0.35)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#FFF',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <button type="submit" className="btn btn-orange btn-sm" style={{ width: '100%' }}>
                  <Send size={14} /> Subscribe Newsletter
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: '#64748B'
        }}>
          <div>
            © {new Date().getFullYear()} Travel Agent Demo Website (Manaar Travels Showcase). All rights reserved. Registered Travel Agency Demonstration.
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://wa.me/2349033675852" target="_blank" rel="noopener noreferrer" style={{ color: '#FF6B00', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
              <MessageSquare size={14} /> WhatsApp Support (0903 367 5852)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
