'use client';

import { useState } from 'react';

interface TagProps {
  label: string;
  type?: 'tag' | 'clickable-tag';
}

export default function Tag({ label, type = 'tag' }: TagProps) {
  const [active, setActive] = useState(false);

  const baseStyles = 'inline-block min-w-20 rounded px-3 py-1 text-center text-xs/6 font-medium uppercase';

  return type === 'clickable-tag' ? (
    <button
      onClick={() => setActive(!active)}
      className={`border ${baseStyles} ${active ? 'border-blue-violet bg-blue-violet text-white' : 'hover:border-blue-violet border-bright-gray text-chinese-black bg-white'} `}>
      {label}
    </button>
  ) : (
    <span className={`bg-bright-gray-2 text-chinese-black ${baseStyles}`}>{label}</span>
  );
}
