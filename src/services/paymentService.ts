import { Currency } from '../types';

export interface PaymentInitParams {
  amount: number;
  currency: Currency;
  email: string;
  phone: string;
  name: string;
  serviceType: string;
  bookingRef: string;
  provider: 'Paystack' | 'Flutterwave' | 'Korapay' | 'Bank Transfer';
}

export interface PaymentResult {
  success: boolean;
  transactionId: string;
  bookingReference: string;
  message: string;
  amount: number;
  currency: Currency;
  timestamp: string;
}

export const generateBookingReference = (prefix: 'HOT' | 'FLT' | 'UMR' | 'HAJJ' | 'VISA' | 'TOUR'): string => {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let rand = '';
  for (let i = 0; i < 5; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `MAN-${prefix}-${rand}`;
};

export const initializePayment = async (params: PaymentInitParams): Promise<PaymentResult> => {
  // Simulate network delay for API request
  await new Promise(resolve => setTimeout(resolve, 1500));

  const success = true; // Sandbox test mode guarantee
  const transactionId = `TXN_${Date.now()}_${Math.floor(Math.random() * 10000)}`;

  if (success) {
    return {
      success: true,
      transactionId,
      bookingReference: params.bookingRef,
      message: `Payment of ${params.amount.toLocaleString()} ${params.currency} verified via ${params.provider}`,
      amount: params.amount,
      currency: params.currency,
      timestamp: new Date().toISOString()
    };
  } else {
    throw new Error('Payment verification failed');
  }
};
