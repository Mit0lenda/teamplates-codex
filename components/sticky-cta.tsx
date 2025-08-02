'use client';

export default function StickyCTA() {
  const handleClick = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <button
      onClick={handleClick}
      aria-label="Ir para coleção"
      className="fixed bottom-4 right-4 bg-primary text-background px-4 py-2 rounded-md shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary z-50"
    >
      Ver Coleção
    </button>
  );
}
