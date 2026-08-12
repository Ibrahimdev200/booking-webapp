import { HajjPackage } from '../types';

export const MOCK_HAJJ_PACKAGES: HajjPackage[] = [
  {
    id: 'hajj-vip-2026',
    name: 'VIP Royal Hajj Package 2026',
    durationDays: 21,
    makkahHotel: 'Clock Tower Hotel (Abraj Al Bait)',
    makkahStarRating: 5,
    madinahHotel: 'Dar Al Taqwa InterContinental',
    madinahStarRating: 5,
    departureDate: '2026-05-18',
    returnDate: '2026-06-08',
    price: 11500000,
    currency: 'NGN',
    spacesTotal: 40,
    spacesRemaining: 8,
    flightsIncluded: true,
    visaAssistance: true,
    mealsIncluded: true,
    transportationIncluded: true,
    guidedTours: true,
    includedServices: [
      'Direct Saudia / Emirates Flight Tickets',
      '5-Star Luxury Hotels directly facing Haram in Makkah & Madinah',
      'VIP Air-conditioned Luxury Tents in Mina & Arafat (Zone 1 VIP)',
      'Full Board Open Buffet (Breakfast, Lunch, Dinner)',
      'Dedicated Islamic Scholar & Group Medical Officer',
      'VIP High-speed Haramain Bullet Train Transfers',
      'All Visa processing & Saudi Hajj Portal registration',
      'Complimentary Zamzam 5L Bottle & Hajj Kit Bag'
    ],
    excludedServices: [
      'Personal sacrificial animal (Qurbani) unless requested',
      'Personal shopping & individual telephone expenses'
    ],
    description: 'The ultimate luxury Hajj experience with 5-star accommodations right at the Haram gates, VIP Mina tents, and dedicated scholars accompanying your journey.',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1000&q=80',
    isDemo: true,
    active: true
  },
  {
    id: 'hajj-deluxe-2026',
    name: 'Deluxe Comfort Hajj Package 2026',
    durationDays: 18,
    makkahHotel: 'Makkah Hotel & Towers',
    makkahStarRating: 5,
    madinahHotel: 'Pullman Majlis Grand Mercure',
    madinahStarRating: 5,
    departureDate: '2026-05-20',
    returnDate: '2026-06-07',
    price: 8900000,
    currency: 'NGN',
    spacesTotal: 60,
    spacesRemaining: 15,
    flightsIncluded: true,
    visaAssistance: true,
    mealsIncluded: true,
    transportationIncluded: true,
    guidedTours: true,
    includedServices: [
      'Roundtrip International Flight Tickets',
      '5-Star Makkah & Madinah Hotels (within 200m of Haram)',
      'Upgraded Air-conditioned Tents in Mina (Zone 2)',
      'Buffet Meals (Breakfast & Dinner)',
      'Scholarly Lectures & Daily Guidance',
      'Private AC Bus Transportation for Rituals',
      'Hajj Visa Processing'
    ],
    excludedServices: [
      'Personal spending'
    ],
    description: 'Comprehensive 5-star comfort package ensuring spiritual focus, close proximity to the Holy Sites, and full agency support.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
    isDemo: true,
    active: true
  },
  {
    id: 'hajj-economy-2026',
    name: 'Economy Standard Hajj Package 2026',
    durationDays: 15,
    makkahHotel: 'Al Shohada Hotel Makkah',
    makkahStarRating: 4,
    madinahHotel: 'Al Aqeeq Madinah Hotel',
    madinahStarRating: 4,
    departureDate: '2026-05-22',
    returnDate: '2026-06-06',
    price: 6800000,
    currency: 'NGN',
    spacesTotal: 80,
    spacesRemaining: 22,
    flightsIncluded: true,
    visaAssistance: true,
    mealsIncluded: true,
    transportationIncluded: true,
    guidedTours: true,
    includedServices: [
      'International Flight Ticket',
      '4-Star Hotels with free shuttle service to Haram',
      'Air-conditioned Mina & Arafat Camps',
      'Half Board Meals',
      'Group Guide & Scholar Assistance',
      'Hajj Visa Support'
    ],
    excludedServices: [
      'Laundry & extra room service'
    ],
    description: 'An affordable, high-value Hajj package tailored for pilgrims seeking comfort, safety, and guidance.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
    isDemo: true,
    active: true
  }
];
