import { colors } from "@/assets/styles/Colors";
import Header from "@/components/header";
import Slider from "@/components/slider";
import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

const renderSlider = () => {
  const slider = [
    require("@/assets/images/item_2_a.png"),
    require("@/assets/images/item_2_b.png"),
    require("@/assets/images/item_2_c.png"),
  ];
  return (
    <FlatList
      data={slider}
      renderItem={({ item }) => <Slider image={item} />}
      keyExtractor={(index) => index}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
function Details() {
  return (
    <View style={styles.container}>
      <Header
        title="Office Details"
        subtitle="Space available for today"
        showRightButton={true}
      />
      <ScrollView nestedScrollEnabled>{renderSlider()}</ScrollView>
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
