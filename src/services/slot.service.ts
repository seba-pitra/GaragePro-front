import { env } from '@/config/env.config';
import type { ResponseApi } from '@/interfaces/api.interface';
import type { DataSlot, SlotApi } from '@/interfaces/slot.interface';
import { useUserStore } from '@/store/user';
import { FetchApi } from '@/utils/fetchApi';

export class SlotService {
  private readonly fetchApi: FetchApi;

  constructor() {
    this.fetchApi = new FetchApi(`${env.VITE_BASE_API_URL}/parking-slots`);
    const interceptors = this.fetchApi.getInterceptors();

    interceptors.request.use((config) => {
      const token = useUserStore.getState().token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  async getSlots(limit = 100, offset = 0): Promise<SlotApi[]> {
    const query = `?limit=${limit}&offset=${offset}`;

    const { data } = (await this.fetchApi.get(query)) as ResponseApi<DataSlot>;
    const { slots } = data;

    return slots;
  }
}
