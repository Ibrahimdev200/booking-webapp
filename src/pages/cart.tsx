import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { ShoppingBag, Trash2, Tag, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CartPage() {
  const router = useRouter();
  const { cart, removeFromCart, clearCart, applyDiscount, discountCode, discountPercent, subtotalNGN, discountAmountNGN, serviceFeeNGN, totalNGN } = useCart();
  const { formatPrice } = useCurrency();

  const [inputCode, setInputCode] = useState('');
  const [discountMsg, setDiscountMsg] = useState<{ success: boolean; text: string } | null>(null);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const res = applyDiscount(inputCode);
    setDiscountMsg({ success: res.success, text: res.message });
  };

  return (
    <>
      <Head>
        <title>Universal Travel Cart | Travel Agent Demo</title>
      </Head>

      <div style={{ background: 'var(--navy-main)', color: '#FFF', padding: '3rem 0 2rem' }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Checkout & Review</span>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800 }}>Your Travel Booking Cart</h1>
          <p style={{ color: '#94A3B8' }}>Review your flights, hotels, visas and pilgrimage packages before payment.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '3.5rem 1.25rem' }}>
        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#FFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
            <ShoppingBag size={54} style={{ color: '#CBD5E1', margin: '0 auto 1rem' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0B192C' }}>Your Travel Cart is Empty</h2>
            <p style={{ color: '#64748B', margin: '0.5rem 0 1.5rem' }}>Search flights, hotels, visa services or pilgrimage packages to add items.</p>
            <Link href="/" className="btn btn-gold">
              Explore Offerings & Book Now
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '2.5rem' }}>
            {/* Cart Items List */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0B192C' }}>Selected Items ({cart.length})</h2>
                <button onClick={clearCart} style={{ background: 'none', border: 'none', color: '#DC2626', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600 }}>
                  Clear Cart
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {cart.map((item) => (
                  <div key={item.cartId} className="card" style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', borderLeft: '4px solid #D4AF37' }}>
                    <div>
                      <span className="badge badge-gold" style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>{item.serviceType}</span>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C', margin: '4px 0 2px' }}>{item.title}</h3>
                      <div style={{ fontSize: '0.88rem', color: '#64748B' }}>{item.subtitle}</div>
                    </div>

                    <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Amount</span>
                        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C' }}>{formatPrice(item.price)}</div>
                      </div>
                      <button onClick={() => removeFromCart(item.cartId)} style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }} title="Remove Item">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Summary & Promo Code Sidebar */}
            <div>
              <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C', marginBottom: '1rem' }}>Promo & Discount Code</h3>

                <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="e.g. UMRAH2026"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    className="form-input"
                    style={{ textTransform: 'uppercase' }}
                  />
                  <button type="submit" className="btn btn-navy btn-sm">
                    Apply
                  </button>
                </form>

                {discountMsg && (
                  <div style={{ fontSize: '0.82rem', marginTop: '0.5rem', color: discountMsg.success ? '#059669' : '#DC2626', fontWeight: 600 }}>
                    {discountMsg.text}
                  </div>
                )}
                
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '6px' }}>
                  Try code: <strong>UMRAH2026</strong> for 10% Off!
                </div>
              </div>

              <div className="card" style={{ padding: '1.5rem', borderTop: '4px solid #D4AF37' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B192C', marginBottom: '1rem' }}>Payment Summary</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: '#475569' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Subtotal:</span>
                    <span>{formatPrice(subtotalNGN)}</span>
                  </div>

                  {discountPercent > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#059669', fontWeight: 700 }}>
                      <span>Discount ({discountPercent}%):</span>
                      <span>-{formatPrice(discountAmountNGN)}</span>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Agency Booking Fee:</span>
                    <span>{formatPrice(serviceFeeNGN)}</span>
                  </div>

                  <div style={{ borderTop: '1px solid #CBD5E1', paddingTop: '0.75rem', fontSize: '1.25rem', fontWeight: 800, color: '#0B192C', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Total Due:</span>
                    <span style={{ color: '#D4AF37' }}>{formatPrice(totalNGN)}</span>
                  </div>
                </div>

                <Link href="/checkout" className="btn btn-gold btn-lg" style={{ width: '100%', marginTop: '1.5rem' }}>
                  Proceed to Secure Checkout <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
