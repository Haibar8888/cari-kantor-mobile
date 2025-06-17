import { colors } from "@/assets/styles/Colors";
import { Gs } from "@/assets/styles/GlobalStyle";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomBottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    {
      name: "Discover",
      path: "/home",
      icon: require("../../assets/icons/discover.png"),
    },
    {
      name: "Messages",
      path: "/booking",
      icon: require("../../assets/icons/messages.png"),
    },
    {
      name: "Payment",
      path: "/checkout",
      icon: require("../../assets/icons/payment.png"),
    },
    {
      name: "Settings",
      path: "/setting",
      icon: require("../../assets/icons/settings.png"),
    },
  ] as const;

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;

          return (
            <TouchableOpacity
              key={tab.name}
              style={isActive ? styles.activeTab : styles.tab}
              onPress={() => router.push(tab.path)}
            >
              <Image
                source={tab.icon}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
              {isActive && <Text style={styles.labelTab}>{tab.name}</Text>}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingVertical: 30,
    paddingHorizontal: 54,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  tabContainer: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
  },
  activeTab: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.cornerXS,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: colors.secondary,
  },
  labelTab: {
    ...Gs.font600,
    ...Gs.textPrimary,
    marginLeft: 8,
  },
  tab: {
    padding: 8,
  },
});
