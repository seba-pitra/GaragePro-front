import { create } from 'zustand';
import type { Vehicle } from '@/interfaces/vehicle.interface';
import { VehicleService } from '@/services/vehicles.service';
import { getPropsByCamelCase } from '@/utils/getPropsByCamelCase';

interface State {
  userVehicles: Vehicle[];
  getVehiclesByUserEmail: (email: string) => Promise<void>;
  createVehicle: (vehicle: Vehicle) => Promise<void>;
  deleteVehicle: (plateNumber: string) => Promise<void>;
}

const vehicleService = new VehicleService();

export const useVehiclesStore = create<State>()((set) => ({
  userVehicles: [],

  getVehiclesByUserEmail: async (email: string) => {
    const foundVehicles = await vehicleService.getVehiclesByUserEmail(email);
    const resultVehicles: Vehicle[] = [];

    for (const vehicle of foundVehicles) {
      const formattedVehicle = getPropsByCamelCase(vehicle) as Vehicle;
      resultVehicles.push(formattedVehicle);
    }

    set({ userVehicles: resultVehicles });
  },

  createVehicle: async (vehicle: Vehicle) => {
    const newVehicles = await vehicleService.createVehicle(vehicle);

    const formattedVehicle = getPropsByCamelCase(newVehicles) as Vehicle;

    set((state) => ({
      userVehicles: [...state.userVehicles, formattedVehicle],
    }));
  },

  deleteVehicle: async (plateNumber: string) => {
    await vehicleService.deleteVehicle(plateNumber);

    set((state) => {
      const userVehicles = state.userVehicles.filter((veh) => veh.plateNumber !== plateNumber);
      return { userVehicles };
    });
  },
}));
