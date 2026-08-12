import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from './Logo';
import { CurrencySelector } from './CurrencySelector';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { ShoppingBag, User as UserIcon, Menu, X, Shield, PhoneCall } from 'lucide-react';

export const Navbar: React.FC = () => {
  const router = useRouter();
  const { cart } = useCart();
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/flights', label: 'Flights' },
    { href: '/hotels', label: 'Hotels' },
    { href: '/hajj', label: 'Hajj' },
    { href: '/umrah', label: 'Umrah' },
    { href: '/visa', label: 'Visa' },
    { href: '/tours', label: 'Tours' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => router.pathname === path;

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(11, 25, 44, 0.95)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
    }}>
      {/* Top Announcement Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #07111E 0%, #1E3E62 50%, #07111E 100%)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
        padding: '0.35rem 0',
        fontSize: '0.78rem',
        color: '#D4AF37'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <span>📍 Maktab-Manaar Avenue, Igbe, Ikorodu, Lagos State</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <PhoneCall size={12} /> 0906 694 7477
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>✨ Hajj 2026 Registration Open</span>
            <CurrencySelector />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.85rem 1.25rem'
      }}>
        <Link href="/">
          <Logo variant="dark" size="md" />
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="desktop-only">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              fontSize: '0.9rem',
              fontWeight: isActive(link.href) ? 700 : 500,
              color: isActive(link.href) ? '#D4AF37' : '#E2E8F0',
              borderBottom: isActive(link.href) ? '2px solid #D4AF37' : '2px solid transparent',
              paddingBottom: '0.2rem',
              transition: 'all 0.2s ease'
            }}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Universal Cart Button */}
          <Link href="/cart" style={{ position: 'relative', display: 'flex', alignItems: 'center', color: '#D4AF37' }}>
            <div style={{
              background: 'rgba(212, 175, 55, 0.15)',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}>
              <ShoppingBag size={20} />
            </div>
            {cart.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: '#D4AF37',
                color: '#0B192C',
                fontSize: '0.7rem',
                fontWeight: 800,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {cart.length}
              </span>
            )}
          </Link>

          {/* User Account / Auth CTA */}
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Link href={user.role === 'Customer' ? '/dashboard' : '/admin'} className="btn btn-gold btn-sm">
                {user.role !== 'Customer' && <Shield size={14} />}
                <UserIcon size={14} />
                <span>{user.role === 'Customer' ? 'My Dashboard' : 'Admin CRM'}</span>
              </Link>
            </div>
          ) : (
            <Link href="/auth/login" className="btn btn-gold btn-sm">
              Login / Register
            </Link>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#D4AF37',
              cursor: 'pointer',
              display: 'none'
            }}
            className="mobile-menu-btn"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div style={{
          background: '#0B192C',
          borderTop: '1px solid rgba(212, 175, 55, 0.2)',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: isActive(link.href) ? '#D4AF37' : '#FFFFFF',
                fontSize: '1.1rem',
                fontWeight: 600,
                padding: '0.4rem 0'
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Select Currency:</span>
            <CurrencySelector />
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 1024px) {
          .desktop-only { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};
