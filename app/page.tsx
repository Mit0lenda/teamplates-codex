"use client";
import Navbar from '../components/navbar';
import HeroSection from '../components/hero-section';
import AboutSection from '../components/about-section';
import CollectionSection from '../components/collection-section';
import TestimonialsSection from '../components/testimonials-section';
import ContactSection from '../components/contact-section';
import Footer from '../components/footer';
import StickyCTA from '../components/sticky-cta';

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <CollectionSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
