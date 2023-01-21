import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import {useNavigation} from "@react-navigation/native"
import LogoImage from "../assets/logo.svg";

export function Header() {
  const {navigate} = useNavigation()
  return (
    <View className="flex-row w-full items-center justify-between">
      <LogoImage />
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row items-center h-11 px-4 border border-violet-500 rounded-lg"
        onPress={() => navigate('new')}
      >
        <Feather name="plus" color={colors.violet[500]} size={20} />

        <Text className="text-white font-semibold text-base ml-3">Novo</Text>
      </TouchableOpacity>
    </View>
  );
}
