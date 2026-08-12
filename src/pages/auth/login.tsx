import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import { Logo } from '../../components/common/Logo';
import { Lock, Mail, Shield } from 'lucide-react';
import { UserRole } from '../../types';

export default function LoginPage() {
  const router = useRouter();
  const { login, switchRole } = useAuth();

  const [email, setEmail] = useState('ibrahim.bello@example.com');
  const [password, setPassword] = useState('password123');
  const [selectedRole, setSelectedRole] = useState<UserRole>('Customer');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, selectedRole);

    if (selectedRole === 'Customer') {
      router.push('/dashboard');
    } else {
      router.push('/admin');
    }
  };

  return (
    <>
      <Head>
        <title>Login | Manaar Travels & Tours</title>
      </Head>

      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', background: 'var(--cream-bg)' }}>
        <div className="card" style={{ maxWidth: '460px', width: '100%', padding: '2.5rem', borderTop: '5px solid #D4AF37' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Logo variant="light" size="md" />
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0B192C', marginTop: '1rem' }}>Welcome Back</h1>
            <p style={{ fontSize: '0.88rem', color: '#64748B' }}>Login to access your bookings & travel dashboard.</p>
          </div>

          {/* Quick Staff Role Switcher for Demo Testing */}
          <div style={{ background: '#F8FAFC', padding: '0.8rem', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0B192C', display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.4rem' }}>
              <Shield size={14} style={{ color: '#D4AF37' }} /> Select Portal Account Role:
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value as UserRole)}
              className="form-select"
              style={{ fontSize: '0.85rem' }}
            >
              <option value="Customer">Customer Account</option>
              <option value="Super Admin">Super Admin Portal</option>
              <option value="Booking Agent">Booking Agent CRM</option>
              <option value="Visa Officer">Visa Officer CRM</option>
              <option value="Hajj/Umrah Officer">Hajj & Umrah Officer CRM</option>
              <option value="Finance Officer">Finance Officer CRM</option>
            </select>
          </div>

          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
            </div>

            <button type="submit" className="btn btn-gold btn-lg" style={{ width: '100%', marginTop: '1rem' }}>
              Login to {selectedRole} Portal
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.88rem', color: '#64748B' }}>
            Don't have an account? <Link href="/auth/register" style={{ color: '#D4AF37', fontWeight: 700 }}>Register Now</Link>
          </div>
        </div>
      </div>
    </>
  );
}
