import { colors } from "@/assets/styles/Colors";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface DetailsProps {
  title: string;
  subtitle: string;
  showRightButton?: boolean;
}

function Details({ title, subtitle, showRightButton = true }: DetailsProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* Use TouchableOpacity for better touch feedback */}
          <Image source={require("@/assets/icons/arrow_left_black.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.textHeader}>
        <Text style={{ fontSize: 22, fontWeight: 700 }}>{title}</Text>
        <Text style={{ color: "#878787", fontSize: 14, fontWeight: 400 }}>
          {subtitle}
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("booking")}>
        {showRightButton && (
          <Image source={require("@/assets/icons/menu.png")} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: "row",
    gap: 50,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 50,
  },
  textHeader: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Details;
