import { colors } from "@/assets/styles/Colors";
import { Gs } from "@/assets/styles/GlobalStyle";
import Header from "@/components/header";
import Slider from "@/components/slider";
import { useNavigation } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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

const renderTitle = () => {
  return (
    <View style={styles.detailsContainer}>
      <View>
        <Text style={{ fontSize: 22, fontWeight: 700 }}>Homemade Office</Text>
        <Text style={{ fontWeight: 400, color: colors.grey }}>
          Jalan Haibar bekerja No. 10
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Image source={require("@/assets/icons/star_yellow.png")} />
        <Text style={{ fontSize: 16, fontWeight: 600 }}>4.8/5</Text>
      </View>
    </View>
  );
};

const renderDescription = () => {
  return (
    <View style={{ marginTop: 24 }}>
      <Text style={{ fontSize: 16, fontWeight: 600 }}>About</Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: 400,
          color: colors.grey,
          lineHeight: 30,
        }}
      >
        Lorem space curated dolor si amet deep work without distraction from any
        edge si solor. Fiesto si fast charging club and go-getter Internet zonn
        absurb prixomoti anneheil available today.
      </Text>
    </View>
  );
};

const renderOwner = () => {
  return (
    <View style={{ marginTop: 24 }}>
      <View>
        <Text style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>
          Space Owner
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <Image source={require("@/assets/images/profile_2.png")} />
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <Text style={{ fontWeight: 400, fontSize: 14 }}>Haibar</Text>
            <Image
              source={require("@/assets/icons/verified_orange.png")}
              style={{ width: 12, height: 12 }}
            />
          </View>

          <Text style={{ fontWeight: 700, fontSize: 14 }}>@Haibar</Text>
        </View>
      </View>
    </View>
  );
};

const RenderBookingButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookingContainer}>
      <View>
        <Text style={styles.price}>$5,899</Text>
        <Text style={{ color: colors.grey, fontWeight: "400" }}>/day</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("booking")}
        style={{
          justifyContent: "space-between",
          backgroundColor: "#E65605",
          flexDirection: "row",
          alignItems: "center",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontWeight: "700" }}>Start Booking</Text>
        <Image
          source={require("@/assets/icons/arrow_right_white.png")}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
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
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        {renderSlider()}
        {renderTitle()}
        {renderDescription()}
        {renderOwner()}
      </ScrollView>
      {RenderBookingButton()}
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
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  bookingContainer: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    paddingVertical: 24,
  },
  price: {
    color: "#E65605",
    fontSize: 22,
    fontWeight: "700",
  },
});

export default Details;
