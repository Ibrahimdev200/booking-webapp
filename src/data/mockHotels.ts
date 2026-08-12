import { Hotel } from '../types';

export const MOCK_HOTELS: Hotel[] = [
  {
    id: 'hot-dubai-01',
    name: 'Grand Palace Hotel Dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'Sheikh Zayed Road, Downtown Dubai',
    starRating: 5,
    guestRating: 9.3,
    reviewCount: 428,
    distanceFromCenter: '0.8 km from Burj Khalifa',
    pricePerNight: 185000,
    currency: 'NGN',
    breakfastIncluded: true,
    freeCancellation: true,
    propertyType: 'Hotel',
    isDemo: true,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: ['Free High-Speed Wi-Fi', 'Infinity Pool', 'Luxury Spa', '24/7 Room Service', 'Fitness Center', 'Executive Lounge', 'Valet Parking'],
    description: 'Experience unparalleled luxury in the heart of Dubai with breathtaking views of the Burj Khalifa and world-class hospitality.',
    rooms: [
      {
        id: 'r-d-01',
        name: 'Deluxe King Room with Burj View',
        type: 'Deluxe King',
        capacity: 2,
        pricePerNight: 185000,
        bedType: '1 Extra Large Double Bed',
        sizeSqMters: 48,
        features: ['Burj View', 'Balcony', 'Nespresso Machine', 'Marble Bathroom'],
        available: true
      },
      {
        id: 'r-d-02',
        name: 'Royal Executive Suite',
        type: 'Executive Suite',
        capacity: 4,
        pricePerNight: 320000,
        bedType: '1 King + Sofa Bed',
        sizeSqMters: 85,
        features: ['Lounge Access', 'Personal Butler', 'Panoramic Skyline View'],
        available: true
      }
    ]
  },
  {
    id: 'hot-makkah-01',
    name: 'Pullman Zamzam Makkah',
    city: 'Makkah',
    country: 'Saudi Arabia',
    address: 'Abraj Al Bait Complex, King Abdel Aziz Endowment',
    starRating: 5,
    guestRating: 9.1,
    reviewCount: 890,
    distanceFromCenter: 'Direct access to Masjid al-Haram',
    distanceFromHaram: '50m (Direct Haram Front)',
    pricePerNight: 245000,
    currency: 'NGN',
    breakfastIncluded: true,
    freeCancellation: true,
    propertyType: 'Luxury Suite',
    isDemo: true,
    images: [
      'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: ['Direct Haram Access', 'Kabah View Rooms', 'Audio Broadcast of Haram Prayers', 'Multilingual Staff', 'Halal Restaurants'],
    description: 'Premier 5-star pilgrimage hotel in Abraj Al Bait Complex offering direct access and clear views of the Holy Haram.',
    rooms: [
      {
        id: 'r-m-01',
        name: 'Haram View Quad Suite',
        type: 'Quad Suite',
        capacity: 4,
        pricePerNight: 245000,
        bedType: '4 Single Beds',
        sizeSqMters: 55,
        features: ['Direct Haram View', 'Prayer Area in Room', 'Zamzam Water'],
        available: true
      }
    ]
  },
  {
    id: 'hot-madinah-01',
    name: 'Dar Al Taqwa Madinah',
    city: 'Madinah',
    country: 'Saudi Arabia',
    address: 'Off King Fahd Gate, Al Madinah',
    starRating: 5,
    guestRating: 9.4,
    reviewCount: 650,
    distanceFromCenter: 'Facing Prophet’s Mosque',
    distanceFromHaram: '20m from Al-Masjid an-Nabawi',
    pricePerNight: 210000,
    currency: 'NGN',
    breakfastIncluded: true,
    freeCancellation: true,
    propertyType: 'Hotel',
    isDemo: true,
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: ['Prophet Mosque Courtyard View', 'Gourmet Dining', '24/7 Concierge', 'Express Check-in'],
    description: 'Offers peace and elegance directly opposite the Ladies Gate of Al-Masjid an-Nabawi.',
    rooms: [
      {
        id: 'r-md-01',
        name: 'Prophet Mosque View Twin Room',
        type: 'Twin Room',
        capacity: 2,
        pricePerNight: 210000,
        bedType: '2 Single Beds',
        sizeSqMters: 40,
        features: ['Mosque View', 'Soundproof Windows', 'Complimentary Dates & Tea'],
        available: true
      }
    ]
  },
  {
    id: 'hot-istanbul-01',
    name: 'Bosphorus Palace Istanbul',
    city: 'Istanbul',
    country: 'Turkey',
    address: 'Ciragan Caddesi, Besiktas, Istanbul',
    starRating: 5,
    guestRating: 9.0,
    reviewCount: 310,
    distanceFromCenter: '2.5 km from City Center',
    pricePerNight: 165000,
    currency: 'NGN',
    breakfastIncluded: true,
    freeCancellation: true,
    propertyType: 'Hotel',
    isDemo: true,
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: ['Bosphorus Sea View', 'Turkish Hammam Spa', 'Waterfront Dining', 'Airport Shuttle'],
    description: 'Restored Ottoman palace waterfront hotel overlooking the Bosphorus Strait.',
    rooms: [
      {
        id: 'r-ist-01',
        name: 'Deluxe Sea View Suite',
        type: 'Deluxe Suite',
        capacity: 2,
        pricePerNight: 165000,
        bedType: '1 Double Bed',
        sizeSqMters: 45,
        features: ['Sea View', 'Ottoman Decor', 'Jacuzzi'],
        available: true
      }
    ]
  },
  {
    id: 'hot-lagos-01',
    name: 'Eko Hotels & Suites Victoria Island',
    city: 'Lagos',
    country: 'Nigeria',
    address: 'Plot 1415 Adetokunbo Ademola St, Victoria Island, Lagos',
    starRating: 5,
    guestRating: 8.8,
    reviewCount: 520,
    distanceFromCenter: 'Victoria Island Central',
    pricePerNight: 140000,
    currency: 'NGN',
    breakfastIncluded: true,
    freeCancellation: true,
    propertyType: 'Hotel',
    isDemo: true,
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: ['Swimming Pool', '8 Fine Dining Restaurants', 'Convention Center', 'Tennis Courts'],
    description: 'Nigeria’s premier luxury convention hotel situated in Victoria Island Lagos.',
    rooms: [
      {
        id: 'r-lag-01',
        name: 'Eko Signature Deluxe Room',
        type: 'Deluxe Room',
        capacity: 2,
        pricePerNight: 140000,
        bedType: '1 King Bed',
        sizeSqMters: 42,
        features: ['City View', 'Work Desk', 'Smart TV'],
        available: true
      }
    ]
  }
];
