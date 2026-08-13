import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import { Logo } from '../../components/common/Logo';

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(name, email, phone);
    router.push('/dashboard');
  };

  return (
    <>
      <Head>
        <title>Register Account | Travel Agent Demo</title>
      </Head>

      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', background: 'var(--cream-bg)' }}>
        <div className="card" style={{ maxWidth: '480px', width: '100%', padding: '2.5rem', borderTop: '5px solid #D4AF37' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Logo variant="light" size="md" />
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0B192C', marginTop: '1rem' }}>Create Customer Account</h1>
            <p style={{ fontSize: '0.88rem', color: '#64748B' }}>Book flights, hotels, Hajj/Umrah & track visa applications.</p>
          </div>

          <form onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" required placeholder="Alhaji Ibrahim Bello" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" required placeholder="ibrahim@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
            </div>

            <div className="form-group">
              <label className="form-label">Phone / WhatsApp</label>
              <input type="tel" required placeholder="0903 367 5852" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-input" />
            </div>

            <div className="form-group">
              <label className="form-label">Create Password</label>
              <input type="password" required placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
            </div>

            <button type="submit" className="btn btn-gold btn-lg" style={{ width: '100%', marginTop: '1rem' }}>
              Create Manaar Account
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.88rem', color: '#64748B' }}>
            Already have an account? <Link href="/auth/login" style={{ color: '#D4AF37', fontWeight: 700 }}>Login Here</Link>
          </div>
        </div>
      </div>
    </>
  );
}
