'use client';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
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
  );
}
