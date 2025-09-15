import { PreprSdk } from '@/server/prepr';

export default async function Blog() {
  const blogId = '560a2073-1d74-424c-8464-db2e32ea0cd3';

  const { Blog } = await PreprSdk.Schema({
    blogId,
  });

  return (
    <div>
      <h1>Blog pagina</h1>

      {Blog?.title}
    </div>
  );
}
