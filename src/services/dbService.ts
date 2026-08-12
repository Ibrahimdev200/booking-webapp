import { Booking, VisaApplication, SupportTicket, Hotel } from '../types';
import { MOCK_HOTELS } from '../data/mockHotels';

const STORAGE_KEYS = {
  BOOKINGS: 'manaar_db_bookings',
  VISA_APPS: 'manaar_db_visa_apps',
  HOTELS: 'manaar_db_hotels',
  TICKETS: 'manaar_db_tickets'
};

// Initial Seed Data
const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'b-01',
    reference: 'MAN-UMR-7D81P',
    userId: 'usr-customer-01',
    customerName: 'Alhaji Ibrahim Bello',
    customerEmail: 'ibrahim.bello@example.com',
    customerPhone: '0803 123 4567',
    serviceType: 'umrah',
    itemDetails: { title: '5-Star Premium Executive Umrah Package', subtitle: '10 Days Makkah & Madinah Luxury' },
    amount: 2450000,
    currency: 'NGN',
    status: 'Confirmed',
    paymentStatus: 'Successful',
    transactionId: 'TXN_99812401',
    createdAt: '2026-08-01T10:00:00Z',
    updatedAt: '2026-08-01T10:05:00Z'
  },
  {
    id: 'b-02',
    reference: 'MAN-HOT-8F42K',
    userId: 'usr-customer-01',
    customerName: 'Alhaji Ibrahim Bello',
    customerEmail: 'ibrahim.bello@example.com',
    customerPhone: '0803 123 4567',
    serviceType: 'hotel',
    itemDetails: { title: 'Grand Palace Hotel Dubai', subtitle: 'Deluxe King Room (3 Nights)' },
    amount: 555000,
    currency: 'NGN',
    status: 'Confirmed',
    paymentStatus: 'Successful',
    transactionId: 'TXN_88129402',
    createdAt: '2026-08-05T14:20:00Z',
    updatedAt: '2026-08-05T14:25:00Z'
  }
];

const INITIAL_VISA_APPS: VisaApplication[] = [
  {
    id: 'v-01',
    reference: 'MAN-VISA-93KC2',
    userId: 'usr-customer-01',
    applicantName: 'Alhaji Ibrahim Bello',
    applicantEmail: 'ibrahim.bello@example.com',
    applicantPhone: '0803 123 4567',
    country: 'United Arab Emirates (UAE / Dubai)',
    visaType: '30-Day Tourist E-Visa',
    passportNumber: 'A08945123',
    passportExpiry: '2030-06-15',
    status: 'Processing',
    uploadedDocuments: [
      { name: 'Passport_DataPage.pdf', url: '#', date: '2026-08-02' },
      { name: 'Passport_Photo.jpg', url: '#', date: '2026-08-02' }
    ],
    notes: 'Documents submitted to UAE Immigration System. Awaiting official issuance.',
    createdAt: '2026-08-02T09:15:00Z',
    updatedAt: '2026-08-03T11:00:00Z'
  }
];

export const getBookings = (): Booking[] => {
  if (typeof window === 'undefined') return INITIAL_BOOKINGS;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
    return saved ? JSON.parse(saved) : INITIAL_BOOKINGS;
  } catch (e) {
    return INITIAL_BOOKINGS;
  }
};

export const saveBooking = (booking: Booking): Booking[] => {
  const current = getBookings();
  const updated = [booking, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(updated));
  }
  return updated;
};

export const updateBookingStatus = (id: string, status: Booking['status']): Booking[] => {
  const current = getBookings();
  const updated = current.map(b => b.id === id ? { ...b, status, updatedAt: new Date().toISOString() } : b);
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(updated));
  }
  return updated;
};

export const getVisaApplications = (): VisaApplication[] => {
  if (typeof window === 'undefined') return INITIAL_VISA_APPS;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.VISA_APPS);
    return saved ? JSON.parse(saved) : INITIAL_VISA_APPS;
  } catch (e) {
    return INITIAL_VISA_APPS;
  }
};

export const saveVisaApplication = (app: VisaApplication): VisaApplication[] => {
  const current = getVisaApplications();
  const updated = [app, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.VISA_APPS, JSON.stringify(updated));
  }
  return updated;
};

export const updateVisaStatus = (id: string, status: VisaApplication['status'], notes?: string): VisaApplication[] => {
  const current = getVisaApplications();
  const updated = current.map(v => v.id === id ? { ...v, status, notes: notes || v.notes, updatedAt: new Date().toISOString() } : v);
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.VISA_APPS, JSON.stringify(updated));
  }
  return updated;
};

export const getHotels = (): Hotel[] => {
  if (typeof window === 'undefined') return MOCK_HOTELS;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.HOTELS);
    return saved ? JSON.parse(saved) : MOCK_HOTELS;
  } catch (e) {
    return MOCK_HOTELS;
  }
};

export const saveHotel = (hotel: Hotel): Hotel[] => {
  const current = getHotels();
  const updated = [hotel, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.HOTELS, JSON.stringify(updated));
  }
  return updated;
};
