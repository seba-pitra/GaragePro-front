interface Props {
  start: string;
  end: string;
  isSelected: boolean;
  onClick?: () => void;
}

export const Time: React.FC<Props> = ({ start, end, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-40 px-4 py-2 rounded-md border-2 font-semibold text-center cursor-pointer transition-all
    ${
      isSelected
        ? 'bg-yellow-400 text-black border-yellow-400'
        : 'border-white text-white hover:bg-white hover:text-black'
    }`}
    >
      {start} - {end}
    </div>
  );
};
