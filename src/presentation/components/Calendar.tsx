import type { CalendarValue } from '@/hooks/useReserveSlot';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

interface Props {
  selectedDate: Date;
  onChange: (value: CalendarValue, event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MyCalentar: React.FC<Props> = ({ selectedDate, onChange }) => {
  const [datesToCalendar] = useState(() => {
    const today = new Date();
    today.setHours(today.getHours() + 24);
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
    return { minDate: today, maxDate: nextWeek };
  });

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  return (
    <Calendar
      locale="en"
      minDate={datesToCalendar.minDate}
      maxDate={datesToCalendar.maxDate}
      className="text-black bg-amber-700 "
      onChange={onChange}
      value={selectedDate}
    />
  );
};
