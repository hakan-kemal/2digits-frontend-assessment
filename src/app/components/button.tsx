'use client';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit';
}

export default function Button({ children, onClick, type, className }: ButtonProps) {
  const baseStyles =
    'min-w-28 rounded border-2 border-chinese-black px-8 py-3 text-base/6 font-medium text-chinese-black hover:bg-white';

  return (
    <button className={`${baseStyles} ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
