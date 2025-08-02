'use client';
import { motion } from 'framer-motion';
import ProductCard from './product-card';
import { products } from '../lib/products';

export default function CollectionSection() {
  return (
    <motion.section
      id="collection"
      className="container py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-display text-3xl mb-8">Coleção</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </motion.section>
  );
}
