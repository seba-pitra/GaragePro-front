interface Props {
  content: string;
  isDisabled?: boolean;
}

export const Button = ({ content, isDisabled }: Props) => {
  return (
    <button
      disabled={isDisabled}
      type="submit"
      className="mt-15 w-[70%] max-w-[475px] disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer bg-amber-300 h-12 text-2xl rounded-[5px] text-black"
    >
      {content}
    </button>
  );
};
