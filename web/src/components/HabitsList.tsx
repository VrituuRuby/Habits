import * as Checkbox from "@radix-ui/react-checkbox";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { BsAppIndicator, BsCheckLg } from "react-icons/bs";
import { api } from "../lib/axios";

interface HabitsInfo {
  possibleHabits: {
    id: string;
    title: string;
    created_at: Date;
  }[];
  completedHabits: string[];
}

interface HabitsListProps {
  date: Date;
  onChangedData: (completed: number) => void;
}

export function HabitsList({ date, onChangedData }: HabitsListProps) {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>();

  useEffect(() => {
    api
      .get("day", {
        params: {
          date: date.toISOString(),
        },
      })
      .then((response) => setHabitsInfo(response.data));
  }, []);

  const isItPastDate = dayjs(date).endOf("d").isBefore(new Date());

  function handleToggleCompletedHabit(habitId: string) {
    api.patch(`habits/${habitId}/toggle`);
    const habitIsCompleted = habitsInfo!.completedHabits.includes(habitId);

    let completedHabits: string[] = [];
    if (habitIsCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(
        (habit) => habit !== habitId
      );
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId];
    }

    setHabitsInfo({
      completedHabits,
      possibleHabits: habitsInfo!.possibleHabits,
    });

    onChangedData(completedHabits.length);
  }

  return (
    <div className="mt-5 flex-col flex gap-3">
      {habitsInfo?.possibleHabits.map((habit) => (
        <Checkbox.Root
          key={habit.id}
          className="flex items-center gap-3 group"
          checked={habitsInfo.completedHabits.includes(habit.id)}
          onCheckedChange={() => handleToggleCompletedHabit(habit.id)}
          disabled={isItPastDate}
        >
          <div className="w-8 h-8 border-2 bg-zing-900 border-zinc-800 rounded-lg flex items-center justify-center group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-400">
            <Checkbox.Indicator>
              <BsCheckLg size={16} color="text-white" />
            </Checkbox.Indicator>
          </div>
          <span className="font-semibold text-md text-white group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
            {habit.title}
          </span>
        </Checkbox.Root>
      ))}
    </div>
  );
}
