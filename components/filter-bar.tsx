'use client';

import { useState } from 'react';

export default function FilterBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [value, setValue] = useState('');
  return (
    <div className="mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onSearch(e.target.value);
        }}
        placeholder="Buscar produtos"
        className="w-full p-2 rounded bg-white/5"
      />
    </div>
  );
}
