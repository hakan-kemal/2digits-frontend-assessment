export default function Hero({ title }: { title?: string }) {
  return <section className="px-4 py-5 md:px-20 lg:px-40">{title}</section>;
}
