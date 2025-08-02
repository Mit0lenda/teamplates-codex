'use client';

import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items, removeItem } = useCart();
  const total = items.reduce((sum, item) => sum + parseFloat(item.price.replace(/[^0-9,]/g, '').replace(',', '.')) * item.quantity, 0);
  return (
    <main id="main" className="container py-24">
      <h1 className="font-display text-3xl mb-6">Carrinho</h1>
      {items.length === 0 && <p>Seu carrinho está vazio.</p>}
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.slug} className="flex justify-between items-center border-b pb-2">
            <span>
              {item.name} x {item.quantity}
            </span>
            <button onClick={() => removeItem(item.slug)} className="text-sm text-primary">Remover</button>
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <p className="mt-4">Total: R$ {total.toFixed(2)}</p>
      )}
    </main>
  );
}
