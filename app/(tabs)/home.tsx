import { colors } from "@/assets/styles/Colors";
import { Gs } from "@/assets/styles/GlobalStyle";
import InputText from "@/components/inputText";
import NewsWorthyItem from "@/components/newWortyItem";
import { useNavigation } from "expo-router";

import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Pindahkan interface ke luar komponen
interface INewsWorthyItem {
  title: string;
  address: string;
  price: string;
  image: any; // bisa diganti `ImageSourcePropType`
}

export default function Index() {
  const dataNewsWorthy: INewsWorthyItem[] = [
    {
      title: "Deepwork",
      address: "pantai utara no. 98",
      price: "$12/day",
      image: require("../../assets/images/item_2_a.png"),
    },
    {
      title: "Hajime",
      address: "pantai utara no. 99",
      price: "$15/day",
      image: require("../../assets/images/item_2_b.png"),
    },
    {
      title: "Hajime1",
      address: "pantai utara no. 99",
      price: "$15/day",
      image: require("../../assets/images/item_2_b.png"),
    },
    {
      title: "Hajime2",
      address: "pantai utara no. 99",
      price: "$15/day",
      image: require("../../assets/images/item_2_b.png"),
    },
    {
      title: "Hajime3",
      address: "pantai utara no. 99",
      price: "$15/day",
      image: require("../../assets/images/item_2_b.png"),
    },
  ];

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("details");
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../assets/images/profile_1.png")}
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
            style={{ width: 24, height: 24 }}
          />
          <Image
            source={require("../../assets/icons/notification.png")}
            style={{ width: 24, height: 24 }}
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
          <Image
            source={require("../../assets/images/item_1_a.png")}
            style={styles.popularImageMain}
          />
          <View>
            <Image
              source={require("../../assets/images/item_1_b.png")}
              style={styles.popularImage}
            />
            <Image
              source={require("../../assets/images/item_1_c.png")}
              style={styles.popularImage}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={[Gs.h2, Gs.textBlack]}>Indoor Work</Text>
            <Text style={[Gs.textGrey]}>Jalan Galuh bekerja no.7</Text>
          </View>
          <View style={[styles.popularPrice, Gs.cornerMD]}>
            <Text style={[styles.popularLabel, Gs.cornerMD]}>$500/day</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderNewWorthy = () => {
    return (
      <View style={styles.newsWorthySection}>
        <Text style={styles.newsWorthy}>Newsworthy</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataNewsWorthy}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <NewsWorthyItem
              title={item.title}
              address={item.address}
              price={item.price}
              image={item.image}
              onPress={handlePress}
            />
          )}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {renderHeader()}
      {renderSearchBar()}
      <ScrollView style={styles.scrollContainer}>
        {renderPopularSection()}
        {renderNewWorthy()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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

  sectionContainer: {
    paddingHorizontal: 24,
  },

  sectionTitle: {
    ...Gs.textBlack,
    marginBottom: 12,
  },

  popularImageMain: {
    ...Gs.cornerXL,
    flex: 1,
    height: 150,
    marginRight: 10,
  },

  popularImage: {
    ...Gs.cornerMD,
    width: 110,
    height: 70,
    marginBottom: 10,
  },

  popularPrice: {
    ...Gs.cornerSM,
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: colors.secondary,
  },

  popularLabel: {
    ...Gs.font600,
    ...Gs.textPrimary,
  },

  newsWorthySection: {
    paddingHorizontal: 24,
    paddingVertical: 30,
  },

  newsWorthy: {
    ...Gs.font700,
    fontSize: 22,
    marginBottom: 16,
  },

  scrollContainer: {
    height: "100%",
  },
});
