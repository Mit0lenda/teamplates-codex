"use client";

import ProductCard from '@/components/product-card';
import FilterBar from '@/components/filter-bar';
import { products } from '@/lib/products';
import { useState } from 'react';

export default function CollectionPage() {
  const [query, setQuery] = useState('');
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <main id="main" className="container py-24">
      <FilterBar onSearch={setQuery} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
