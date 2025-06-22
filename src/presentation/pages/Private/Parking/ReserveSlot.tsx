import { MyCalentar } from '@/presentation/components/Calendar';
import { Slot } from '@/presentation/components/Slot';
import { Time } from '@/presentation/components/Time';
import { useReserveSlot } from '@/hooks/useReserveSlot';

const ReserveSlot = () => {
  const {
    slots,
    times,
    selectedSlot,
    selectedTime,
    selectedDate,
    handleDateChange,
    handleSelectSlot,
    handleSelectTime,
    handleSubmit,
  } = useReserveSlot();

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-8 max-[1140px]:grid-cols-4 max-[940px]:grid-cols-3 max-[700px]:grid-cols-2 max-[515px]:grid-cols-1 gap-4"
    >
      <MyCalentar selectedDate={selectedDate} onChange={handleDateChange} />

      {slots.map(({ slotCode }) => (
        <Slot
          isSelected={selectedSlot === slotCode}
          key={slotCode}
          code={slotCode}
          onClick={() => handleSelectSlot(slotCode)}
        />
      ))}

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
