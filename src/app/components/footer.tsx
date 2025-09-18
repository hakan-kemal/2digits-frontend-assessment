import Link from '@/app/components/link';
import { PreprSdk } from '@/server/prepr';

export default async function Footer() {
  const { Navigation } = await PreprSdk.getNavigation({
    slug: 'footer',
  });

  return (
    Navigation?.items && (
      <footer className="footer-gradient">
        <ul className="flex min-h-20 flex-wrap items-center gap-4 px-4 py-5 md:gap-8 md:px-20 lg:gap-12 lg:px-40">
          {Navigation.items.map(({ _id, link_to_page, title }) => {
            const slug = link_to_page[0]?._slug;

            return (
              <li key={_id}>
                {slug && <Link href={`/${link_to_page[0]?._slug || ''}`} label={title} size="xs" color="white" />}
              </li>
            );
          })}
        </ul>
      </footer>
    )
  );
}
