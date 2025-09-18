import { PreprSdk } from '@/server/prepr';

import BlogsShowcase from '../../components/blogs-showcase';
import PageHeader from '../../components/page-header';

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { Blog } = await PreprSdk.getBlog({ slug });

  return (
    <>
      {Blog?.banner_image && <PageHeader image={Blog.banner_image} type="default" />}

      {Blog?.related_blogs && <BlogsShowcase blogs={Blog.related_blogs} title="Related blogs" />}
    </>
  );
}
