import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";

import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

const weekDaysNames = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feita",
  "Sexta-feira",
  "Sábado",
];

export function New() {
  const [weekDays, setWeekDays] = useState<Number[]>([]);

  function handleToggleWeekDay(index: number) {
    if (weekDays.includes(index)) {
      setWeekDays((prevState) => prevState.filter((day) => day !== index));
    } else {
      setWeekDays((prevState) => [...prevState, index]);
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>
        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-300 text-white focus:border-2 focus:border-green-600"
          placeholder="Ex.: Exercícios, dormir bem, etc..."
        />

        <Text className="font-semibold text-white mt-4 mb-3 text-base">
          Qual a recorrência?
        </Text>
        {weekDaysNames.map((weekDay, i) => (
          <Checkbox
            key={weekDay}
            title={weekDay}
            checked={weekDays.includes(i)}
            onPress={() => handleToggleWeekDay(i)}
          />
        ))}

        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row w-full bg-green-600 py-4 justify-center items-center mt-6 rounded-lg"
        >
          <Feather name="check" size={20} color={colors.white} />
          <Text className="font-semibold text-white text-base ml-3">
            Confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
