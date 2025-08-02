export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Jaqueta Preta',
    price: 'R$ 299',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80&fm=webp',
  },
  {
    id: 2,
    name: 'Camiseta Laranja',
    price: 'R$ 149',
    image: 'https://images.unsplash.com/photo-1520975918318-1d1e0ab4dba4?auto=format&fit=crop&w=600&q=80&fm=webp',
  },
  {
    id: 3,
    name: 'Calça Cargo',
    price: 'R$ 199',
    image: 'https://images.unsplash.com/photo-1562157919-1da7501abd20?auto=format&fit=crop&w=600&q=80&fm=webp',
  },
  {
    id: 4,
    name: 'Moletom Cinza',
    price: 'R$ 249',
    image: 'https://images.unsplash.com/photo-1519741491074-43ec28cc9e97?auto=format&fit=crop&w=600&q=80&fm=webp',
  },
  {
    id: 5,
    name: 'Boné Classic',
    price: 'R$ 89',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80&fm=webp',
  },
  {
    id: 6,
    name: 'Tênis Street',
    price: 'R$ 399',
    image: 'https://images.unsplash.com/photo-1528701800489-20be9f91b644?auto=format&fit=crop&w=600&q=80&fm=webp',
  },
];
