import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Slot } from '@/interfaces/slot.interface';
import { SlotService } from '@/services/slot.service';

interface State {
  slots: Slot[];
  getSlots: (limit?: number, offset?: number) => Promise<void>;
}

const slotService = new SlotService();

export const useSlotStore = create<State>()(
  persist(
    (set) => ({
      slots: [],

      getSlots: async (limit?: number, offset?: number) => {
        const slotsFromBack = await slotService.getSlots(limit, offset);
        const resultSlots: Slot[] = [];

        for (const slot of slotsFromBack) {
          resultSlots.push({ slotCode: slot.slot_code });
        }

        set({ slots: resultSlots });
      },
    }),

    {
      name: 'parking',
    },
  ),
);
