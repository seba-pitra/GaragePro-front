interface Props {
  plateNumber: string;
  model: string;
  color: string;
}

export const Vehicle = ({ color, model, plateNumber }: Props) => {
  if (!model && !color && !plateNumber) return null;

  return (
    <div className="bg-gray-800 p-4 rounded shadow w-full">
      <p>
        <strong>Model:</strong> {model}
      </p>
      <p>
        <strong>Color:</strong> {color}
      </p>
      <p>
        <strong>Plate:</strong> {plateNumber}
      </p>
    </div>
  );
};
