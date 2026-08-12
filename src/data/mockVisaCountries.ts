import { VisaCountry } from '../types';

export const MOCK_VISA_COUNTRIES: VisaCountry[] = [
  {
    id: 'visa-uae',
    country: 'United Arab Emirates (UAE / Dubai)',
    flagCode: '🇦🇪',
    visaType: '30-Day / 60-Day Tourist Visa & Express E-Visa',
    processingTime: '2 - 4 Working Days',
    validity: '60 Days from issue',
    serviceFee: 145000,
    embassyFeeEstimate: 220000,
    currency: 'NGN',
    requirements: [
      'Passport Data Page (min 6 months validity)',
      'Passport-size photo with white background',
      'Confirmed Flight Itinerary',
      'Proof of Hotel Reservation'
    ],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    popular: true
  },
  {
    id: 'visa-saudi',
    country: 'Saudi Arabia (Tourist & Umrah E-Visa)',
    flagCode: '🇸🇦',
    visaType: '1-Year Multiple Entry E-Visa / Umrah Visa',
    processingTime: '24 - 48 Hours',
    validity: '1 Year (Multiple Entry)',
    serviceFee: 165000,
    embassyFeeEstimate: 280000,
    currency: 'NGN',
    requirements: [
      'Passport Data Page Copy',
      'Digital Passport Photo',
      'Medical Insurance (Included in Saudi E-Visa system)',
      'Yellow Fever Vaccination Card'
    ],
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1000&q=80',
    popular: true
  },
  {
    id: 'visa-uk',
    country: 'United Kingdom (Standard Visitor Visa)',
    flagCode: '🇬🇧',
    visaType: '6-Month / 2-Year Standard Visitor Visa',
    processingTime: '15 - 20 Working Days',
    validity: '6 Months to 2 Years',
    serviceFee: 250000,
    embassyFeeEstimate: 190000,
    currency: 'NGN',
    requirements: [
      'Original Passport & Old Passports',
      '6 Months Bank Statements (Stamped)',
      'Employment Letter / CAC Business Documents',
      'Proof of Ties to Home Country',
      'TB Test Certificate (for stays over 6 months)'
    ],
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80',
    popular: true
  },
  {
    id: 'visa-usa',
    country: 'United States (B1/B2 Visitor Visa)',
    flagCode: '🇺🇸',
    visaType: 'B1/B2 Business & Tourism Visa (10 Years)',
    processingTime: 'Varies based on Interview Appointment Slot',
    validity: '10 Years Multiple Entry',
    serviceFee: 300000,
    embassyFeeEstimate: 295000,
    currency: 'NGN',
    requirements: [
      'Valid Passport',
      'DS-160 Confirmation Page',
      'SEVIS / MRV Payment Receipt',
      'Proof of Funds & Employment',
      'Interview Appointment Confirmation'
    ],
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1000&q=80',
    popular: true
  },
  {
    id: 'visa-schengen',
    country: 'Schengen Area (Europe Tourist Visa)',
    flagCode: '🇪🇺',
    visaType: 'Short-Stay Tourist Visa (90 Days)',
    processingTime: '15 Working Days',
    validity: 'Up to 90 Days',
    serviceFee: 220000,
    embassyFeeEstimate: 140000,
    currency: 'NGN',
    requirements: [
      'Passport Data Page',
      '6 Months Bank Statements',
      'Travel Health Insurance (€30,000 coverage)',
      'Flight & Hotel Reservations',
      'Biometrics Appointment'
    ],
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80',
    popular: true
  },
  {
    id: 'visa-turkey',
    country: 'Turkey (Tourist E-Visa & Sticker Visa)',
    flagCode: '🇹🇷',
    visaType: 'Single / Multiple Entry Tourist Visa',
    processingTime: '3 - 7 Working Days',
    validity: '180 Days',
    serviceFee: 175000,
    embassyFeeEstimate: 180000,
    currency: 'NGN',
    requirements: [
      'Valid Passport',
      'Biometric Passport Photos',
      '6 Months Bank Statement',
      'Travel Insurance'
    ],
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80',
    popular: true
  },
  {
    id: 'visa-qatar',
    country: 'Qatar (Hayya / Tourist Visa)',
    flagCode: '🇶🇦',
    visaType: '30-Day Tourist E-Visa',
    processingTime: '2 - 3 Days',
    validity: '30 Days',
    serviceFee: 120000,
    embassyFeeEstimate: 110000,
    currency: 'NGN',
    requirements: [
      'Passport Data Page',
      'Hotel Booking via Discover Qatar portal',
      'Return Flight Ticket'
    ],
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'visa-egypt',
    country: 'Egypt (Tourist Visa)',
    flagCode: '🇪🇬',
    visaType: 'Single Entry Tourist Visa',
    processingTime: '5 - 7 Working Days',
    validity: '90 Days',
    serviceFee: 130000,
    embassyFeeEstimate: 95000,
    currency: 'NGN',
    requirements: [
      'Passport Copy',
      '2 Passport Photos',
      'Bank Statement',
      'Yellow Fever Card'
    ],
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80'
  }
];
