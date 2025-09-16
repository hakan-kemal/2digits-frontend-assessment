import { PreprSdk } from '@/server/prepr';

export default async function Blog(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;

  const { Blog } = await PreprSdk.getBlog({ slug: params.slug });

  return (
    <div>
      <h1>Blog pagina</h1>

      {Blog?.title}
    </div>
  );
}
