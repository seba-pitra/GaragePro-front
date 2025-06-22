import { useParkingStore } from '@/store/parking';
import { useSlotStore } from '@/store/slot';
import { useEffect, useState } from 'react';

export type CalendarValuePiece = Date | null;
export type CalendarValue = CalendarValuePiece | [CalendarValuePiece, CalendarValuePiece];

export const useReserveSlot = () => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState({ start: '', end: '' });

  const slots = useSlotStore((state) => state.slots);
  const getSlots = useSlotStore((state) => state.getSlots);

  const times = useParkingStore((state) => state.times);
  const createReservation = useParkingStore((state) => state.reserve);
  const getAvailableTimes = useParkingStore((state) => state.getAvailableTimes);

  useEffect(() => {
    getSlots();
  }, [getSlots]);

  const handleSelectSlot = (slot: string) => {
    setSelectedSlot(slot);
  };

  const handleSelectTime = (start: string, end: string) => {
    setSelectedTime({ start, end });
  };

  const handleDateChange = (date: CalendarValue) => {
    const formattedDate = new Date(date as Date).toISOString().split('T')[0];
    setSelectedDate(formattedDate);
    getAvailableTimes(formattedDate, 'A2');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createReservation({
      entryHour: selectedTime.start,
      exitHour: selectedTime.end,
      entryDate: selectedDate,
      exitDate: selectedDate,
      slotCode: selectedSlot,
    });
  };

  return {
    selectedSlot,
    setSelectedSlot,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    slots,
    times,
    getSlots,
    getAvailableTimes,
    handleSelectSlot,
    handleSelectTime,
    handleDateChange,
    handleSubmit,
  };
};
