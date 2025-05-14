import { useSlotStore } from '@/store/slot';
import { useEffect } from 'react';

const ReserveSlot = () => {
  const slots = useSlotStore((state) => state.slots);
  const getSlots = useSlotStore((state) => state.getSlots);

  useEffect(() => {
    getSlots();
  }, [getSlots]);

  return (
    <>
      {slots.map(({ slotCode }) => {
        return (
          <div key={slotCode}>
            <h1>{slotCode}</h1>
          </div>
        );
      })}
    </>
  );
};
export default ReserveSlot;
