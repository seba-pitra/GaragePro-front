import { Trash2 } from 'lucide-react';
import { useVehicle } from '@/hooks/useVehicle';

interface Props {
  plateNumber: string;
  model: string;
  color: string;
}

export const Vehicle = ({ color, model, plateNumber }: Props) => {
  const { handleDeleteVehicle } = useVehicle();

  if (!model && !color && !plateNumber) return null;

  return (
    <div className="bg-gray-800 p-4 rounded shadow w-full relative">
      <div className="absolute top-2 right-2 flex gap-2">
        <Trash2
          size={18}
          onClick={() => handleDeleteVehicle(plateNumber)}
          className="cursor-pointer text-red-400 hover:text-red-300"
        />
      </div>

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
