import { Destination } from '../types';

export const MOCK_DESTINATIONS: Destination[] = [
  {
    slug: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    tagline: 'The City of Gold and Future Wonders',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'November to April',
    currency: 'AED (Dirham)',
    language: 'Arabic / English',
    description: 'Dubai is a global destination renowned for modern luxury, futuristic architecture, world-class shopping malls, desert safaris, and pristine beaches.',
    highlights: ['Burj Khalifa 124th & 148th Floor', 'Dubai Mall & Fountain Show', 'VIP Desert Safari Dune Bashing', 'Museum of the Future', 'Palm Jumeirah Waterparks']
  },
  {
    slug: 'saudi-arabia',
    name: 'Saudi Arabia (Makkah & Madinah)',
    country: 'Saudi Arabia',
    tagline: 'The Sanctuary of Islam & Sacred Pilgrimage',
    heroImage: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'October to May',
    currency: 'SAR (Saudi Riyal)',
    language: 'Arabic',
    description: 'Home to the Holiest Mosques in Islam: Masjid al-Haram in Makkah Mukarramah and Al-Masjid an-Nabawi in Madinah Munawwarah.',
    highlights: ['Kaaba & Masjid al-Haram Tawaf', 'Al-Masjid an-Nabawi Prophet’s Mosque', 'Rawdah Rasool (SAW) Visit', 'Haramain High-Speed Rail', 'Mount Uhud & Masjid Quba']
  },
  {
    slug: 'turkey',
    name: 'Turkey (Istanbul)',
    country: 'Turkey',
    tagline: 'Where Europe Meets Asia in Eternal Elegance',
    heroImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'April to May & September to November',
    currency: 'TRY (Turkish Lira)',
    language: 'Turkish',
    description: 'A vibrant crossroad of civilizations, Turkey enthralls travellers with Ottoman palaces, Byzantine domes, Mediterranean coastlines, and savory cuisine.',
    highlights: ['Hagia Sophia Grand Mosque', 'Blue Mosque Sultanahmet', 'Topkapi Palace Relics', 'Grand Bazaar & Spice Market', 'Bosphorus Yacht Cruise']
  },
  {
    slug: 'uk',
    name: 'United Kingdom (London)',
    country: 'United Kingdom',
    tagline: 'Royal Heritage, Culture & World-Class Shopping',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    bestTimeToVisit: 'May to September',
    currency: 'GBP (£)',
    language: 'English',
    description: 'London combines rich history, world-renowned shopping districts like Oxford Street, famous landmarks, and top tier international education & business.',
    highlights: ['Big Ben & Houses of Parliament', 'London Eye & Thames Cruise', 'Buckingham Palace Changing of Guard', 'Oxford Street Shopping', 'British Museum']
  }
];
