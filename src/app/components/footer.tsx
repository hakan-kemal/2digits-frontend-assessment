import { PreprSdk } from '@/server/prepr';

export default async function Footer() {
  const footerId = 'c24ccb9b-719a-4655-b294-c2d0b10031d9';

  const { Navigation: Footer } = await PreprSdk.Schema({
    navigationId: footerId,
  });

  return (
    <footer>
      <ul>{Footer?.items.map((item) => <li key={item._id}>{item.title}</li>)}</ul>
    </footer>
  );
}
