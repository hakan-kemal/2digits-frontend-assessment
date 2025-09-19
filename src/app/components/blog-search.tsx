'use-client';

import { useState, type FormEvent } from 'react';

import Button from '@/app/components/button';
import Typography from '@/app/components/typography';

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
      <Typography as="h3" weight="medium" className="mt-3">
        {title}
      </Typography>

      <form className="flex gap-6" onSubmit={handleSubmit}>
        <input
          className="flex-1 rounded border-2 border-light-gray px-4 py-3 placeholder:text-light-gray"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          aria-label="Search"
        />

        <Button type="submit">Search</Button>
      </form>
    </div>
  );
}
