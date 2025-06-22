import { useVehicle } from '@/hooks/useVehicle';
import { Button } from '@/presentation/components/Button';
import { Input } from '@/presentation/components/Input';

const Vehicles = () => {
  const { errors, form, handleChange, handleCreateVehicle } = useVehicle();

  return (
    <form
      onSubmit={handleCreateVehicle}
      className="flex  justify-center items-center flex-col  w-full h-[70vh] gap-4.5"
    >
      <Input
        error={errors.plate && errors.plate}
        label="Plate"
        name="plate"
        type="text"
        onChange={handleChange}
      />
      <Input
        error={errors.model && errors.model}
        label="Model"
        name="model"
        type="text"
        onChange={handleChange}
      />
      <Input
        error={errors.color && errors.color}
        label="Color"
        name="color"
        type="text"
        onChange={handleChange}
      />
      <Button
        isDisabled={!form.color || !form.model || !form.plate}
        type="submit"
        className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-2"
      >
        Create New Vehicle
      </Button>
    </form>
  );
};
export default Vehicles;
