'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import BlogSearch from '../components/blog-search';

export default function BlogSearchWrapper() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }

    router.push(`/blog?${params.toString()}`);
  };

  return (
    // absolute bottom-0 w-full
    <div className="w-full">
      <BlogSearch onSearch={handleSearch} placeholder="Search blogs..." title="Search for blogs" />
    </div>
  );
}
