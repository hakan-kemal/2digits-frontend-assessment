import Link from 'next/link';

import { PreprSdk } from '@/server/prepr';

export default async function Footer() {
  const footerId = 'c24ccb9b-719a-4655-b294-c2d0b10031d9';

  const { Navigation } = await PreprSdk.GetNavigation({
    navigationId: footerId,
  });

  return (
    Navigation?.items && (
      <footer className="footer-gradient text-white">
        <ul className="flex min-h-20 flex-wrap items-center gap-4 px-4 py-5 md:gap-8 md:px-20 lg:gap-12 lg:px-40">
          {Navigation.items.map(({ _id, link_to_page, title }) => (
            <li key={_id} className="text-xs">
              <Link href={link_to_page[0]?._slug || ''}>{title}</Link>
            </li>
          ))}
        </ul>
      </footer>
    )
  );
}
