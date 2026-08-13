import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { initializePayment, generateBookingReference } from '../services/paymentService';
import { saveBooking } from '../services/dbService';
import { generateBookingPDF } from '../services/pdfService';
import { CreditCard, Landmark, CheckCircle2, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import { Booking } from '../types';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, totalNGN, clearCart } = useCart();
  const { formatPrice } = useCurrency();

  const [provider, setProvider] = useState<'Paystack' | 'Flutterwave' | 'Korapay' | 'Bank Transfer'>('Paystack');
  const [customerName, setCustomerName] = useState('Alhaji Ibrahim Bello');
  const [customerEmail, setCustomerEmail] = useState('ibrahim.bello@example.com');
  const [customerPhone, setCustomerPhone] = useState('0803 123 4567');

  const [loading, setLoading] = useState(false);
  const [completedBooking, setCompletedBooking] = useState<Booking | null>(null);

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0 && !completedBooking) return;

    setLoading(true);

    const primaryItem = cart[0];
    const prefixMap = { hotel: 'HOT', flight: 'FLT', hajj: 'HAJJ', umrah: 'UMR', visa: 'VISA', tour: 'TOUR' };
    const prefix = (prefixMap[primaryItem?.serviceType] || 'HOT') as any;
    const bookingRef = generateBookingReference(prefix);

    try {
      const result = await initializePayment({
        amount: totalNGN,
        currency: 'NGN',
        email: customerEmail,
        phone: customerPhone,
        name: customerName,
        serviceType: primaryItem?.serviceType || 'travel',
        bookingRef,
        provider
      });

      const newBooking: Booking = {
        id: `b_${Date.now()}`,
        reference: bookingRef,
        userId: 'usr-customer-01',
        customerName,
        customerEmail,
        customerPhone,
        serviceType: primaryItem?.serviceType || 'hotel',
        itemDetails: { title: primaryItem?.title, subtitle: primaryItem?.subtitle },
        amount: totalNGN,
        currency: 'NGN',
        status: 'Confirmed',
        paymentStatus: 'Successful',
        transactionId: result.transactionId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      saveBooking(newBooking);
      setCompletedBooking(newBooking);
      clearCart();
    } catch (err) {
      alert('Payment processing failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Secure Checkout | Travel Agent Demo</title>
      </Head>

      <div style={{ background: 'var(--navy-main)', color: '#FFF', padding: '3.5rem 0 2.5rem', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>SSL 256-Bit Encrypted</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Complete Your Travel Payment</h1>
          <p style={{ color: '#94A3B8' }}>Select your preferred payment gateway or corporate bank transfer.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '3.5rem 1.25rem', maxWidth: '850px' }}>
        {completedBooking ? (
          /* Successful Confirmation View */
          <div className="card" style={{ padding: '2.5rem', textAlign: 'center', borderTop: '5px solid #10B981' }}>
            <CheckCircle2 size={54} style={{ color: '#10B981', margin: '0 auto 1rem' }} />
            <span className="badge badge-success" style={{ fontSize: '0.85rem' }}>Payment Verified & Confirmed</span>

            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0B192C', marginTop: '0.5rem' }}>
              Booking Reference: <span style={{ color: '#D4AF37' }}>{completedBooking.reference}</span>
            </h2>

            <p style={{ color: '#64748B', maxWidth: '550px', margin: '0.75rem auto 1.5rem', fontSize: '0.95rem' }}>
              Your reservation for <strong>{completedBooking.itemDetails?.title}</strong> has been confirmed! A confirmation voucher has been sent to <strong>{completedBooking.customerEmail}</strong>.
            </p>

            <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '12px', textAlign: 'left', margin: '1.5rem 0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.9rem' }}>
                <div><strong>Passenger / Customer:</strong> {completedBooking.customerName}</div>
                <div><strong>Transaction ID:</strong> {completedBooking.transactionId}</div>
                <div><strong>Amount Paid:</strong> {formatPrice(completedBooking.amount)}</div>
                <div><strong>Payment Status:</strong> {completedBooking.paymentStatus}</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => generateBookingPDF(completedBooking)} className="btn btn-gold">
                <Download size={18} /> Download Official PDF Voucher
              </button>
              <Link href="/dashboard" className="btn btn-navy">
                Go to Customer Dashboard
              </Link>
            </div>
          </div>
        ) : (
          /* Payment Form */
          <form onSubmit={handlePay} className="card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0B192C', marginBottom: '1.25rem' }}>Customer & Contact Information</h2>

            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" required value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="form-input" />
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Email Address (For Voucher Delivery)</label>
                <input type="email" required value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone / WhatsApp</label>
                <input type="tel" required value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} className="form-input" />
              </div>
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0B192C', margin: '2rem 0 1rem' }}>Select Active Payment Method</h2>

            <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
              <div
                onClick={() => setProvider('Paystack')}
                style={{
                  border: provider === 'Paystack' ? '2px solid #D4AF37' : '1px solid #E2E8F0',
                  background: provider === 'Paystack' ? 'rgba(212,175,55,0.05)' : '#FFF',
                  padding: '1.25rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <CreditCard size={24} style={{ color: '#D4AF37' }} />
                <div>
                  <div style={{ fontWeight: 800, color: '#0B192C' }}>Paystack Gateway</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Card, USSD, Transfer</div>
                </div>
              </div>

              <div
                onClick={() => setProvider('Flutterwave')}
                style={{
                  border: provider === 'Flutterwave' ? '2px solid #D4AF37' : '1px solid #E2E8F0',
                  background: provider === 'Flutterwave' ? 'rgba(212,175,55,0.05)' : '#FFF',
                  padding: '1.25rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <CreditCard size={24} style={{ color: '#D4AF37' }} />
                <div>
                  <div style={{ fontWeight: 800, color: '#0B192C' }}>Flutterwave Gateway</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Cards & Virtual Accounts</div>
                </div>
              </div>

              <div
                onClick={() => setProvider('Korapay')}
                style={{
                  border: provider === 'Korapay' ? '2px solid #D4AF37' : '1px solid #E2E8F0',
                  background: provider === 'Korapay' ? 'rgba(212,175,55,0.05)' : '#FFF',
                  padding: '1.25rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <CreditCard size={24} style={{ color: '#D4AF37' }} />
                <div>
                  <div style={{ fontWeight: 800, color: '#0B192C' }}>Korapay Checkout</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Instant Bank Transfer</div>
                </div>
              </div>

              <div
                onClick={() => setProvider('Bank Transfer')}
                style={{
                  border: provider === 'Bank Transfer' ? '2px solid #D4AF37' : '1px solid #E2E8F0',
                  background: provider === 'Bank Transfer' ? 'rgba(212,175,55,0.05)' : '#FFF',
                  padding: '1.25rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <Landmark size={24} style={{ color: '#D4AF37' }} />
                <div>
                  <div style={{ fontWeight: 800, color: '#0B192C' }}>Corporate Bank Transfer</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Direct Agency Transfer</div>
                </div>
              </div>
            </div>

            {provider === 'Bank Transfer' && (
              <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', border: '1px solid #CBD5E1', marginBottom: '1.5rem', fontSize: '0.88rem' }}>
                <div><strong>Bank Name:</strong> Guaranteed Trust Bank (GTBank)</div>
                <div><strong>Account Name:</strong> Manaar Travels & Tours Limited</div>
                <div><strong>Account Number:</strong> 0123456789</div>
              </div>
            )}

            <button type="submit" disabled={loading} className="btn btn-gold btn-lg" style={{ width: '100%' }}>
              {loading ? 'Verifying Transaction Server-Side...' : `Pay ${formatPrice(totalNGN)} via ${provider}`}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
