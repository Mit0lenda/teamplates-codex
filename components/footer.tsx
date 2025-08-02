'use client';

import Link from 'next/link';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background py-8">
      <div className="container flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <Link href="mailto:contato@streetcaps.com" aria-label="E-mail" className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded">
            <Mail className="w-5 h-5" />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="https://wa.me/5500000000000" aria-label="WhatsApp" className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded">
            <Phone className="w-5 h-5" />
          </Link>
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} StreetCaps</p>
      </div>
    </footer>
  );
}
