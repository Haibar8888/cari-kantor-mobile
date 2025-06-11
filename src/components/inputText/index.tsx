import { colors } from "@/assets/styles/Colors";
import { Gs } from "@/assets/styles/GlobalStyle";
import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

interface InputTextProps {
  icon?: any;
  label?: string;
  placeholder: string;
}

export default function InputText({
  icon,
  label,
  placeholder,
}: InputTextProps) {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.searchContainer}>
        {icon && <Image source={icon} style={styles.iconContainer} />}
        <TextInput
          placeholder={placeholder}
          style={styles.searchInput}
          numberOfLines={1}
          underlineColorAndroid="transparent"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    ...Gs.h4,
    ...Gs.textBlack,
    marginTop: 16,
    marginBottom: 4,
  },

  searchContainer: {
    ...Gs.cornerXL,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 13,
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: colors.greyContainer,
  },

  iconContainer: {
    width: 24,
    height: 24,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
    // padding: 0, // bisa tambahkan ini jika ingin pastikan tidak ada padding ekstra
  },
});
