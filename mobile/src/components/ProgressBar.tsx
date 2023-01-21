import { View } from "react-native";

interface ProgressBarProps {
  progress?: number;
}

export function ProgressBar({ progress = 0 }: ProgressBarProps) {
  return (
    <View className="h-3 w-full rounded-lg bg-zinc-700 mt-4">
      <View
        className="relative h-3 rounded-lg bg-violet-600"
        style={{ width: `${progress}%` }}
      />
    </View>
  );
}
