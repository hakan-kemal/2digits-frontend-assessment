'use-client';

import Image from 'next/image';

import Typography from '@/app/components/typography';
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
    hero: 'h-150',
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
        <div className="my-auto flex max-w-3xl flex-col items-center gap-8 text-center text-white">
          {title && (
            <Typography as="h1" weight="bold" className="uppercase">
              {title}
            </Typography>
          )}

          {text && (
            <Typography as="p" className="text-lg/6">
              {text}
            </Typography>
          )}
        </div>
      )}

      {children}
    </div>
  );
}
