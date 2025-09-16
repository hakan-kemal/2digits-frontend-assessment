import { PreprSdk } from '@/server/prepr';

import Hero from './components/hero';

export default async function Home() {
  const { Page: HomePage } = await PreprSdk.GetPage({ slug: '/' });
  console.log(HomePage?.page_header?.title);

  return (
    <main>
      <Hero title={HomePage?.page_header?.title} />
    </main>
  );
}
