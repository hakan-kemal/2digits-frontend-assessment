import Image from 'next/image';
import Link from 'next/link';

import BlogCard from '@/app/components/blog-card';
import BlogCategorySearch from '@/app/components/blog-category-search';
import BlogSearchWrapper from '@/app/components/blog-search-wrapper';
import PageHeader from '@/app/components/page-header';
import { PreprSdk } from '@/server/prepr';
import type { PreprGetBlogsQuery_Blogs_Blogs_items_Blog_categories_Tag } from '@/server/prepr/generated/preprAPI.schema';

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string; category?: string }>;
}) {
  const { query, page, category } = await searchParams;

  const LIMIT = 9;
  const currentPage = Number(page || '1');
  const currentQuery = query || '';
  const skip = (currentPage - 1) * LIMIT;

  const { Page } = await PreprSdk.getPage({ slug: 'blog' });
  const { Blogs } = await PreprSdk.getBlogs({ limit: LIMIT, skip, query: currentQuery, categories: category });

  const { Blogs: BlogsCategories } = await PreprSdk.getBlogsCategories();

  const categories: PreprGetBlogsQuery_Blogs_Blogs_items_Blog_categories_Tag[] = [
    ...new Map(BlogsCategories?.items.flatMap((blog) => blog.categories).map((x) => [x._id, x])).values(),
  ];

  const totalPages = Blogs?.total ? Math.ceil(Blogs.total / LIMIT) : 0;
  const pageNumbers = totalPages > 1 ? Array.from({ length: totalPages }, (_, i) => i + 1) : [];

  return (
    <>
      {Page?.page_header && (
        <PageHeader
          image={Page.page_header.image}
          text={Page.page_header.text}
          title={Page.page_header.title}
          type="default">
          <BlogSearchWrapper />
        </PageHeader>
      )}

      <BlogCategorySearch categories={categories} />

      {Blogs?.items && (
        <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 md:px-20 md:py-10 lg:grid-cols-3 lg:px-40 lg:py-20">
          {Blogs.items.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 px-4 md:px-20 lg:px-40 lg:py-4">
          {currentPage > 1 && (
            <Link href={`/blog?page=${currentPage - 1}`} className="group mr-6 inline-flex">
              <Image
                src="/chevron-left.svg"
                alt="previous page"
                width={14}
                height={14}
                className="transition-transform duration-200 group-hover:scale-125"
              />
            </Link>
          )}

          {pageNumbers.map((num) => (
            <Link
              key={num}
              href={`/blog/?page=${num}`}
              className={`rounded border px-4 py-2 ${
                num === currentPage
                  ? 'border-[#2B1E57] bg-[#2B1E57] text-[#F8F8F8]'
                  : 'bg-white text-chinese-black hover:bg-[#2B1E57] hover:text-white'
              }`}>
              {num}
            </Link>
          ))}

          {currentPage < totalPages && (
            <Link href={`/blog?page=${currentPage + 1}`} className="group ml-6 inline-flex">
              <Image
                src="/chevron-right.svg"
                alt="next page"
                width={14}
                height={0}
                className="transition-transform duration-200 group-hover:scale-125"
              />
            </Link>
          )}
        </div>
      )}
    </>
  );
}
