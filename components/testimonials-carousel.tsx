'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'João',
    text: 'Ótima qualidade!',
    image:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=200&q=80&fm=webp',
  },
  {
    id: 2,
    name: 'Maria',
    text: 'Design incrível!',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80&fm=webp',
  },
  {
    id: 3,
    name: 'Pedro',
    text: 'Confortável e estiloso.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80&fm=webp',
  },
];

export default function TestimonialsCarousel() {
  return (
    <Swiper spaceBetween={16} slidesPerView={1} loop className="w-full">
      {testimonials.map((t) => (
        <SwiperSlide key={t.id}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="p-6 bg-white/5 rounded-md text-center"
          >
            <Image
              src={t.image}
              alt={t.name}
              width={64}
              height={64}
              className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
            />
            <p className="mb-4">&ldquo;{t.text}&rdquo;</p>
            <p className="font-display">{t.name}</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
