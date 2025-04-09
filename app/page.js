'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Lazy load components below the fold
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'));
const CtaSection = dynamic(() => import('@/components/sections/CtaSection'));
const PortfolioSection = dynamic(() => import('@/components/sections/PortfolioSection'));
const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'));
const TeamSection = dynamic(() => import('@/components/sections/TeamSection'));
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));
const Footer = dynamic(() => import('@/components/ui/Footer'));

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <Suspense fallback={<LoadingSpinner />}>
          <ServicesSection />
          <CtaSection />
          <PortfolioSection />
          <ProcessSection />
          <TeamSection />
          <TestimonialsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
