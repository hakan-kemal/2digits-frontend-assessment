import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Image className="h-10" src="/2digits-logo.svg" alt="2DIGITS Logo" width={200} height={40} />
    </Link>
  );
}
