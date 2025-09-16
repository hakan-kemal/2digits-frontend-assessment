import { PreprSdk } from '@/server/prepr';

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;

  const { Page } = await PreprSdk.getPage({ slug: params.slug });

  return <h1>Pagina titel: {Page?.page_header?.title} </h1>;
}
