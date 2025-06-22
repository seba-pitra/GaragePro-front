import { useState } from 'react';
import { useVehiclesStore } from '@/store/vehicles';
import { validateName } from '@/utils/validations';
import { useNavigate } from 'react-router-dom';

export const useVehicle = () => {
  const navigate = useNavigate();
  const createVehicle = useVehiclesStore((state) => state.createVehicle);
  const getVehiclesByUserEmail = useVehiclesStore((state) => state.getVehiclesByUserEmail);
  const userVehicles = useVehiclesStore((state) => state.userVehicles);

  const [errors, setErrors] = useState({ plate: '', model: '', color: '' });
  const [form, setForm] = useState({ plate: '', model: '', color: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCreateVehicle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const plate = form.plate.value.trim();
    const model = form.model.value.trim();
    const color = form.color.value.trim();

    const validationErrors = {
      plate: validateName(plate, 'first name'),
      model: validateName(model, 'last name'),
      color: validateName(color, 'color'),
    };

    setErrors(validationErrors);

    createVehicle({
      plateNumber: plate,
      model: model,
      color: color,
    }).then(() => {
      form.reset();
    });

    navigate('/profile');
  };

  return {
    userVehicles,
    createVehicle,
    getVehiclesByUserEmail,
    errors,
    form,
    handleChange,
    handleCreateVehicle,
  };
};
