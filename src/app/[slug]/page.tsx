import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

import PageHeader from '@/app/components/page-header';
import Typography from '@/app/components/typography';
import { PreprSdk } from '@/server/prepr';

export default async function BlogsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { Page } = await PreprSdk.getPage({ slug });

  return (
    <>
      {Page?.page_header && <PageHeader image={Page.page_header.image} type="default" />}

      <div className="px-4 md:px-20 lg:px-40 lg:py-20">
        <Typography as="h2" weight="bold" className="mb-8">
          {Page?.title}
        </Typography>

        {Page?.html && (
          // eslint-disable-next-line tailwindcss/no-custom-classname
          <div className="font-openSans *:mt-8 [&_h2]:text-xl/6 [&_h2]:font-medium [&_h3]:text-xl/6 [&_h3]:font-medium [&_h3]:tracking-[0.26px] [&_li]:list-disc [&_p]:mt-4 [&_p]:text-base/4 [&_p]:tracking-[0.2px] [&_ul]:pl-4">
            {parse(DOMPurify.sanitize(Page.html))}
          </div>
        )}
      </div>
    </>
  );
}
