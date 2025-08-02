'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1520975918318-1d1e0ab4dba4?auto=format&fit=crop&w=1400&q=80&fm=webp"
        alt="Coleção streetwear"
        fill
        priority
        className="object-cover"
      />
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="font-display text-5xl md:text-7xl mb-6"
        >
          Coleção Cápsula
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link
            href="#collection"
            className="inline-block bg-primary text-background px-8 py-3 rounded-md font-medium hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Comprar Agora
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
