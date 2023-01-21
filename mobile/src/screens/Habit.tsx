import { ScrollView, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { ProgressBar } from "../components/ProgressBar";
import { Checkbox } from "../components/Checkbox";

interface Params {
  date: string;
}

export function Habit() {
  const route = useRoute();
  const { date } = route.params as Params;

  const parsedDate = dayjs(date);
  const weekDay = parsedDate.format("dddd");
  const dayAndMonth = parsedDate.format("MM/DD");

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Text className="font-semibold text-zinc-400 text-base">{weekDay}</Text>
        <Text className="font-extrabold text-white text-3xl mt-2">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={50} />

        <View className="mt-6">
          <Checkbox title="Teste" />
          <Checkbox title="Teste" />
          <Checkbox title="Teste" />
        </View>
      </ScrollView>
    </View>
  );
}
