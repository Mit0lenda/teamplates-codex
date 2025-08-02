'use client';

import { useState } from 'react';

export default function CouponInput() {
  const [code, setCode] = useState('');
  return (
    <div className="mt-4">
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Código de cupom"
        className="p-2 rounded bg-white/5"
      />
    </div>
  );
}
