import BottomNav from "@/components/bottomNav";
import { Slot } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
      <BottomNav />
    </View>
  );
}
