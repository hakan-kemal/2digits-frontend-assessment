'use client';

import NextLink from 'next/link';

interface LinkProps {
  color?: 'black' | 'white' | 'purple';
  href: string;
  label: string;
  size?: 'xs' | 'sm' | 'lg';
}

export default function Link({ color = 'black', href, label, size = 'sm' }: LinkProps) {
  const sizeClasses = {
    xs: 'text-xs/4',
    sm: 'text-[15px]/6 font-medium',
    lg: 'text-lg/6 font-medium',
  }[size];

  const colorClasses = {
    black: 'text-chinese-black',
    white: 'text-white',
    purple: 'text-blue-violet',
  }[color];

  return (
    <NextLink className={`${sizeClasses} ${colorClasses}`} href={href}>
      {label}
    </NextLink>
  );
}
