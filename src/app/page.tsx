import BlogsShowcase from '@/app/components/blogs-showcase';
import PageHeader from '@/app/components/page-header';
import { PreprSdk } from '@/server/prepr';

export default async function HomePage() {
  const { Page } = await PreprSdk.getPage({ slug: '/' });
  const { Blogs } = await PreprSdk.getBlogs({ limit: 3, sort: 'created_on_DESC' });

  return (
    <>
      {Page?.page_header && (
        <PageHeader
          image={Page.page_header.image}
          text={Page.page_header.text}
          title={Page.page_header.title}
          type="hero"
        />
      )}

      {Blogs?.items && <BlogsShowcase blogs={Blogs.items} title="The newest blogs" />}
    </>
  );
}
