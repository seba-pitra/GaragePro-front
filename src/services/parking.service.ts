import { env } from '@/config/env.config';
import type {
  Reservation,
  ReserveDto,
  ResponseCreateReservation,
} from '@/interfaces/parking.interface';
import { FetchApi } from '@/utils/fetchApi';

export class ParkingService {
  private readonly fetchApi: FetchApi;

  constructor() {
    this.fetchApi = new FetchApi(`${env.VITE_BASE_API_URL}/parking`);
  }

  async reserve(reserveDto: ReserveDto): Promise<Reservation> {
    const { data } = (await this.fetchApi.post(
      '/reserve',
      reserveDto,
    )) as ResponseCreateReservation;
    const { reservation } = data;

    return reservation;
  }
}
