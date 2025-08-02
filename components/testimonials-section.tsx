'use client';
import { motion } from 'framer-motion';
import TestimonialsCarousel from './testimonials-carousel';

export default function TestimonialsSection() {
  return (
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
  );
}
