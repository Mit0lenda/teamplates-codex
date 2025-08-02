import './globals.css';
import { Anton, Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import { Toaster } from 'sonner';
import { CartProvider } from '@/context/CartContext';

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Streetwear Capsule',
  description: 'Coleção cápsula streetwear.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${inter.variable}`}>
      <body>
        <CartProvider>
          <a href="#main" className="skip-link">Pular para conteúdo</a>
          <Navbar />
          {children}
          <Toaster richColors position="top-right" />
        </CartProvider>
      </body>
    </html>
  );
}
