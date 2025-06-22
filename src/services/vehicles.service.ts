import { env } from '@/config/env.config';
import type { ResponseApi } from '@/interfaces/api.interface';
import type { Vehicle, VehicleResponseApi } from '@/interfaces/vehicle.interface';
import { useUserStore } from '@/store/user';
import { FetchApi } from '@/utils/fetchApi';

export class VehicleService {
  private readonly fetchApi: FetchApi;

  constructor() {
    this.fetchApi = new FetchApi(`${env.VITE_BASE_API_URL}/vehicles`);
    const interceptors = this.fetchApi.getInterceptors();

    interceptors.request.use((config) => {
      const token = useUserStore.getState().token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  async getVehiclesByUserEmail(email: string) {
    const { data } = (await this.fetchApi.get(`/user/${email}`)) as ResponseApi<VehicleResponseApi>;

    const { vehicles } = data;

    return vehicles;
  }

  async createVehicle(vehicle: Vehicle) {
    const { data } = (await this.fetchApi.post('/', vehicle)) as ResponseApi<VehicleResponseApi>;

    const { vehicles: newVehicle } = data;

    return newVehicle;
  }

  async deleteVehicle(plate: string) {
    const { data } = (await this.fetchApi.delete(`/${plate}`)) as ResponseApi<VehicleResponseApi>;

    const { vehicles: newVehicle } = data;

    return newVehicle;
  }
}
