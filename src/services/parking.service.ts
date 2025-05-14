import { env } from '@/config/env.config';
import type { ResponseApi } from '@/interfaces/api.interface';
import type {
  ReservationData,
  ReservationFromBack,
  ReserveDto,
} from '@/interfaces/parking.interface';
import { FetchApi } from '@/utils/fetchApi';

export class ParkingService {
  private readonly fetchApi: FetchApi;

  constructor() {
    this.fetchApi = new FetchApi(`${env.VITE_BASE_API_URL}/parking`);
  }

  async reserve(reserveDto: ReserveDto): Promise<ReservationFromBack> {
    const { data } = (await this.fetchApi.post(
      '/reserve',
      reserveDto,
    )) as ResponseApi<ReservationData>;
    const { reservation } = data;

    return reservation;
  }
}
