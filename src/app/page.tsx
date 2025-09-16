import { PreprSdk } from '@/server/prepr';

import Hero from './components/hero';

export default async function Home() {
  const { Page } = await PreprSdk.getPage({ slug: '/' });

  return <Hero title={Page?.page_header?.title} />;
}
