import Image from 'next/image';
import Link from 'next/link';

import { PreprSdk } from '@/server/prepr';

export default async function Header() {
  const headerId = 'afead6d3-65fb-4121-8624-18ce2b65869c';

  const { Navigation } = await PreprSdk.Schema({
    navigationId: headerId,
  });

  const navItems = Navigation?.items;

  return (
    <header className="mx-4 my-5 md:mx-20 lg:mx-40">
      {navItems ? (
        <nav>
          <ul className="flex justify-between">
            {navItems.map(({ _id, link_to_page, title }) => {
              const slug = link_to_page[0]?._slug || '';
              const isHome = slug === '/';

              return (
                <li key={_id}>
                  <Link href={slug}>
                    {isHome ? <Image src="/2digits-logo.svg" alt="2DIGITS Logo" width={200} height={60} /> : title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : (
        <Image src="/2digits-logo.svg" alt="2DIGITS Logo" width={200} height={0} />
      )}
    </header>
  );
}
