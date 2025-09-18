'use-client';

import Image from 'next/image';

import type { PreprGetPageQuery_Page_Page_page_header_PageHeader_image_Asset } from '@/server/prepr/generated/preprAPI.schema';

interface PageHeaderProps {
  children?: React.ReactNode;
  image: PreprGetPageQuery_Page_Page_page_header_PageHeader_image_Asset;
  text?: string;
  title?: string;
  type: 'default' | 'hero';
}

export default function PageHeader({ children, image, text, title, type }: PageHeaderProps) {
  const typeClasses = {
    default: 'h-108',
    hero: '[&_h1]:uppercase h-150',
  }[type];

  return (
    <div
      className={`${typeClasses} relative flex w-screen flex-col items-center justify-center overflow-hidden bg-[rgba(0,0,0,0.5)]`}>
      {image.url && (
        <Image
          className="-z-10 object-cover object-center"
          src={image.url}
          fill
          alt={image.description || title || 'Page header image'}
          priority
        />
      )}

      {(title || text) && (
        <div className="my-auto flex max-w-3xl flex-col items-center text-center text-white">
          {title && <h1 className="text-7xl font-bold">{title}</h1>}

          {text && <p className="mt-8 text-lg/6">{text}</p>}
        </div>
      )}

      {children}
    </div>
  );
}
