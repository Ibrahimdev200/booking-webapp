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
      background: 'rgba(7, 19, 36, 0.95)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 107, 0, 0.25)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
    }}>
      {/* Top Announcement Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #071324 0%, #0F2C59 50%, #071324 100%)',
        borderBottom: '1px solid rgba(255, 107, 0, 0.2)',
        padding: '0.4rem 0',
        fontSize: '0.78rem',
        color: '#FF6B00'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', color: '#E2E8F0' }}>
            <span>📍 Maktab-Manaar Avenue, Igbe, Ikorodu, Lagos State</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#FF6B00', fontWeight: 600 }}>
              <PhoneCall size={12} /> 0903 367 5852
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#FF6B00', fontWeight: 700 }}>🚀 TRAVEL AGENT DEMO WEBSITE • Flights, Hotels, Visas, Hajj & Umrah Showcase</span>
            <CurrencySelector />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1.25rem'
      }}>
        <Link href="/">
          <Logo variant="dark" size="md" />
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="desktop-only">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              fontSize: '0.9rem',
              fontWeight: isActive(link.href) ? 800 : 600,
              color: isActive(link.href) ? '#FF6B00' : '#E2E8F0',
              borderBottom: isActive(link.href) ? '2px solid #FF6B00' : '2px solid transparent',
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
          <Link href="/cart" style={{ position: 'relative', display: 'flex', alignItems: 'center', color: '#FF6B00' }}>
            <div style={{
              background: 'rgba(255, 107, 0, 0.15)',
              padding: '0.55rem',
              borderRadius: '50%',
              display: 'flex',
              border: '1px solid rgba(255, 107, 0, 0.35)'
            }}>
              <ShoppingBag size={20} />
            </div>
            {cart.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: '#FF6B00',
                color: '#FFFFFF',
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
              <Link href={user.role === 'Customer' ? '/dashboard' : '/admin'} className="btn btn-orange btn-sm">
                {user.role !== 'Customer' && <Shield size={14} />}
                <UserIcon size={14} />
                <span>{user.role === 'Customer' ? 'My Dashboard' : 'Admin CRM'}</span>
              </Link>
            </div>
          ) : (
            <Link href="/auth/login" className="btn btn-orange btn-sm">
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
