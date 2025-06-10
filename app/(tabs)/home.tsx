import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from '../../assets/styles/Colors';
export default function Index() {

  return (
    <View
      style={styles.container}
    >
      <Text>Home</Text>
      <TouchableOpacity onPress={() => {router.push('/details')}}>
        <Text>Redirect to detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white
  }
})
