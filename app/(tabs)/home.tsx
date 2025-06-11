import { Gs } from "@/assets/styles/GlobalStyle";
import InputText from "@/src/components/inputText";

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/images/profile_1.png")}
            alt=""
            style={styles.profileContainer}
          />
          <View style={styles.profileDetail}>
            <Text style={[Gs.textBlack]}>Hi, Haibar</Text>
            <Text style={[Gs.textBlack, Gs.font700]}>@haibar</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image
            source={require("../../assets/icons/gift.png")}
            style={{ width: 24 }}
          />
          <Image
            source={require("../../assets/icons/notification.png")}
            style={{ width: 24 }}
          />
        </View>
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <View
        style={{ paddingHorizontal: 24, paddingVertical: 30, marginTop: -30 }}
      >
        <InputText
          icon={require("../../assets/icons/location.png")}
          placeholder={"Find work space in jakarta"}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {renderHeader()}
      {renderSearchBar()}
      <ScrollView>
        {/* {renderPopularSection()}
        {renderNewWorthy()} */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: colors.white,
  // },
  headerContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  profileContainer: {
    marginRight: 10,
    width: 50,
    height: 50,
  },
  profileDetail: {
    flexDirection: "column",
    justifyContent: "center",
  },
});
