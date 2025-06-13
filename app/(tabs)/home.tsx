import { colors } from "@/assets/styles/Colors";
import { Gs } from "@/assets/styles/GlobalStyle";
import InputText from "@/components/inputText";

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
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

  const renderPopularSection = () => {
    return (
           <View style={styles.sectionContainer}>
              <Text style={[styles.sectionTitle, Gs.h1]}>Popular</Text>
              <View style={Gs.flexRow}>
                <Image source={require('../../assets/images/item_1_a.png')} style={styles.popularImageMain}></Image>
                <View>
                  <Image source={require('../../assets/images/item_1_b.png')} style={styles.popularImage}></Image>
                  <Image source={require('../../assets/images/item_1_c.png')} style={styles.popularImage} ></Image>
                </View>
              </View>
             
              <View style={{flexDirection: "row", justifyContent:"space-between", alignItems:"center"}}>
                  <View>
                    <Text style={[Gs.h2,Gs.textBlack]}>Indoor Work</Text>
                    <Text style={[Gs.textGrey]}>Jalan Galuh bekerja no.7</Text>
                  </View>
                  <View style={[styles.popularPrice, Gs.cornerMD]}>
                    <Text style={[styles.popularLabel, Gs.cornerMD]}>$500/day</Text>
                  </View>
              </View>
          </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {renderHeader()}
      {renderSearchBar()}
      <ScrollView>
        {renderPopularSection()}
        {/* {renderNewWorthy()} */}
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

  fileDetail: {
    flexDirection: "column",
    justifyContent: "center",
  },

  sectionContainer:{
    paddingHorizontal: 24,
  },

  sectionTitle:{
    ...Gs.textBlack,
    marginBottom: 12,
    
  },

  popularImageMain:{
    ...Gs.cornerXL,
    flex: 1,
    height: 150,
    marginRight: 10,
  },

  popularImage:{
    ...Gs.cornerMD,
    width: 110,
    height: 70,
    marginBottom: 10
  },
  profileDetail: {},
  popularPrice: {
      ...Gs.cornerSM,
      ...Gs.justifyCenter,
      ...Gs.itemsCenter,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 12,
      backgroundColor: colors.secondary
  },

  popularLabel: {
      ...Gs.font600,
      ...Gs.textPrimary,
  }
});
