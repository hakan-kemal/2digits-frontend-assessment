'use client';

import { useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import Tag from '@/app/components/tag';
import Typography from '@/app/components/typography';
import type { PreprGetBlogsQuery_Blogs_Blogs_items_Blog_categories_Tag } from '@/server/prepr/generated/preprAPI.schema';

interface BlogCategorySearchWrapperProps {
  categories: PreprGetBlogsQuery_Blogs_Blogs_items_Blog_categories_Tag[];
}

export default function BlogCategorySearchWrapper({ categories }: BlogCategorySearchWrapperProps) {
  const DEFAULT = 'all blogs';
  const [activeTag, setActiveTag] = useState(DEFAULT);

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategory = (category?: string) => {
    const params = new URLSearchParams(searchParams);

    if (category) {
      setActiveTag(category);
      params.set('category', category);
    } else {
      setActiveTag(DEFAULT);
      params.delete('category');
    }

    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 px-4 md:px-20 lg:my-12 lg:px-40">
      <Typography as="h3" weight="medium" className="mt-3">
        Search for blogs
      </Typography>

      <div className="flex gap-6">
        <Tag label={DEFAULT} type="clickable-tag" isActive={activeTag === DEFAULT} onClick={() => handleCategory()} />

        {categories.map(({ _id, slug }) => (
          <Tag
            key={_id}
            label={slug}
            type="clickable-tag"
            isActive={activeTag === slug}
            onClick={() => handleCategory(slug)}
          />
        ))}
      </div>
    </div>
  );
}
