'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, name: 'João', text: 'Ótima qualidade!' },
  { id: 2, name: 'Maria', text: 'Design incrível!' },
  { id: 3, name: 'Pedro', text: 'Confortável e estiloso.' },
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
            <p className="mb-4">&ldquo;{t.text}&rdquo;</p>
            <p className="font-display">{t.name}</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
