'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
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
        Inspirada na cultura urbana, a StreetCaps cria peças limitadas com materiais de alta qualidade para o dia a dia.
      </p>
    </motion.section>
  );
}
