'use client';

import Typography from '@/app/components/typography';

interface TagProps extends React.HTMLAttributes<HTMLButtonElement | HTMLSpanElement> {
  label?: string;
  type?: 'tag' | 'clickable-tag';
  isActive?: boolean;
}

export default function Tag({ label, type = 'tag', isActive = false, ...props }: TagProps) {
  const baseStyles = 'inline-block min-w-20 rounded px-3 py-1 text-center text-xs/6 font-medium uppercase';

  return type === 'clickable-tag' ? (
    <button
      {...props}
      className={`border ${baseStyles} ${isActive ? 'border-blue-violet bg-blue-violet text-white' : 'border-bright-gray bg-white text-chinese-black hover:border-blue-violet'} `}
      type="button">
      {label}
    </button>
  ) : (
    <Typography as="span" className={`bg-bright-gray-2 text-chinese-black ${baseStyles}`}>
      {label}
    </Typography>
  );
}
