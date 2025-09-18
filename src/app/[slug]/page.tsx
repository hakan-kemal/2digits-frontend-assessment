import { PreprSdk } from '@/server/prepr';

export default async function BlogsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { Page } = await PreprSdk.getPage({ slug });

  return <h1>Pagina titel: {Page?.page_header?.title} </h1>;
}
