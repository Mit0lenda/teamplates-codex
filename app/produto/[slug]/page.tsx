"use client";

import ProductGallery from '@/components/product-gallery';
import ReviewList from '@/components/review-list';
import SocialShare from '@/components/social-share';
import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { addItem } = useCart();
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <main id="main" className="container py-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ProductGallery images={product.images} />
      <div>
        <h1 className="font-display text-3xl mb-4">{product.name}</h1>
        <p className="mb-4">{product.price}</p>
        <p className="mb-4 text-sm max-w-prose">{product.description}</p>
        <button
          className="px-4 py-2 bg-primary text-background rounded"
          onClick={() => {
            addItem(product);
            toast.success('Adicionado ao carrinho');
          }}
        >
          Adicionar ao carrinho
        </button>
        <SocialShare url={`https://example.com/produto/${product.slug}`} />
        <ReviewList
          reviews={[
            { id: 1, author: 'Ana', text: 'Ótimo produto!', rating: product.rating },
          ]}
        />
      </div>
    </main>
  );
}
