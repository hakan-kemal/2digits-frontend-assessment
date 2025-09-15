import { PreprSdk } from '@/server/prepr';

export default async function Home() {
  const { Page } = await PreprSdk.Schema();

  return (
    <main>
      <h1>{Page?.page_header?.title}</h1>
    </main>
  );
}
