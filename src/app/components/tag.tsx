'use client';

import { useState } from 'react';

interface TagProps {
  title: string;
  type?: 'tag' | 'clickable-tag';
}

export default function Tag({ title, type = 'tag' }: TagProps) {
  const [active, setActive] = useState(false);

  const baseStyles = 'inline-block min-w-20 rounded px-3 py-1 text-center text-xs/6 font-medium uppercase';

  return type === 'clickable-tag' ? (
    <button
      onClick={() => setActive(!active)}
      className={`border ${baseStyles} ${active ? 'border-tag-purple bg-tag-purple text-white' : 'hover:border-tag-purple border-tag-border-gray bg-white text-black'} `}>
      {title}
    </button>
  ) : (
    <span className={`bg-tag-gray text-tag-black ${baseStyles}`}>{title}</span>
  );
}
