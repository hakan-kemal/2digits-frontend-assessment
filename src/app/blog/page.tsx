import Link from 'next/link';

import { PreprSdk } from '@/server/prepr';

import BlogCard from '../components/blog-card';
import BlogSearchWrapper from '../components/blog-search-wrapper';
import PageHeader from '../components/page-header';

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query, page } = await searchParams;

  const LIMIT = 9;
  const currentPage = Number.parseInt(page || '1', 10);
  const currentQuery = query || '';
  const skip = (currentPage - 1) * LIMIT;

  const { Page } = await PreprSdk.getPage({ slug: 'blog' });
  const { Blogs } = await PreprSdk.getBlogs({ limit: LIMIT, skip, query: currentQuery });

  const totalPages = Blogs?.total ? Math.ceil(Blogs.total / LIMIT) : 0;
  const pageNumArr = totalPages > 1 ? Array.from({ length: totalPages }, (_, i) => i + 1) : [];

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

      {Blogs?.items && (
        <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 md:px-20 md:py-10 lg:grid-cols-3 lg:px-40 lg:py-20">
          {Blogs.items.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}

      {pageNumArr.length > 0 && (
        <div className="flex items-center justify-center gap-2 px-4 md:px-20 lg:px-40 lg:py-4">
          {/* Previous button */}
          {currentPage > 1 && (
            <Link href={`/blog?page=${currentPage - 1}`} className="rounded bg-gray-200 px-3 py-1 hover:bg-gray-300">
              &lt;
            </Link>
          )}

          {/* Page numbers */}
          {pageNumArr.map((num) => (
            <Link
              key={num}
              href={`/blog/?page=${num}`}
              className={`rounded px-3 py-1 ${
                num === currentPage ? 'bg-gray-800 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}>
              {num}
            </Link>
          ))}

          {/* Next button */}
          {currentPage < totalPages && (
            <Link href={`/blog?page=${currentPage + 1}`} className="rounded bg-gray-200 px-3 py-1 hover:bg-gray-300">
              &gt;
            </Link>
          )}
        </div>
      )}
    </>
  );
}
