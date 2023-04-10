import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/base";

const MainHeader = ({ favorite }) => {
  return (
    <View style={styles.wrapper}>
      {Object.entries(favorite).map((item, i) => {
        return (
          <View style={styles.counterWrapper} key={i}>
            <Text h4={true} h4Style={styles.number}>
              {item[1]}
            </Text>
            <Text>{item[0].toUpperCase()}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  wrapper: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
  },
  counterWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 40,
  },
});
