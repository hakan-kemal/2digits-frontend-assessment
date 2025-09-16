import { PreprSdk } from '@/server/prepr';

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  console.log('params', params.slug);

  const { Page } = await PreprSdk.GetPage({ slug: params.slug });
  console.log('slug?', Page);

  return <main>Test</main>;
}
