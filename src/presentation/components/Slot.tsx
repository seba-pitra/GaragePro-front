interface Props {
  code: string;
  onClick: () => void;
  isSelected: boolean;
}

export const Slot = ({ code, isSelected, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center w-[60px] h-[120px] sm:w-[70px] sm:h-[140px] 
        rounded-md border-2 cursor-pointer text-lg font-bold
        ${
          isSelected
            ? 'bg-yellow-400 text-black'
            : 'border-white text-white hover:bg-white hover:text-black'
        }
        transition`}
    >
      {code}
    </div>
  );
};
