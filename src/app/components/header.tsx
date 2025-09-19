import Link from 'next/link';

import Logo from '@/app/components/logo';
import { PreprSdk } from '@/server/prepr';

export default async function Header() {
  const { Navigation } = await PreprSdk.getNavigation({ slug: 'header' });

  const items = Navigation?.items ?? [];

  return (
    <header>
      {items.length > 0 ? (
        <nav id="main-nav" aria-label="Main">
          <ul className="flex min-h-20 flex-wrap items-center justify-between gap-4 px-4 py-5 md:px-20 lg:px-40">
            {items.map(({ _id, link_to_page, title }) => {
              const slug = link_to_page[0]?._slug;
              const isHome = slug === '/';

              return (
                <li key={_id}>
                  {isHome ? (
                    <Logo />
                  ) : (
                    slug && (
                      <Link className="text-lg/6 font-medium" href={`/${slug}`}>
                        {title}
                      </Link>
                    )
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      ) : (
        <Logo />
      )}
    </header>
  );
}
