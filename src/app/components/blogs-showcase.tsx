import type { PreprGetBlogsQuery_Blogs_Blogs_items_Blog } from '@/server/prepr/generated/preprAPI.schema';

import BlogCard from '../components/blog-card';

interface BlogsShowcaseProps {
  blogs: PreprGetBlogsQuery_Blogs_Blogs_items_Blog[];
  title: string;
}

export default function BlogsShowcase({ blogs, title }: BlogsShowcaseProps) {
  return (
    <div className="px-4 md:px-20 lg:px-40 lg:py-20">
      <h2 className="text-5xl/[56px] font-bold">{title}</h2>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
