'use client';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="text-chinese-black border-chinese-black min-w-28 rounded border-2 px-6 py-3 text-base/6 font-medium"
      onClick={onClick}
      type="button">
      {children}
    </button>
  );
}
