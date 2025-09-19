import Link from 'next/link';

import { PreprSdk } from '@/server/prepr';

export default async function Footer() {
  const { Navigation } = await PreprSdk.getNavigation({ slug: 'footer' });

  const items = Navigation?.items ?? [];

  return (
    <footer className="footer-gradient">
      {items.length > 0 && (
        <nav id="footer-nav" aria-label="Footer">
          <ul className="flex min-h-20 flex-wrap items-center gap-4 px-4 py-5 md:gap-8 md:px-20 lg:gap-12 lg:px-40">
            {items.map(({ _id, link_to_page, title }) => {
              const slug = link_to_page[0]?._slug;

              return (
                <li key={_id}>
                  {slug && (
                    <Link className="text-xs/4" href={`/${slug}`}>
                      {title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </footer>
  );
}
