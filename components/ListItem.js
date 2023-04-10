import { useMemo } from "react";
import { View, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Divider, Text } from "@rneui/themed";

const width = Dimensions.get("window").width - 40;

const ListItem = ({ item, navigate, addToFavorite }) => {
  const hero = item.item;

  const iconName = useMemo(() => {
    return hero.favorite ? "heart" : "hearto";
  }, [hero.favorite]);

  return (
    <>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => addToFavorite(hero.id)}
        >
          <AntDesign name={iconName} size={24} color="black" />
        </TouchableOpacity>
        <Text>{hero.name}</Text>
        <TouchableOpacity
          onPress={() => navigate("HeroScreen", { hero: hero })}
        >
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Divider width={2} />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width,
    height: 100,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  icon: {
    marginRight: 20,
  },
});

export default ListItem;
