import Typography from '@/app/components/typography';
import { PreprSdk } from '@/server/prepr';

export default async function BlogsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { Page } = await PreprSdk.getPage({ slug });

  return (
    Page?.page_header && (
      <Typography as="h2" weight="bold">
        {Page.page_header.title}
      </Typography>
    )
  );
}
