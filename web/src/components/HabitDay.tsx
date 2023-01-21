import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import { ProgressBar } from "./ProgressBar";

interface HabitDayProps {
  amount: number;
  completed: number;
}

export function HabitDay({ amount, completed }: HabitDayProps) {
  const completionRate = Math.round((completed / amount) * 100);

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          "w-10 h-10 border-2 rounded-lg transition-colors",
          {
            "bg-zinc-900 border-zinc-800": completionRate === 0,
            "bg-violet-900 border-violet-700": completionRate > 0 && completionRate < 20,
            "bg-violet-800 border-violet-600": completionRate >= 20 && completionRate < 40,
            "bg-violet-700 border-violet-500": completionRate >= 40 && completionRate < 60,
            "bg-violet-600 border-violet-500": completionRate >= 60 && completionRate < 80,
            "bg-violet-500 border-violet-400": completionRate >= 80,
          }
        )}
      />
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">sábado</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            21/01
          </span>

          <ProgressBar progress={completionRate} />
          <Popover.Arrow className="fill-zinc-900" height={8} width={16} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
