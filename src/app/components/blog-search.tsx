'use-client';

import { useState } from 'react';
import type { FormEvent } from 'react';

type BlogSearchProps = {
  onSearch: (query: string) => void;
  placeholder: string;
  title?: string;
};

export default function BlogSearch({ onSearch, placeholder, title }: BlogSearchProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <div className="flex w-full flex-col gap-6 bg-bright-gray-2 px-4 py-12 text-chinese-black md:px-20 lg:px-40">
      <p className="text-xl tracking-[0.26px]">{title}</p>

      <form className="flex gap-6" onSubmit={handleSubmit}>
        <input
          className="border-light-gray placeholder:text-light-gray flex-1 rounded border-2 px-4 py-3"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          aria-label="Search"
        />

        <button
          className="min-w-28 rounded border-2 border-chinese-black px-8 py-3 text-base/6 font-medium text-chinese-black"
          type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
