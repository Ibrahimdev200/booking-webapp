import React from 'react';
import Head from 'next/head';
import { UniversalSearchWidget } from '../components/home/UniversalSearchWidget';
import { QuickServiceCards } from '../components/home/QuickServiceCards';
import { DestinationsSection } from '../components/home/DestinationsSection';
import { FeaturedHotels } from '../components/home/FeaturedHotels';
import { FeaturedFlights } from '../components/home/FeaturedFlights';
import { HajjUmrahSection } from '../components/home/HajjUmrahSection';
import { WhyUs } from '../components/home/WhyUs';
import { HowItWorks } from '../components/home/HowItWorks';
import { ReviewsSection } from '../components/home/ReviewsSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel Agent Demo | Official Travel & Pilgrimage Showcase</title>
        <meta name="description" content="Travel Agent Demo Website for booking Hajj 2026, Umrah packages, visas, international flights, and global hotels." />
      </Head>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '85vh',
        backgroundImage: `linear-gradient(180deg, rgba(7, 19, 36, 0.82) 0%, rgba(15, 44, 89, 0.95) 100%), url('https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1rem 4rem',
        color: '#FFF'
      }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '850px', margin: '0 auto 3rem' }} className="animate-fade-in">
            <span className="badge badge-orange" style={{ fontSize: '0.85rem', padding: '0.45rem 1.25rem', marginBottom: '1.2rem' }}>
              🚀 Official Travel Agent Demo Showcase
            </span>
            
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              color: '#FFFFFF',
              letterSpacing: '-0.5px'
            }}>
              Explore. Discover. Experience.<br />
              <span style={{
                background: 'linear-gradient(135deg, #FF6B00 0%, #FF8500 50%, #FFA033 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 900
              }}>Your Premium Travel Showcase</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#E2E8F0',
              fontWeight: 400,
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Book flights, hotels, tours, Hajj, Umrah and visa services with Manaar Travels & Tours Limited.
            </p>
          </div>

          {/* Universal Booking Search Widget */}
          <UniversalSearchWidget />
        </div>
      </section>

      {/* 6 Quick Service Cards Immediately Below Hero */}
      <QuickServiceCards />

      {/* Popular Destinations Explorer */}
      <DestinationsSection />

      {/* Featured Hotel Deals */}
      <FeaturedHotels />

      {/* Live Flight Routes */}
      <FeaturedFlights />

      {/* Hajj & Umrah Packages Section */}
      <HajjUmrahSection />

      {/* Why Manaar Travels */}
      <WhyUs />

      {/* How It Works (4 Steps) */}
      <HowItWorks />

      {/* Customer Reviews & Testimonials */}
      <ReviewsSection />
    </>
  );
}
