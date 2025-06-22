import type { ReactNode } from 'react';

interface Props {
  isDisabled?: boolean;
  className?: string;
  children: ReactNode[] | ReactNode;
}

export const Button = ({ children, isDisabled, className }: Props) => {
  return (
    <button
      disabled={isDisabled}
      type="submit"
      className={`w-[70%] max-w-[475px] disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer bg-amber-300 h-12 text-2xl rounded-[5px] text-black ${className}`}
    >
      {children}
    </button>
  );
};
