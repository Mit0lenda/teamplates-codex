import './globals.css';
import { Anton, Inter } from 'next/font/google';
import type { Metadata } from 'next';

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
        <a href="#main" className="skip-link">Pular para conteúdo</a>
        {children}
      </body>
    </html>
  );
}
