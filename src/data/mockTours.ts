import { Tour } from '../types';

export const MOCK_TOURS: Tour[] = [
  {
    id: 'tour-dubai-city',
    title: 'Ultimate Dubai Luxury City Experience',
    destination: 'Dubai',
    country: 'United Arab Emirates',
    duration: '5 Days / 4 Nights',
    price: 850000,
    currency: 'NGN',
    type: 'Group',
    rating: 4.9,
    reviewCount: 142,
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Discover Dubai’s architectural marvels, desert safari with BBQ dinner, yacht cruise around Dubai Marina, and shopping spree at Dubai Mall.',
    itinerary: [
      { day: 1, title: 'Arrival & Marina Dinner Cruise', detail: 'Welcome transfer to 5-star hotel followed by an evening luxury dhow yacht dinner cruise along Dubai Marina.' },
      { day: 2, title: 'Burj Khalifa & Modern Dubai City Tour', detail: 'Visit 124th floor At the Top Burj Khalifa, Museum of the Future, and Dubai Mall Fountains.' },
      { day: 3, title: 'VIP Desert Safari & Dune Bashing', detail: '4x4 Dune Bashing, Camel Riding, Henna painting, Falconry, and Live Arabian BBQ show under the stars.' },
      { day: 4, title: 'Palm Jumeirah & Atlantis Aquaventure', detail: 'Full day access to Aquaventure Waterpark and Lost Chambers Aquarium.' },
      { day: 5, title: 'Gold Souk & Departure', detail: 'Morning shopping at Deira Gold & Spice Souk, then private airport drop-off.' }
    ],
    included: ['5-Star Hotel Accommodation with Breakfast', 'All Transfers in AC Luxury Vehicle', 'Desert Safari + BBQ Dinner', 'Burj Khalifa 124th Floor Entry Ticket', 'Airport Pick-up & Drop-off'],
    excluded: ['International Flight Tickets', 'Personal Shopping', 'UAE Visa (Can be added at checkout)'],
    meetingPoint: 'Dubai International Airport (DXB) Terminal 1/3',
    availableDates: ['2026-09-15', '2026-10-01', '2026-10-20', '2026-11-10']
  },
  {
    id: 'tour-istanbul-heritage',
    title: 'Istanbul Ottoman & Byzantine Heritage Tour',
    destination: 'Istanbul',
    country: 'Turkey',
    duration: '6 Days / 5 Nights',
    price: 950000,
    currency: 'NGN',
    type: 'Group',
    rating: 4.8,
    reviewCount: 98,
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Immerse in centuries of Islamic history, visit Hagia Sophia, Blue Mosque, Topkapi Palace, Grand Bazaar, and cruise the Bosphorus Strait.',
    itinerary: [
      { day: 1, title: 'Arrival in Historic Sultanahmet', detail: 'Check-in to boutique hotel and evening welcome Turkish dinner.' },
      { day: 2, title: 'Old City Treasures', detail: 'Guided tour of Hagia Sophia, Sultanahmet Blue Mosque, and Hippodrome.' },
      { day: 3, title: 'Topkapi Palace & Sacred Relics', detail: 'Explore Topkapi Palace Holy Relics section and Basilica Cistern.' },
      { day: 4, title: 'Bosphorus Yacht Cruise & Spice Market', detail: 'Scenic cruise dividing Europe & Asia and shopping at Egyptian Spice Market.' },
      { day: 5, title: 'Grand Bazaar & Hammam Experience', detail: 'Grand Bazaar shopping followed by authentic Turkish bath massage.' },
      { day: 6, title: 'Farewell Istanbul', detail: 'Breakfast and transfer to Istanbul Airport.' }
    ],
    included: ['Hotel Accommodation with daily breakfast', 'Professional English/Yoruba Speaking Guide', 'Museum Entrance Fees', 'Bosphorus Cruise Ticket'],
    excluded: ['International Flights', 'Tips for guides'],
    meetingPoint: 'Istanbul Airport (IST)',
    availableDates: ['2026-09-20', '2026-10-10', '2026-11-05']
  },
  {
    id: 'tour-ziyarat-makkah-madinah',
    title: 'Historic Ziyarat Tour of Makkah & Madinah Sacred Sites',
    destination: 'Makkah & Madinah',
    country: 'Saudi Arabia',
    duration: '3 Days',
    price: 350000,
    currency: 'NGN',
    type: 'Private',
    rating: 5.0,
    reviewCount: 210,
    images: [
      'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Guided tour of historical Islamic landmarks including Mount Arafat, Cave Hira (Jabal al-Nour), Cave Thawr, Masjid Quba, Mount Uhud, and Seven Mosques.',
    itinerary: [
      { day: 1, title: 'Makkah Sacred Sites', detail: 'Visit Jabal al-Nour, Cave Hira, Jabal Thawr, Mina camps, Arafat, and Muzdalifah.' },
      { day: 2, title: 'Bullet Train to Madinah', detail: 'Travel via Haramain High Speed Rail and check-in to Madinah hotel.' },
      { day: 3, title: 'Madinah Historical Ziyarat', detail: 'Visit Masjid Quba (first mosque in Islam), Mount Uhud battle site, and Masjid al-Qiblatayn.' }
    ],
    included: ['Private AC Bus Transfer', 'Expert Scholar Guide', 'Historical Commentary & Audio System'],
    excluded: ['Hotel accommodation', 'Meals'],
    meetingPoint: 'Hotel Lobby in Makkah / Madinah',
    availableDates: ['Daily Departure']
  }
];
