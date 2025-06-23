import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface SliderProps {
  image?: any;
}

function Slider({ image }: SliderProps) {
  return (
    <View style={styles.container}>
      {image && <Image style={styles.imageBackground} source={image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 24,
    marginRight: 40,
  },
  imageBackground: {
    width: 235,
    height: 320,
    borderRadius: 10,
  },
});

export default Slider;
