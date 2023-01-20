import { generateDaysFromYearsStart } from "../utils/generate-days-from-years-start";
import { HabitDay } from "./HabitDay";

const daysOfTheWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDaysFromYearsStart();

const minimumSummaryDays = 18 * 7; // 18 weeks
const amountDaysToFill = minimumSummaryDays - summaryDates.length;

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {daysOfTheWeek.map((day, i) => {
          return (
            <div
              key={`${day + i}`}
              className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center"
            >
              {day}
            </div>
          );
        })}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date, i) => {
          return <HabitDay key={date.toString()} />;
        })}

        {amountDaysToFill > 0 &&
          Array.from({ length: amountDaysToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className="opacity-40 cursor-not-allowed w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"
              />
            );
          })}
      </div>
    </div>
  );
}
