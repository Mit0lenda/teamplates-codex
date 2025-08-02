'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-primary"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={500}
        className="object-cover w-full h-64"
      />
      <div className="p-4">
        <h3 className="font-display text-xl mb-2">{product.name}</h3>
        <p className="text-sm">{product.price}</p>
      </div>
    </motion.div>
  );
}
