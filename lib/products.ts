export type Product = {
  id: number;
  name: string;
  slug: string;
  price: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Jaqueta Preta',
    slug: 'jaqueta-preta',
    price: 'R$ 299',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80&fm=webp',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80&fm=webp',
    ],
    description: 'Jaqueta preta estilosa para qualquer ocasião.',
    sizes: ['P', 'M', 'G'],
    colors: ['Preto'],
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Camiseta Laranja',
    slug: 'camiseta-laranja',
    price: 'R$ 149',
    images: [
      'https://images.unsplash.com/photo-1520975918318-1d1e0ab4dba4?auto=format&fit=crop&w=600&q=80&fm=webp',
    ],
    description: 'Camiseta vibrante em tom laranja.',
    sizes: ['P', 'M', 'G'],
    colors: ['Laranja'],
    rating: 4.2,
  },
  {
    id: 3,
    name: 'Calça Cargo',
    slug: 'calca-cargo',
    price: 'R$ 199',
    images: [
      'https://images.unsplash.com/photo-1562157919-1da7501abd20?auto=format&fit=crop&w=600&q=80&fm=webp',
    ],
    description: 'Calça cargo confortável com bolsos.',
    sizes: ['36', '38', '40'],
    colors: ['Verde'],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'Moletom Cinza',
    slug: 'moletom-cinza',
    price: 'R$ 249',
    images: [
      'https://images.unsplash.com/photo-1519741491074-43ec28cc9e97?auto=format&fit=crop&w=600&q=80&fm=webp',
    ],
    description: 'Moletom cinza macio e quente.',
    sizes: ['P', 'M', 'G'],
    colors: ['Cinza'],
    rating: 4.8,
  },
  {
    id: 5,
    name: 'Boné Classic',
    slug: 'bone-classic',
    price: 'R$ 89',
    images: [
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80&fm=webp',
    ],
    description: 'Boné clássico streetwear.',
    sizes: ['Único'],
    colors: ['Preto'],
    rating: 4.1,
  },
  {
    id: 6,
    name: 'Tênis Street',
    slug: 'tenis-street',
    price: 'R$ 399',
    images: [
      'https://images.unsplash.com/photo-1528701800489-20be9f91b644?auto=format&fit=crop&w=600&q=80&fm=webp',
    ],
    description: 'Tênis confortável para o dia a dia.',
    sizes: ['38', '40', '42'],
    colors: ['Branco'],
    rating: 4.6,
  },
];
