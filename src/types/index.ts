export type UserRole = 
  | 'Super Admin' 
  | 'Booking Agent' 
  | 'Visa Officer' 
  | 'Hajj/Umrah Officer' 
  | 'Finance Officer' 
  | 'Content Manager'
  | 'Customer';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  address?: string;
  passportNumber?: string;
  passportExpiry?: string;
  createdAt: string;
}

export type BookingStatus = 
  | 'Pending' 
  | 'Awaiting Payment' 
  | 'Paid' 
  | 'Processing' 
  | 'Confirmed' 
  | 'Cancelled' 
  | 'Completed' 
  | 'Refund Requested' 
  | 'Refunded';

export type VisaStatus = 
  | 'Draft' 
  | 'Submitted' 
  | 'Documents Required' 
  | 'Under Review' 
  | 'Processing' 
  | 'Approved' 
  | 'Rejected' 
  | 'Completed';

export type ServiceType = 'hotel' | 'hotels' | 'flight' | 'flights' | 'hajj' | 'umrah' | 'visa' | 'tour' | 'tours';

export type Currency = 'NGN' | 'USD' | 'GBP' | 'EUR' | 'SAR' | 'AED';

export interface Hotel {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  starRating: number;
  guestRating: number;
  reviewCount: number;
  distanceFromCenter: string;
  distanceFromHaram?: string;
  pricePerNight: number;
  currency: Currency;
  breakfastIncluded: boolean;
  freeCancellation: boolean;
  propertyType: 'Hotel' | 'Resort' | 'Apartment' | 'Luxury Suite';
  images: string[];
  amenities: string[];
  description: string;
  isDemo?: boolean;
  rooms: HotelRoom[];
}

export interface HotelRoom {
  id: string;
  name: string;
  type: string;
  capacity: number;
  pricePerNight: number;
  bedType: string;
  sizeSqMters: number;
  features: string[];
  available: boolean;
}

export interface Flight {
  id: string;
  airline: string;
  airlineLogo: string;
  flightNumber: string;
  origin: string;
  originCity: string;
  destination: string;
  destinationCity: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  stopDetails?: string;
  cabinClass: 'Economy' | 'Premium Economy' | 'Business' | 'First Class';
  price: number;
  currency: Currency;
  baggageAllowance: string;
  refundable: boolean;
  fareRules: string;
  isDemo?: boolean;
}

export interface HajjPackage {
  id: string;
  name: string;
  durationDays: number;
  makkahHotel: string;
  makkahStarRating: number;
  madinahHotel: string;
  madinahStarRating: number;
  departureDate: string;
  returnDate: string;
  price: number;
  currency: Currency;
  spacesTotal: number;
  spacesRemaining: number;
  flightsIncluded: boolean;
  visaAssistance: boolean;
  mealsIncluded: boolean;
  transportationIncluded: boolean;
  guidedTours: boolean;
  includedServices: string[];
  excludedServices: string[];
  description: string;
  image: string;
  isDemo?: boolean;
  active: boolean;
}

export interface UmrahPackage {
  id: string;
  name: string;
  category: 'Economy' | 'Standard' | 'Premium' | 'Ramadan' | 'Family';
  durationDays: number;
  makkahHotel: string;
  makkahDistanceHaram: string;
  madinahHotel: string;
  madinahDistanceHaram: string;
  flightsIncluded: boolean;
  visaIncluded: boolean;
  transfersIncluded: boolean;
  price: number;
  currency: Currency;
  description: string;
  image: string;
  ziyaratIncluded: boolean;
  active: boolean;
}

export interface VisaCountry {
  id: string;
  country: string;
  flagCode: string;
  visaType: string;
  processingTime: string;
  validity: string;
  serviceFee: number;
  embassyFeeEstimate: number;
  currency: Currency;
  requirements: string[];
  image: string;
  popular?: boolean;
}

export interface Tour {
  id: string;
  title: string;
  destination: string;
  country: string;
  duration: string;
  price: number;
  currency: Currency;
  type: 'Group' | 'Private' | 'Family';
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  itinerary: { day: number; title: string; detail: string }[];
  included: string[];
  excluded: string[];
  meetingPoint: string;
  availableDates: string[];
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  heroImage: string;
  bestTimeToVisit: string;
  currency: string;
  language: string;
  description: string;
  highlights: string[];
}

export interface CartItem {
  cartId: string;
  serviceType: ServiceType;
  title: string;
  subtitle: string;
  details: Record<string, any>;
  price: number;
  currency: Currency;
  image?: string;
}

export interface Booking {
  id: string;
  reference: string;
  userId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceType: ServiceType;
  itemDetails: any;
  amount: number;
  currency: Currency;
  status: BookingStatus;
  paymentStatus: 'Pending' | 'Successful' | 'Failed' | 'Refunded';
  transactionId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface VisaApplication {
  id: string;
  reference: string;
  userId: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  country: string;
  visaType: string;
  passportNumber: string;
  passportExpiry: string;
  status: VisaStatus;
  uploadedDocuments: { name: string; url: string; date: string }[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SupportTicket {
  id: string;
  ticketNumber: string;
  userId: string;
  userName: string;
  subject: string;
  category: string;
  status: 'Open' | 'In Progress' | 'Waiting for Customer' | 'Resolved' | 'Closed';
  createdAt: string;
  messages: { sender: string; message: string; date: string; isStaff?: boolean }[];
}
