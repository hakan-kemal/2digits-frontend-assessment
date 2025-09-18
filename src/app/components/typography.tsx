'use client';

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement> {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'span';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  children: React.ReactNode;
}

export default function Typography({
  as: Component = 'p',
  weight = 'normal',
  children,
  className,
  ...props
}: TypographyProps) {
  const headingStyles = {
    h1: 'text-7xl',
    h2: 'text-5xl/[56px]',
    h3: 'text-xl/6 tracking-[0.26px]',
    p: 'text-base/4 tracking-[0.2px]',
    span: '',
  }[Component];

  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }[weight];

  return (
    <Component className={`${headingStyles} ${weightStyles} ${className}`} {...props}>
      {children}
    </Component>
  );
}
