interface Props {
  code: string;
  onClick: () => void;
  isSelected: boolean;
}

export const Slot: React.FC<Props> = ({ code, onClick, isSelected }) => {
  const selectedClass = isSelected ? 'bg-amber-50' : '';

  return (
    <div
      onClick={onClick}
      key={code}
      className={selectedClass + ' border-amber-50 border-solid border-2 w-fit p-4 cursor-pointer'}
    >
      <h1>{code}</h1>
    </div>
  );
};
