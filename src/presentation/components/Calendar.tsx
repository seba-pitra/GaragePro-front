import type { CalendarValue } from '@/pages/Private/Parking/ReserveSlot';
import { useState } from 'react';
import Calendar from 'react-calendar';

interface Props {
  selectedDate: CalendarValue;
  onChange: (value: CalendarValue, event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MyCalentar: React.FC<Props> = ({ selectedDate, onChange }) => {
  const [datesToCalendar] = useState(() => {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
    return { minDate: today, maxDate: nextWeek };
  });

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
