'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur z-40">
      <div className="container flex items-center justify-between py-4">
        <Link href="#" className="font-display text-xl text-primary">StreetCaps</Link>
        <Link href="#collection" className="text-sm text-text hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded">Coleção</Link>
      </div>
    </nav>
  );
}
