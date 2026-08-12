import React from 'react';
import { useCurrency } from '../../context/CurrencyContext';
import { Currency } from '../../types';

export const CurrencySelector: React.FC = () => {
  const { currency, setCurrency } = useCurrency();

  const currencies: { code: Currency; label: string; flag: string }[] = [
    { code: 'NGN', label: 'NGN (₦)', flag: '🇳🇬' },
    { code: 'USD', label: 'USD ($)', flag: '🇺🇸' },
    { code: 'GBP', label: 'GBP (£)', flag: '🇬🇧' },
    { code: 'EUR', label: 'EUR (€)', flag: '🇪🇺' },
    { code: 'SAR', label: 'SAR (﷼)', flag: '🇸🇦' },
    { code: 'AED', label: 'AED (🇦🇪)', flag: '🇦🇪' }
  ];

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value as Currency)}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        color: '#FFFFFF',
        border: '1px solid rgba(212, 175, 55, 0.4)',
        padding: '0.35rem 0.65rem',
        borderRadius: '8px',
        fontSize: '0.85rem',
        fontWeight: 600,
        cursor: 'pointer',
        outline: 'none'
      }}
    >
      {currencies.map(c => (
        <option key={c.code} value={c.code} style={{ background: '#0B192C', color: '#FFF' }}>
          {c.flag} {c.label}
        </option>
      ))}
    </select>
  );
};
