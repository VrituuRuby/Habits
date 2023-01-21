import { ScrollView, Text, View } from "react-native";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";
import { generateDaysFromYearsStart } from "../util/generate-days-from-years-start";
import { useNavigation } from "@react-navigation/native";

const days = ["D", "S", "T", "Q", "Q", "S", "S"];
const daysFromStart = generateDaysFromYearsStart();
const minimumSummaryDateSize = 18 * 7;
const amountDaysToFill = minimumSummaryDateSize - daysFromStart.length;

export function Home() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 bg-background p-8 pt-16">
      <Header />
      <View className="flex-row mt-6 mb-2">
        {days.map((weekDay, i) => {
          return (
            <Text
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{ width: DAY_SIZE }}
            >
              {weekDay}
            </Text>
          );
        })}
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {daysFromStart.map((day) => {
            return (
              <HabitDay
                key={day.toString()}
                onPress={() => {
                  navigate("habit", { date: day.toISOString() });
                }}
              />
            );
          })}

          {amountDaysToFill > 0 &&
            Array.from({ length: amountDaysToFill }).map((_, i) => {
              return (
                <View
                  key={i}
                  className="bg-zinc-900 border-2 m-1 rounded-lg border-zinc-800 w-10 h-10 opacity-40"
                  style={{ width: DAY_SIZE, height: DAY_SIZE }}
                />
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}
