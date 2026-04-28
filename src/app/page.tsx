import React from 'react';
import HeroCarousel from '@/components/HeroCarousel';
import CredibilityBar from './home_sections/CredibilityBar';
import SignatureServices from './home_sections/SignatureServices';
import DoctorProfiles from './home_sections/DoctorProfiles';
import BeforeAfterShowcase from './home_sections/BeforeAfterShowcase';
import WhyChooseUs from './home_sections/WhyChooseUs';
import Testimonials from './home_sections/Testimonials';
import LocationsStrip from './home_sections/LocationsStrip';
import CTABanner from './home_sections/CTABanner';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <CredibilityBar />
      <SignatureServices />
      <DoctorProfiles />
      <BeforeAfterShowcase />
      <WhyChooseUs />
      <Testimonials />
      <LocationsStrip />
      <CTABanner />
    </>
  );
}
