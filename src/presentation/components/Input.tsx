interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  label: string;
}

export const Input: React.FC<Props> = ({ error, label, name, onChange, type }) => {
  return (
    <div className="flex flex-col justify-center items-start w-[70%] max-w-[475px] mx-auto ">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        className="text-black bg-amber-50 w-full h-12 rounded-[5px] p-2"
      />
      {error && <span className="text-red-600">{error}</span>}
    </div>
  );
};
