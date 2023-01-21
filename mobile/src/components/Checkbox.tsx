import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps {
  checked?: boolean;
  title: string;
}

export function Checkbox({ checked = false, title, ...rest }: Props) {
  function toggleChecked() {
    checked = !checked;
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center gap-3"
      onPress={toggleChecked}
      {...rest}
    >
      {checked ? (
        <View className="h-8 w-8 bg-green-600 rounded-lg items-center justify-center">
          <Feather name="check" size={20} color={colors.white} />
        </View>
      ) : (
        <View className="h-8 w-8 bg-zinc-800 rounded-lg"></View>
      )}
      <Text className="text-base text-white">{title}</Text>
    </TouchableOpacity>
  );
}
