'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <motion.div className="mb-4" layout>
        <Image
          src={images[active]}
          alt="Produto"
          width={600}
          height={600}
          className="object-cover w-full h-auto"
        />
      </motion.div>
      <div className="flex gap-2">
        {images.map((img, i) => (
          <button key={i} onClick={() => setActive(i)} className="w-20 h-20 border focus:ring-2 focus:ring-primary">
            <Image src={img} alt="thumb" width={80} height={80} className="object-cover w-full h-full" />
          </button>
        ))}
      </div>
    </div>
  );
}
