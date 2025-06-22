import type { AvailableTime, Reservation, ReserveDto } from '@/interfaces/parking.interface';
import type { Slot } from '@/interfaces/slot.interface';
import { ParkingService } from '@/services/parking.service';
import { getPropsByCamelCase } from '@/utils/getPropsByCamelCase';
import { toast } from 'react-toastify';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  reservation: Reservation | null;
  slots: Slot[];
  times: AvailableTime[];
  reserve: (reserveDto: ReserveDto) => Promise<void>;
  getAvailableTimes: (date: string, selectedSlot: string) => Promise<void>;
}

const parkingService = new ParkingService();

export const useParkingStore = create<State>()(
  persist(
    (set) => ({
      reservation: null,
      times: [],
      slots: [],

      reserve: async (reserveDto: ReserveDto) => {
        const newReservation = await parkingService.reserve(reserveDto);
        const reservation = getPropsByCamelCase(newReservation);

        set({ reservation });

        toast('Reserve created', { type: 'success', theme: 'dark', position: 'bottom-left' });
      },

      getAvailableTimes: async (date: string, selectedSlot: string) => {
        const times = await parkingService.getAvailableTimes(date, selectedSlot);
        set({ times });
      },
    }),

    {
      name: 'parking',
    },
  ),
);
