'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Product = {
  id: number;
  name: string;
  slug: string;
  price: string;
  images: string[];
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-primary"
    >
      <Link href={`/produto/${product.slug}`} className="block">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={400}
          height={500}
          className="object-cover w-full h-64"
        />
        <div className="p-4">
          <h3 className="font-display text-xl mb-2">{product.name}</h3>
          <p className="text-sm">{product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
}
