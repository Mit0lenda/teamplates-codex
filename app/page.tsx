"use client";
import Navbar from '../components/navbar';
import HeroSection from '../components/hero-section';
import ProductCard from '../components/product-card';
import TestimonialsCarousel from '../components/testimonials-carousel';
import Footer from '../components/footer';
import StickyCTA from '../components/sticky-cta';
import { products } from '../lib/products';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroSection />
        <motion.section
          id="about"
          className="container py-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-display text-3xl mb-4">Sobre a Marca</h2>
          <p>
            Inspirada na cultura urbana, a StreetCaps cria peças limitadas com materiais de
            alta qualidade para o dia a dia.
          </p>
        </motion.section>
        <motion.section
          id="collection"
          className="container py-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-display text-3xl mb-8">Coleção</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </motion.section>
        <motion.section
          id="testimonials"
          className="container py-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-display text-3xl mb-8">Depoimentos de Clientes</h2>
          <TestimonialsCarousel />
        </motion.section>
        <motion.section
          id="contact"
          className="container py-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-display text-3xl mb-4">Contato</h2>
          <p className="mb-4">contato@streetcaps.com</p>
          <div className="flex justify-center gap-4">
            <a href="mailto:contato@streetcaps.com" className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded">E-mail</a>
            <a href="https://instagram.com" className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded">Instagram</a>
            <a href="https://wa.me/5500000000000" className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded">WhatsApp</a>
          </div>
        </motion.section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
