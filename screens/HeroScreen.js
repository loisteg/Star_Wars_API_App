import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import HeroItem from "../components/HeroItem";

const HeroScreen = ({ route, navigation: { goBack } }) => {
  const { hero } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <HeroItem hero={hero} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HeroScreen;
