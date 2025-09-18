'use client';

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement> {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  variant?: 'body' | 'caption' | 'heading' | 'subheading';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  children: React.ReactNode;
}

export default function Typography({
  as: Typography = 'p',
  variant = 'body',
  weight = 'regular',
  children,
  className,
  ...props
}: TypographyProps) {
  const baseStyles = 'text-chinese-black tracking-[0.2px]';

  const variantStyles: Record<typeof variant, string> = {
    body: 'text-base/6',
    caption: 'text-sm/5',
    heading: 'text-2xl/8',
    subheading: 'text-lg/7',
  };

  const weightStyles: Record<typeof weight, string> = {
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <Typography className={`${baseStyles} ${variantStyles[variant]} ${weightStyles[weight]} ${className}`} {...props}>
      {children}
    </Typography>
  );
}
