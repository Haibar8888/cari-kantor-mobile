import BottomNav from "@/components/bottomNav";
import { Slot, usePathname } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  const pathname = usePathname();

  // Misalnya kamu tidak ingin BottomNav muncul di halaman detail
  const hideBottomNav =
    pathname === "/details" ||
    pathname.startsWith("/auth") ||
    pathname === "/booking";

  return (
    <View style={{ flex: 1 }}>
      <Slot />
      {!hideBottomNav && <BottomNav />}
    </View>
  );
}
