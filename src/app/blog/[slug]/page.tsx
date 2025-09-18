import { Fragment } from 'react';

import parse from 'html-react-parser';

import BlogsShowcase from '@/app/components/blogs-showcase';
import PageHeader from '@/app/components/page-header';
import Tag from '@/app/components/tag';
import Typography from '@/app/components/typography';
import { PreprSdk } from '@/server/prepr';
import type { PreprGetBlogQuery_Blog_Blog_content_Text } from '@/server/prepr/generated/preprAPI.schema';

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { Blog } = await PreprSdk.getBlog({ slug });

  return (
    <>
      {Blog?.banner_image && <PageHeader image={Blog.banner_image} type="default" />}

      <div className="px-4 md:px-20 lg:px-40 lg:py-20">
        <Tag label={Blog?.categories[0]?.body} type="tag" />

        <Typography as="h2" weight="bold" className="mb-8 mt-4">
          {Blog?.title}
        </Typography>

        {!!Blog?.content?.length && (
          <div className="*:mt-8 [&_h2]:text-xl/6 [&_h2]:font-medium [&_h3]:text-xl/6 [&_h3]:font-medium [&_h3]:tracking-[0.26px] [&_p]:mt-4 [&_p]:text-base/4 [&_p]:tracking-[0.2px]">
            {(Blog.content as PreprGetBlogQuery_Blog_Blog_content_Text[])
              .filter(({ _id, html }) => _id && html)
              .map(({ _id, html }) => html && <Fragment key={_id}>{parse(html)}</Fragment>)}
          </div>
        )}
      </div>

      {!!Blog?.related_blogs.length && <BlogsShowcase blogs={Blog.related_blogs} title="Related blogs" />}
    </>
  );
}
