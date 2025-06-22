import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParkingStore } from '@/store/parking';
import { useSlotStore } from '@/store/slot';

export type CalendarValuePiece = Date | null;
export type CalendarValue = CalendarValuePiece | [CalendarValuePiece, CalendarValuePiece];

export const useReserveSlot = () => {
  const navigate = useNavigate();

  const [selectedSlot, setSelectedSlot] = useState('');
  // const [selectedDate, setSelectedDate] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
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
    const currentDate = new Date().toISOString().split('T')[0];
    const date = selectedDate || currentDate;
    const formattedDate = new Date(date as Date).toISOString().split('T')[0];

    setSelectedSlot(slot);
    getAvailableTimes(formattedDate, slot);
  };

  const handleSelectTime = (start: string, end: string) => {
    setSelectedTime({ start, end });
  };

  const handleDateChange = (date: CalendarValue) => {
    const actualDate = date as Date;
    setSelectedDate(actualDate);
    const formattedDate = actualDate.toISOString().split('T')[0];
    getAvailableTimes(formattedDate, selectedSlot);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedSlot || !selectedTime.start || !selectedTime.end || !selectedDate) {
      alert('Please select a slot, time, and date before submitting.');
      return;
    }

    const formattedDate = new Date(selectedDate).toISOString().split('T')[0];

    createReservation({
      entryHour: selectedTime.start,
      exitHour: selectedTime.end,
      entryDate: formattedDate,
      exitDate: formattedDate,
      slotCode: selectedSlot,
    }).then(() => navigate('/', { replace: true }));
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
