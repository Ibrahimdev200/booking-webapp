import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showAddress?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 'md', showAddress = false }) => {
  const isDark = variant === 'dark';
  
  const sizes = {
    sm: { icon: 28, title: '1.1rem', sub: '0.65rem' },
    md: { icon: 36, title: '1.4rem', sub: '0.75rem' },
    lg: { icon: 48, title: '1.8rem', sub: '0.85rem' }
  };

  const currentSize = sizes[size];

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
      {/* Emblem SVG Icon */}
      <svg width={currentSize.icon} height={currentSize.icon} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#0B192C" stroke="#D4AF37" strokeWidth="4" />
        {/* Islamic Crescent & Minaret Motif */}
        <path d="M 50,15 A 35,35 0 1,0 85,50 A 28,28 0 1,1 50,15 Z" fill="url(#goldGrad)" />
        {/* Flying Airplane */}
        <path d="M 45 42 L 72 26 L 68 45 L 82 52 L 78 57 L 62 51 L 52 64 L 46 62 L 48 50 L 36 44 L 38 39 Z" fill="#D4AF37" />
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5D061" />
            <stop offset="0.5" stopColor="#E5C158" />
            <stop offset="1" stopColor="#B8860B" />
          </linearGradient>
        </defs>
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 800,
          fontSize: currentSize.title,
          lineHeight: 1.1,
          letterSpacing: '0.5px',
          color: isDark ? '#FFFFFF' : '#0B192C'
        }}>
          MANAAR <span style={{ color: '#D4AF37' }}>TRAVELS</span>
        </div>
        <div style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          fontSize: currentSize.sub,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: isDark ? '#E2E8F0' : '#64748B'
        }}>
          & Tours Limited
        </div>
        {showAddress && (
          <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '2px' }}>
            Igbe, Ikorodu, Lagos State
          </div>
        )}
      </div>
    </div>
  );
};
