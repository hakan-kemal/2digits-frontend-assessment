import Link from 'next/link';

import { PreprSdk } from '@/server/prepr';

export default async function Footer() {
  const { Navigation } = await PreprSdk.getNavigation({
    slug: 'footer',
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
