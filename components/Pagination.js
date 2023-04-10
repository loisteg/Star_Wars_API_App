import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@rneui/base";

const Pagination = ({ totalLength, paginate }) => {
  if (!totalLength) return <></>;

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalLength / 10); i++) {
    pageNumber.push(i);
  }

  return (
    <View style={styles.paginationContainer}>
      {pageNumber.map((number) => {
        return (
          <TouchableOpacity
            key={number}
            style={styles.counterWrapper}
            onPress={() => paginate(number)}
          >
            <Text h4={true} h4Style={styles.number}>
              {number}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    marginVertical: 10,
    width: "100%",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  counterWrapper: {
    borderWidth: 2,
    borderColor: "#eee",
    paddingHorizontal: 5,
  },
  number: {
    color: "#2d79fc",
    fontSize: 20,
  },
});
