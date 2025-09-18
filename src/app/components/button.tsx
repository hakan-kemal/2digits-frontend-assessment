'use client';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({ children, onClick, type }: ButtonProps) {
  return (
    <button
      className="min-w-28 rounded border-2 border-chinese-black px-8 py-3 text-base/6 font-medium text-chinese-black"
      onClick={onClick}
      type={type}>
      {children}
    </button>
  );
}
