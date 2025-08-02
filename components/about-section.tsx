'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      <div className="grid items-center gap-8 md:grid-cols-2">
        <Image
          src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80&fm=webp"
          alt="Equipe StreetCaps"
          width={800}
          height={600}
          className="w-full h-full rounded-md object-cover"
        />
        <div>
          <h2 className="font-display text-3xl mb-4">Sobre a Marca</h2>
          <p>
            Inspirada na cultura urbana, a StreetCaps cria peças limitadas com materiais de alta qualidade para o dia a dia.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
