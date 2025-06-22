interface Props {
  start: string;
  end: string;
  isSelected: boolean;
  onClick?: () => void;
}

export const Time: React.FC<Props> = ({ start, end, isSelected, onClick }) => {
  const selectedClass = isSelected ? 'bg-red-600' : '';

  return (
    <div
      onClick={onClick}
      className={selectedClass + ' border-amber-50 border-solid border-2 flex w-fit cursor-pointer'}
    >
      <p>{start}</p> -<p>{end}</p>
    </div>
  );
};
