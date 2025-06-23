import Header from "@/components/header";
import { View } from "react-native";

export default function Index() {
  return (
    <View>
      <Header
        title="Booking"
        subtitle="Space available for today"
        showRightButton={false}
      />
    </View>
  );
}
