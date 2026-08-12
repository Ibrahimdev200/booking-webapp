import React, { createContext, useContext, useState } from 'react';
import { Currency } from '../types';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (amountInNGN: number) => string;
  exchangeRates: Record<Currency, number>;
}

// Fixed baseline exchange rates relative to NGN (1 NGN = X foreign currency)
const EXCHANGE_RATES: Record<Currency, number> = {
  NGN: 1,
  USD: 0.00067,  // ~ 1 USD = 1,500 NGN
  GBP: 0.00052,  // ~ 1 GBP = 1,920 NGN
  EUR: 0.00061,  // ~ 1 EUR = 1,640 NGN
  SAR: 0.0025,   // ~ 1 SAR = 400 NGN
  AED: 0.00245   // ~ 1 AED = 408 NGN
};

const SYMBOLS: Record<Currency, string> = {
  NGN: '₦',
  USD: '$',
  GBP: '£',
  EUR: '€',
  SAR: '﷼',
  AED: 'AED '
};

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'NGN',
  setCurrency: () => {},
  formatPrice: (amt) => `₦${amt.toLocaleString()}`,
  exchangeRates: EXCHANGE_RATES
});

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('NGN');

  const formatPrice = (amountInNGN: number): string => {
    const rate = EXCHANGE_RATES[currency] || 1;
    const converted = amountInNGN * rate;
    const symbol = SYMBOLS[currency] || '';

    if (currency === 'NGN') {
      return `${symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, exchangeRates: EXCHANGE_RATES }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
