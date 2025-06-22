import { env } from '@/config/env.config';
import type { ResponseApi } from '@/interfaces/api.interface';
import type {
  AvailableTime,
  ReservationData,
  ReservationFromBack,
  ReserveDto,
} from '@/interfaces/parking.interface';
import { useUserStore } from '@/store/user';
import { FetchApi } from '@/utils/fetchApi';

export class ParkingService {
  private readonly fetchApi: FetchApi;

  constructor() {
    this.fetchApi = new FetchApi(`${env.VITE_BASE_API_URL}/parking`);
    const interceptors = this.fetchApi.getInterceptors();

    interceptors.request.use((config) => {
      const token = useUserStore.getState().token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  async reserve(reserveDto: ReserveDto): Promise<ReservationFromBack> {
    const { data } = (await this.fetchApi.post(
      '/reserve',
      reserveDto,
    )) as ResponseApi<ReservationData>;
    const { reservation } = data;

    return reservation;
  }

  async getAvailableTimes(date: string, selectedSlot: string) {
    const { data } = (await this.fetchApi.get(
      `/available-times?date=${date}&slot=${selectedSlot}`,
    )) as ResponseApi<AvailableTime[]>;

    return data;
  }
}
