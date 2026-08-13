import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showAddress?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showAddress = false }) => {
  const heights = {
    sm: 40,
    md: 54,
    lg: 76
  };

  const logoHeight = heights[size];

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
      <img
        src="/logo.png"
        alt="Travel Agent Demo Logo"
        style={{
          height: `${logoHeight}px`,
          width: 'auto',
          objectFit: 'contain',
          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))'
        }}
      />
      {showAddress && (
        <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '2px' }}>
          Maktab-Manaar Avenue, Igbe, Ikorodu, Lagos State
        </div>
      )}
    </div>
  );
};
