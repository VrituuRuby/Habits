import * as Checkbox from "@radix-ui/react-checkbox";
import { FormEvent, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { api } from "../lib/axios";

const availableWeekDays = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

export function NewHabitForm() {
  const [title, setTitle] = useState("");
  const [weekDays, setWeekDays] = useState<Number[]>([]);

  async function createNewHabit(event: FormEvent) {
    if (!title || !weekDays) {
      return;
    }

    event.preventDefault();
    await api.post("/habits", {
      title,
      weekDays,
    });

    setTitle("");
    setWeekDays([]);
  }

  function handleToggleWeekDay(day_index: number) {
    if (weekDays.includes(day_index)) {
      setWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== day_index)
      );
    } else {
      setWeekDays((prevState) => [...prevState, day_index]);
    }
  }

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>
      <input
        type="text"
        id="title"
        placeholder="Ex.: Exercícios, dormir bem, etc..."
        autoFocus
        value={title}
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual é a recorrência?
      </label>

      <div className="flex flex-col gap-2 mt-3">
        {availableWeekDays.map((weekDay, index) => (
          <Checkbox.Root
            key={weekDay + index}
            checked={weekDays.includes(index)}
            onCheckedChange={() => handleToggleWeekDay(index)}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 border-2 bg-zing-900 border-zinc-800 rounded-lg flex items-center justify-center group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-400">
              <Checkbox.Indicator>
                <BsCheckLg size={16} color="text-white" />
              </Checkbox.Indicator>
            </div>
            <span className="text-base text-white">{weekDay}</span>
          </Checkbox.Root>
        ))}
      </div>
      <button
        type="submit"
        className="mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-500"
      >
        <BsCheckLg size={20} fontWeight="bold" />
        Confirmar
      </button>
    </form>
  );
}
