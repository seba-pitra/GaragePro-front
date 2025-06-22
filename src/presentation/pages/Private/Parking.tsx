import { MyCalentar } from '@/presentation/components/Calendar';
import { Slot } from '@/presentation/components/Slot';
import { Time } from '@/presentation/components/Time';
import { useReserveSlot } from '@/hooks/useReserveSlot';
import { Button } from '@/presentation/components/Button';

const groupSlotsByRow = (slots: { slotCode: string }[]) => {
  const grouped: Record<string, { slotCode: string }[]> = {};

  slots.forEach((slot) => {
    const row = slot.slotCode[0];
    if (!grouped[row]) grouped[row] = [];
    grouped[row].push(slot);
  });

  return grouped;
};

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

  const groupedSlots = groupSlotsByRow(slots);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-16 min-h-screen   text-white flex flex-col items-center px-4 py-8"
    >
      {/* Calendar */}
      <div className="mb-8">
        <MyCalentar selectedDate={selectedDate} onChange={handleDateChange} />
      </div>

      {/* Slots */}
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-[1000px] justify-center">
        <div className="flex flex-col gap-6">
          {Object.keys(groupedSlots)
            .sort()
            .map((row) => (
              <div key={row} className="flex gap-4 justify-center md:justify-start">
                {groupedSlots[row].map(({ slotCode }) => (
                  <Slot
                    key={slotCode}
                    code={slotCode}
                    isSelected={selectedSlot === slotCode}
                    onClick={() => handleSelectSlot(slotCode)}
                  />
                ))}
              </div>
            ))}
        </div>

        {/* Times */}
        {selectedSlot && times.length > 0 && (
          <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-auto">
            {times.map(({ start, end }) => (
              <Time
                key={start + end}
                start={start}
                end={end}
                onClick={() => handleSelectTime(start, end)}
                isSelected={selectedTime.start === start}
              />
            ))}
          </div>
        )}
      </div>

      {/* Button */}
      {selectedSlot && selectedTime.start && <Button className="mt-8 p-2">Reserve</Button>}
    </form>
  );
};
export default ReserveSlot;
