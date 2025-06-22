import type { ReactNode } from 'react';

interface Props {
  isDisabled?: boolean;
  className?: string;
  children: ReactNode[] | ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export const Button = ({ type, children, isDisabled, className, onClick }: Props) => {
  return (
    <button
      type={type || 'submit'}
      onClick={onClick}
      disabled={isDisabled}
      className={`w-[70%] max-w-[475px] disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer bg-amber-300 h-12 text-2xl rounded-[5px] pb-12 text-black ${className}`}
    >
      {children}
    </button>
  );
};
