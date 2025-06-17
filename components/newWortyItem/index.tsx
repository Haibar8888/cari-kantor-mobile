import { colors } from "@/assets/styles/Colors";
import { Gs } from "@/assets/styles/GlobalStyle";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface NewsworthyItemProps {
  title: string;
  address: string;
  price: string;
  image: any;
  onPress: () => void;
}

function NewsWorthyItem({
  title,
  address,
  price,
  image,
  onPress,
}: NewsworthyItemProps) {
  return (
    <View style={styles.newsWorthyItemContainer}>
      <Image source={image} style={styles.imageBackground} />
      <View style={styles.contentContainer}>
        <View style={styles.contentPrice}>
          <Text style={styles.price}>{price}</Text>
        </View>
        <View>
          <Text style={[Gs.h2, Gs.textWhite, { marginTop: 200 }]}>{title}</Text>
        </View>
        <View>
          <Text style={[Gs.font400, Gs.textWhite]}>{address}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Image source={require("../../assets/icons/arrow_right_white.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newsWorthyItemContainer: {
    marginRight: 40,
    marginBottom: 24,
  },
  imageBackground: {
    ...Gs.cornerXL,
    width: 240,
    height: 320,
    position: "relative",
  },
  contentContainer: {
    ...Gs.justifyBetween,
    ...Gs.cornerXL,
    backgroundColor: colors.transparentBlack,
    position: "absolute",
    width: 240,
    height: 320,
    padding: 20,
  },
  contentPrice: {
    ...Gs.cornerXS,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: colors.secondary,
    alignSelf: "flex-end",
  },
  price: {
    ...Gs.textPrimary,
    ...Gs.font600,
  },
  button: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    position: "absolute",
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 40,
    zIndex: 2,
    bottom: 24,
    right: -20,
  },
});

export default NewsWorthyItem;
