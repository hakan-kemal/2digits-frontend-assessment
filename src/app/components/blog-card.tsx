'use client';

import Image from 'next/image';
import Link from 'next/link';

import Tag from '@/app/components/tag';
import Typography from '@/app/components/typography';
import type {
  PreprGetBlogsQuery_Blogs_Blogs_items_Blog,
  PreprGetBlogsQuery_Blogs_Blogs_items_Blog_content_Text,
} from '@/server/prepr/generated/preprAPI.schema';

interface BlogCardProps {
  blog: PreprGetBlogsQuery_Blogs_Blogs_items_Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const text = (blog.content?.[0] as PreprGetBlogsQuery_Blogs_Blogs_items_Blog_content_Text).text;

  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-full">
        {blog.banner_image.url && (
          <Image
            className="aspect-[3/2] w-full rounded-md object-cover"
            src={blog.banner_image.url}
            width={blog.banner_image.width}
            height={blog.banner_image.height}
            alt={blog.banner_image.description || 'Blog image'}
          />
        )}

        {blog.categories[0]?.body && (
          <div className="absolute bottom-2 left-2">
            <Tag label={blog.categories[0].body} type="tag" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6">
        <Typography as="h3" weight="medium" className="mt-3">
          {blog.title}
        </Typography>

        {text && (
          // eslint-disable-next-line tailwindcss/no-custom-classname
          <Typography as="p" className="font-openSans mt-3">
            {text.slice(0, Math.floor(text.length / 2))}...
          </Typography>
        )}

        <Link className="flex gap-4 text-base font-medium text-blue-violet" href={`blog/${blog._slug}`}>
          Read more
          <Image src="/icon.svg" alt="Read more" width={14} height={0} />
        </Link>
      </div>
    </div>
  );
}
