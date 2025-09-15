import { PreprSdk } from '@/server/prepr';

export default async function Home() {
  const Schema = await PreprSdk.Schema();

  const headerId = 'afead6d3-65fb-4121-8624-18ce2b65869c';
  const footerId = 'c24ccb9b-719a-4655-b294-c2d0b10031d9';

  const { Navigation: Header } = await PreprSdk.Schema({
    navigationId: headerId,
  });

  const { Navigation: Footer } = await PreprSdk.Schema({
    navigationId: footerId,
  });

  return (
    <>
      <header>
        <nav>
          <ul>{Header?.items.map((item) => <li key={item._id}>{item.title}</li>)}</ul>
        </nav>
      </header>

      <main>
        <h1>{Schema.Page?.page_header?.title}</h1>
      </main>

      <footer>
        <ul>{Footer?.items.map((item) => <li key={item._id}>{item.title}</li>)}</ul>
      </footer>
    </>
  );
}
