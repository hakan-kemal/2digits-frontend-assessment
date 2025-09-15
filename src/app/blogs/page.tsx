import { PreprSdk } from '@/server/prepr';

export default async function Blogs() {
  const { Blogs } = await PreprSdk.Schema();

  return (
    <div>
      <h1>Blogs pagina</h1>

      <div>
        {Blogs?.items.map((blog) => (
          <div key={blog._id}>
            <h2>{blog.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
