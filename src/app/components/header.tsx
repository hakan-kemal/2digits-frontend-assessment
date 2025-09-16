import Link from 'next/link';

import { PreprSdk } from '@/server/prepr';

import Logo from './logo';

export default async function Header() {
  const { Navigation } = await PreprSdk.getNavigation({
    slug: 'header',
  });

  return (
    <header>
      {Navigation?.items ? (
        <nav>
          <ul className="flex min-h-20 flex-wrap items-center justify-between gap-4 px-4 py-5 md:px-20 lg:px-40">
            {Navigation.items.map(({ _id, link_to_page, title }) => {
              const slug = link_to_page[0]?._slug || '';
              const isHome = slug === '/';

              return <li key={_id}>{isHome ? <Logo /> : <Link href={slug}>{title}</Link>}</li>;
            })}
          </ul>
        </nav>
      ) : (
        <Logo />
      )}
    </header>
  );
}
