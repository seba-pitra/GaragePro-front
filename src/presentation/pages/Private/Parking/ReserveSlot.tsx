import { useEffect, useState } from 'react';
import { MyCalentar } from '@/presentation/components/Calendar';
import { Slot } from '@/presentation/components/Slot';
import { useParkingStore } from '@/store/parking';
import { useSlotStore } from '@/store/slot';
import { Time } from '@/presentation/components/Time';

export type CalendarValuePiece = Date | null;
export type CalendarValue = CalendarValuePiece | [CalendarValuePiece, CalendarValuePiece];

const ReserveSlot = () => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedDate, setSelectedDate] = useState<CalendarValue>(new Date());
  const [selectedTime, setSelectedTime] = useState({ start: '', end: '' });

  const slots = useSlotStore((state) => state.slots);
  const getSlots = useSlotStore((state) => state.getSlots);

  const times = useParkingStore((state) => state.times);
  const createReservation = useParkingStore((state) => state.reserve);
  const getAvailableTimes = useParkingStore((state) => state.getAvailableTimes);

  // TODO: time should be after select slot and date and the endpoint
  // should return the available times for that slot and date

  useEffect(() => {
    getSlots();
  }, []);

  const handleSelectSlot = (slot: string) => {
    setSelectedSlot(slot);
  };

  const handleSelectTime = (start: string, end: string) => {
    setSelectedTime({ start, end });
  };

  const handleDateChange = (date: CalendarValue) => {
    setSelectedDate(date);
    getAvailableTimes(`${new Date().toISOString()}`);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const entryTime = new Date();
    entryTime.setSeconds(entryTime.getSeconds() + 10);
    const exitTime = new Date(entryTime);
    exitTime.setHours(exitTime.getHours() + 1);

    createReservation({ entryTime, exitTime, slotCode: selectedSlot });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-8 max-[1140px]:grid-cols-4 max-[940px]:grid-cols-3 max-[700px]:grid-cols-2 max-[515px]:grid-cols-1 gap-4"
    >
      {slots.map(({ slotCode }) => (
        <Slot
          isSelected={selectedSlot === slotCode}
          key={slotCode}
          code={slotCode}
          onClick={() => handleSelectSlot(slotCode)}
        />
      ))}
      <MyCalentar selectedDate={selectedDate} onChange={handleDateChange} />

      {times.length &&
        times.map(({ start, end }) => (
          <Time
            start={start}
            end={end}
            onClick={() => handleSelectTime(start, end)}
            key={start + end + selectedDate}
            isSelected={selectedTime.start === start}
          />
        ))}

      <button type="submit" className="bg-black rounded-2xl text-4xl">
        Reserve
      </button>
    </form>
  );
};
export default ReserveSlot;
